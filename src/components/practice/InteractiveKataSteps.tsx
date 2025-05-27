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
}

interface KataStepsProps {
  kataId: string;
  kataName: string;
  steps: KataStep[];
  showImages?: boolean;
}

const InteractiveKataSteps: React.FC<KataStepsProps> = ({ kataId, kataName, steps, showImages = false }) => {
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
        <Progress value={progressPercent} className="h-1" />
      </div>

      {/* Step content */}
      <div className="p-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="relative"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{currentStepData.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {currentStepData.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="sticky bottom-0 w-full bg-white dark:bg-gray-900 border-t p-4 flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevStep}
          disabled={currentStep === 0}
          className="flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={handleNextStep}
          disabled={currentStep === totalSteps - 1}
          className="flex items-center"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default InteractiveKataSteps; 