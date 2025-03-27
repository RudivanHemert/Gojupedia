import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ListOrdered, Images, AlertTriangle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useProgress } from '@/hooks/useProgress';
import { useFavorites } from '@/hooks/useFavorites';
import FavoriteButton from '@/components/ui/FavoriteButton';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export interface KataStep {
  id: string;
  number: number;
  title: string;
  description: string;
  image?: string;
}

interface KataStepsProps {
  kataId: string;
  kataName: string;
  steps: KataStep[];
}

const InteractiveKataSteps: React.FC<KataStepsProps> = ({ kataId, kataName, steps }) => {
  // Safeguard against undefined or empty steps
  const validSteps = Array.isArray(steps) && steps.length > 0 ? steps : [];

  // Use a try-catch to handle missing ThemeProvider
  let isDarkMode = false;
  try {
    const { isDarkMode: themeIsDarkMode } = useTheme();
    isDarkMode = themeIsDarkMode;
  } catch (error) {
    console.warn('InteractiveKataSteps: ThemeProvider not found, defaulting to light mode');
  }

  // Use a try-catch for the progress hook as well
  let updateProgress = (id: string, type: string, progress: number) => {};
  try {
    const { updateProgress: progressUpdate } = useProgress();
    updateProgress = progressUpdate;
  } catch (error) {
    console.warn('InteractiveKataSteps: ProgressProvider not found, progress will not be saved');
  }

  const [currentStep, setCurrentStep] = useState(0);
  const [showImages, setShowImages] = useState(true);
  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const totalSteps = validSteps.length;
  
  // Add logging to debug
  useEffect(() => {
    console.log('InteractiveKataSteps: Component mounted');
    console.log('InteractiveKataSteps: Received steps:', steps?.length || 0);
    console.log('InteractiveKataSteps: Valid steps count:', validSteps.length);
    console.log('InteractiveKataSteps: kataId:', kataId);
    console.log('InteractiveKataSteps: kataName:', kataName);
    
    try {
      if (validSteps.length > 0) {
        console.log('InteractiveKataSteps: First step:', JSON.stringify(validSteps[0]));
      } else {
        console.error('InteractiveKataSteps: No valid steps provided');
        setError('No steps data available for this kata.');
      }
    } catch (err) {
      console.error('InteractiveKataSteps: Error logging steps:', err);
      setError(`Error processing steps data: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  }, [steps, validSteps, kataId, kataName]);
  
  // Reset currentStep if it's out of bounds
  useEffect(() => {
    if (currentStep >= totalSteps && totalSteps > 0) {
      console.log('InteractiveKataSteps: Resetting currentStep because it was out of bounds');
      setCurrentStep(0);
    }
  }, [currentStep, totalSteps]);
  
  // Update progress when steps are viewed
  useEffect(() => {
    if (totalSteps === 0) return;
    
    // Calculate progress based on current step
    const newProgress = Math.min(100, Math.round(((currentStep + 1) / totalSteps) * 100));
    setProgressPercent(newProgress);
    
    // Only update external progress tracking once per step
    const timer = setTimeout(() => {
      // Update progress in the hook after a delay to prevent rapid updates
      updateProgress(kataId, 'kata', newProgress);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentStep, kataId, totalSteps, updateProgress]);
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setDirection(-1);
    }
  };
  
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setDirection(1);
    }
  };
  
  const goToStep = (stepIndex: number) => {
    setDirection(stepIndex > currentStep ? 1 : -1);
    setCurrentStep(stepIndex);
  };
  
  // Safely get current step data or fallback to default
  const getCurrentStepData = (): KataStep => {
    try {
      if (!validSteps[currentStep]) {
        console.warn('InteractiveKataSteps: Missing step data for index:', currentStep);
        return {
          id: 'error-step',
          number: 0,
          title: 'Error: Step not found',
          description: 'The requested step data could not be found.'
        };
      }
      return validSteps[currentStep];
    } catch (err) {
      console.error('InteractiveKataSteps: Error getting current step data:', err);
      return {
        id: 'error-step',
        number: 0,
        title: 'Error: Failed to access step data',
        description: `An error occurred: ${err instanceof Error ? err.message : 'Unknown error'}`
      };
    }
  };
  
  const currentStepData = getCurrentStepData();
  
  // Variants for animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };
  
  // Direction of slide animation
  const [direction, setDirection] = useState(0);
  
  // Function to resolve image path issues
  const resolveImagePath = (imagePath) => {
    if (!imagePath) return null;
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // For the new structure with capital 'I' in Images folder
    if (imagePath.startsWith('/Images/')) {
      return imagePath;
    }
    
    // For older paths that might still use lowercase 'images'
    if (imagePath.startsWith('/images/')) {
      // Return the corrected path with capital 'I'
      return imagePath.replace('/images/', '/Images/');
    }
    
    // If it's just a filename without a path
    if (!imagePath.includes('/')) {
      return `/Images/Kata/${imagePath}`;
    }
    
    return imagePath;
  };
  
  const renderStepImage = () => {
    if (!currentStepData || !currentStepData.image) return null;
    
    const resolvedImagePath = resolveImagePath(currentStepData.image);
    
    return (
      <div className="mb-4 rounded-lg overflow-hidden">
        <img 
          src={resolvedImagePath}
          alt={`Step ${currentStepData.number} - ${currentStepData.title}`}
          className="w-full object-cover max-h-[250px]"
          onError={(e) => {
            console.error(`Error loading image: ${resolvedImagePath}`);
            // Fallback to placeholder
            (e.target as HTMLImageElement).src = '/Images/placeholder.jpg';
          }}
        />
      </div>
    );
  };
  
  if (error) {
    return (
      <div className="bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-100 p-6 rounded-lg">
        <div className="flex items-start space-x-2 mb-4">
          <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-lg">Error Loading Steps</h3>
            <p>{error}</p>
          </div>
        </div>
        <pre className="bg-amber-100 dark:bg-amber-800/50 p-3 rounded text-xs overflow-auto">
          {JSON.stringify({ receivedSteps: steps, kataId, kataName }, null, 2)}
        </pre>
      </div>
    );
  }
  
  if (totalSteps === 0) {
    return (
      <div className="bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-100 p-6 rounded-lg">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-lg">No Steps Available</h3>
            <p>There are no steps available for this kata.</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`relative bg-white ${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : ''}`}>
      {/* Progress bar at the top */}
      <div className="sticky top-0 w-full bg-white shadow-md z-10 px-4 pt-2 pb-1 flex flex-col gap-1 dark:bg-gray-900">
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>Stap {currentStep + 1} van {totalSteps}</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-1 w-full" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Step title */}
        <h2 className="text-xl font-semibold mb-2">{currentStepData.title}</h2>
        
        {/* Step image */}
        {renderStepImage()}
        
        {/* Step description */}
        <div className="prose max-w-none mb-6 dark:prose-invert">
          {currentStepData.description.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between pt-2 mb-8">
          <Button
            variant="outline"
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            className={`${isDarkMode ? 'dark:border-gray-700 dark:text-gray-300' : ''}`}
          >
            Vorige
          </Button>
          <Button
            onClick={handleNextStep}
            className={`${isDarkMode ? 'dark:bg-blue-600 dark:hover:bg-blue-700' : ''}`}
          >
            {currentStep === totalSteps - 1 ? 'Afronden' : 'Volgende'}
          </Button>
        </div>

        {/* Step navigation */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Alle stappen:</h3>
          <div className="flex flex-wrap gap-2">
            {validSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => goToStep(step.number - 1)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
                  ${currentStep === step.number - 1 
                    ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') 
                    : (isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300')}
                  transition-colors`}
              >
                {step.number}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Complete button */}
      {/* {showCompleteButton && (
        <div className={`sticky bottom-0 w-full p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t shadow-lg flex justify-center`}>
          <Button 
            className="w-full sm:w-auto"
            onClick={handleComplete}
          >
            <CheckCircle className="mr-2 h-4 w-4" /> {completeText}
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default InteractiveKataSteps; 