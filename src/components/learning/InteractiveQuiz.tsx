import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Check, X, Award, RotateCcw, ChevronRight } from 'lucide-react';

export type QuestionType = 'multiple-choice' | 'text-input' | 'multiple-select' | 'true-false' | 'matching';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: QuizOption[];
  correctAnswer?: string;
  explanation?: string;
  imageUrl?: string;
  points?: number;
}

interface InteractiveQuizProps {
  title: string;
  questions: QuizQuestion[];
  onComplete?: (score: number, totalPossible: number) => void;
  showExplanations?: boolean;
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
  timeLimit?: number; // in seconds
}

const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  title,
  questions: initialQuestions,
  onComplete,
  showExplanations = true,
  shuffleQuestions = true,
  shuffleOptions = true,
  timeLimit
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [textInput, setTextInput] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [remainingTime, setRemainingTime] = useState(timeLimit);
  
  // Shuffle function
  const shuffle = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  
  // Initialize quiz
  useEffect(() => {
    let processedQuestions = [...initialQuestions];
    
    // Shuffle questions if needed
    if (shuffleQuestions) {
      processedQuestions = shuffle(processedQuestions);
    }
    
    // Shuffle options if needed
    if (shuffleOptions) {
      processedQuestions = processedQuestions.map(q => {
        if (q.options) {
          return { ...q, options: shuffle(q.options) };
        }
        return q;
      });
    }
    
    setQuestions(processedQuestions);
    resetQuiz();
  }, [initialQuestions, shuffleQuestions, shuffleOptions]);
  
  // Timer
  useEffect(() => {
    if (!timeLimit || quizCompleted) return;
    
    if (remainingTime <= 0) {
      finishQuiz();
      return;
    }
    
    const timer = setInterval(() => {
      setRemainingTime(prev => prev ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [remainingTime, quizCompleted, timeLimit]);
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setTextInput('');
    setScore(0);
    setQuizCompleted(false);
    setShowAnswer(false);
    setRemainingTime(timeLimit);
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const checkAnswer = () => {
    const question = questions[currentQuestionIndex];
    let isCorrect = false;
    
    switch (question.type) {
      case 'multiple-choice':
        isCorrect = selectedOptions.length === 1 && 
          question.options?.find(o => o.id === selectedOptions[0])?.isCorrect === true;
        break;
        
      case 'text-input':
        isCorrect = textInput.trim().toLowerCase() === question.correctAnswer?.toLowerCase();
        break;
        
      case 'multiple-select':
        const correctOptions = question.options?.filter(o => o.isCorrect).map(o => o.id) || [];
        isCorrect = selectedOptions.length === correctOptions.length &&
          selectedOptions.every(id => correctOptions.includes(id));
        break;
        
      case 'true-false':
        isCorrect = (selectedOptions[0] === 'true' && 
          question.options?.find(o => o.id === 'true')?.isCorrect === true) ||
          (selectedOptions[0] === 'false' && 
          question.options?.find(o => o.id === 'false')?.isCorrect === true);
        break;
    }
    
    if (isCorrect) {
      setScore(prev => prev + (question.points || 1));
    }
    
    setShowAnswer(true);
  };
  
  const nextQuestion = () => {
    setSelectedOptions([]);
    setTextInput('');
    setShowAnswer(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };
  
  const finishQuiz = () => {
    setQuizCompleted(true);
    onComplete?.(score, questions.reduce((total, q) => total + (q.points || 1), 0));
    
    // Trigger confetti if score is 70% or higher
    const totalPossible = questions.reduce((total, q) => total + (q.points || 1), 0);
    if (score >= totalPossible * 0.7) {
      triggerConfetti();
    }
  };
  
  // Simple confetti effect without requiring external library
  const triggerConfetti = () => {
    const confettiCount = 100;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < confettiCount; i++) {
      createConfettiElement(colors[Math.floor(Math.random() * colors.length)]);
    }
  };
  
  const createConfettiElement = (color: string) => {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '9999';
    
    // Random position from top center
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight * 0.3;
    
    confetti.style.left = `${startX}px`;
    confetti.style.top = `${startY}px`;
    
    document.body.appendChild(confetti);
    
    // Animate using transforms and opacity
    const animationDuration = 1000 + Math.random() * 2000; // 1-3 seconds
    const destinationX = startX + (Math.random() - 0.5) * window.innerWidth * 0.7;
    const destinationY = startY + Math.random() * window.innerHeight * 0.7;
    
    confetti.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${destinationX - startX}px, ${destinationY - startY}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ],
      {
        duration: animationDuration,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        fill: 'forwards'
      }
    );
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, animationDuration);
  };
  
  const handleOptionSelect = (optionId: string) => {
    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'true-false') {
      setSelectedOptions([optionId]);
    } else if (currentQuestion.type === 'multiple-select') {
      setSelectedOptions(prev => 
        prev.includes(optionId) 
          ? prev.filter(id => id !== optionId) 
          : [...prev, optionId]
      );
    }
  };
  
  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };
  
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 1), 0);
  
  if (questions.length === 0) {
    return <div className="flex justify-center p-8">Loading quiz...</div>;
  }
  
  // Quiz completion screen
  if (quizCompleted) {
    const percentage = Math.round((score / totalPoints) * 100);
    let feedback = '';
    
    if (percentage >= 90) {
      feedback = 'Excellent! You have mastered this material.';
    } else if (percentage >= 75) {
      feedback = 'Great job! You have a strong understanding of the content.';
    } else if (percentage >= 60) {
      feedback = 'Good effort! Keep studying to improve your knowledge.';
    } else {
      feedback = 'Keep practicing! Review the material and try again.';
    }
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6 pb-4 px-6">
          <div className="text-center space-y-6">
            <Award className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-2xl font-bold">{title} - Results</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Score</span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-3" />
            </div>
            
            <div className="space-y-1">
              <div className="text-xl font-semibold">
                You scored {score} out of {totalPoints} points
              </div>
              <div className="text-gray-600">{feedback}</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button 
            variant="outline" 
            className="mr-2"
            onClick={resetQuiz}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Retake Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6 px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <span className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>
        
        {timeLimit && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Time Remaining</span>
              <span>
                {Math.floor(remainingTime! / 60)}:
                {(remainingTime! % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <Progress 
              value={(remainingTime! / timeLimit) * 100} 
              className="h-2"
            />
          </div>
        )}
        
        <Progress 
          value={(currentQuestionIndex / totalQuestions) * 100} 
          className="h-1 mb-6"
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4">
              <div className="text-lg font-medium">{currentQuestion.question}</div>
              
              {currentQuestion.imageUrl && (
                <div className="flex justify-center my-4">
                  <img 
                    src={currentQuestion.imageUrl} 
                    alt="Question visual"
                    className="max-h-64 rounded-lg"
                  />
                </div>
              )}
              
              {/* Multiple Choice */}
              {currentQuestion.type === 'multiple-choice' && (
                <RadioGroup 
                  value={selectedOptions[0] || ''} 
                  onValueChange={(value) => setSelectedOptions([value])}
                  disabled={showAnswer}
                >
                  <div className="space-y-2">
                    {currentQuestion.options?.map((option) => (
                      <div 
                        key={option.id} 
                        className={`flex items-center space-x-2 p-3 rounded-md border ${
                          showAnswer && option.isCorrect ? 'border-green-500 bg-green-50' : 
                          showAnswer && selectedOptions.includes(option.id) && !option.isCorrect ? 'border-red-500 bg-red-50' :
                          'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <RadioGroupItem 
                          value={option.id} 
                          id={option.id}
                          disabled={showAnswer}
                        />
                        <Label 
                          htmlFor={option.id} 
                          className="flex-1 cursor-pointer"
                        >
                          {option.text}
                        </Label>
                        {showAnswer && option.isCorrect && (
                          <Check className="w-5 h-5 text-green-500" />
                        )}
                        {showAnswer && selectedOptions.includes(option.id) && !option.isCorrect && (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              )}
              
              {/* Text Input */}
              {currentQuestion.type === 'text-input' && (
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Type your answer here"
                    value={textInput}
                    onChange={handleTextInputChange}
                    disabled={showAnswer}
                    className={`w-full ${
                      showAnswer && textInput.trim().toLowerCase() === currentQuestion.correctAnswer?.toLowerCase() 
                        ? 'border-green-500' 
                        : showAnswer ? 'border-red-500' : ''
                    }`}
                  />
                  {showAnswer && (
                    <div className="text-sm">
                      <span className="font-semibold">Correct answer: </span>
                      <span>{currentQuestion.correctAnswer}</span>
                    </div>
                  )}
                </div>
              )}
              
              {/* Multiple Select */}
              {currentQuestion.type === 'multiple-select' && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 mb-2">Select all that apply</p>
                  {currentQuestion.options?.map((option) => (
                    <div 
                      key={option.id} 
                      className={`flex items-center space-x-2 p-3 rounded-md border ${
                        showAnswer && option.isCorrect ? 'border-green-500 bg-green-50' : 
                        showAnswer && selectedOptions.includes(option.id) && !option.isCorrect ? 'border-red-500 bg-red-50' :
                        'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Checkbox
                        id={option.id}
                        checked={selectedOptions.includes(option.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleOptionSelect(option.id);
                          } else {
                            setSelectedOptions(prev => prev.filter(id => id !== option.id));
                          }
                        }}
                        disabled={showAnswer}
                      />
                      <Label 
                        htmlFor={option.id} 
                        className="flex-1 cursor-pointer"
                      >
                        {option.text}
                      </Label>
                      {showAnswer && option.isCorrect && (
                        <Check className="w-5 h-5 text-green-500" />
                      )}
                      {showAnswer && selectedOptions.includes(option.id) && !option.isCorrect && (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {/* True/False */}
              {currentQuestion.type === 'true-false' && (
                <RadioGroup 
                  value={selectedOptions[0] || ''} 
                  onValueChange={(value) => setSelectedOptions([value])}
                  disabled={showAnswer}
                >
                  <div className="space-y-2">
                    {[
                      { id: 'true', text: 'True' },
                      { id: 'false', text: 'False' }
                    ].map((option) => {
                      const trueOption = currentQuestion.options?.find(o => o.id === 'true');
                      const isTrueCorrect = trueOption?.isCorrect || false;
                      const isCorrect = option.id === 'true' ? isTrueCorrect : !isTrueCorrect;
                      
                      return (
                        <div 
                          key={option.id} 
                          className={`flex items-center space-x-2 p-3 rounded-md border ${
                            showAnswer && isCorrect ? 'border-green-500 bg-green-50' : 
                            showAnswer && selectedOptions.includes(option.id) && !isCorrect ? 'border-red-500 bg-red-50' :
                            'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <RadioGroupItem 
                            value={option.id} 
                            id={option.id} 
                            disabled={showAnswer}
                          />
                          <Label 
                            htmlFor={option.id} 
                            className="flex-1 cursor-pointer"
                          >
                            {option.text}
                          </Label>
                          {showAnswer && isCorrect && (
                            <Check className="w-5 h-5 text-green-500" />
                          )}
                          {showAnswer && selectedOptions.includes(option.id) && !isCorrect && (
                            <X className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>
              )}
              
              {/* Explanation (shown when showAnswer is true) */}
              {showAnswer && showExplanations && currentQuestion.explanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-muted-foreground"
                >
                  {currentQuestion.explanation}
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
      
      <CardFooter className="flex justify-end pb-6 px-6">
        {!showAnswer ? (
          <Button 
            disabled={
              (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'true-false') && selectedOptions.length === 0 ||
              currentQuestion.type === 'text-input' && textInput.trim() === ''
            } 
            onClick={checkAnswer}
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={nextQuestion}>
            {currentQuestionIndex < totalQuestions - 1 ? (
              <>
                Next Question
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              'Finish Quiz'
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default InteractiveQuiz; 