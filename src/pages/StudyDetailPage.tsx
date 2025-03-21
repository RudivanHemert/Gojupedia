
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { studies } from '@/data';
import { Study, StudyQuestion } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, ArrowLeft, Book, Check, X, RotateCcw, Trophy, Brain } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { toast } from '@/hooks/use-toast';

const StudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [study, setStudy] = useState<Study | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Find the study by ID
  useEffect(() => {
    const foundStudy = studies.find(s => s.id === id);
    if (foundStudy) {
      setStudy(foundStudy);
    } else {
      toast({
        title: "Study not found",
        description: "The requested study could not be found.",
        variant: "destructive"
      });
      navigate('/study');
    }
  }, [id, navigate]);

  if (!study) {
    return (
      <MobileLayout>
        <div className="flex items-center justify-center h-60">
          <p className="text-stone-600">Loading study...</p>
        </div>
      </MobileLayout>
    );
  }

  const currentQuestion = study.questions[currentQuestionIndex];

  const handleAnswerChange = (answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setFlipped(false);
    
    if (currentQuestionIndex < study.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate score for quiz type
      if (study.type === 'quiz') {
        const correctAnswers = study.questions.filter(
          q => userAnswers[q.id] === q.correctAnswer
        ).length;
        setScore(correctAnswers);
      }
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    setShowExplanation(false);
    setFlipped(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizCompleted(false);
    setScore(0);
    setFlipped(false);
  };

  const renderStudyContent = () => {
    if (quizCompleted) {
      return (
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-karate" />
          </div>
          <h2 className="text-2xl font-serif mb-2">Study Completed!</h2>
          {study.type === 'quiz' && (
            <>
              <p className="text-lg mb-4">
                Your score: <span className="font-semibold">{score}</span> out of {study.questions.length}
              </p>
              <div className="w-full max-w-xs mb-6 bg-stone-100 rounded-full h-2.5">
                <div 
                  className="bg-karate h-2.5 rounded-full" 
                  style={{ width: `${(score / study.questions.length) * 100}%` }}
                ></div>
              </div>
            </>
          )}
          <div className="space-y-3 w-full max-w-xs">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleRestart}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Study Again
            </Button>
            <Button 
              className="w-full"
              onClick={() => navigate('/study')}
            >
              Back to Study Section
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-4 px-4">
        {/* Progress indicator */}
        <div className="flex justify-between items-center mb-4 text-sm text-stone-600">
          <span>Question {currentQuestionIndex + 1} of {study.questions.length}</span>
          <div className="w-32 bg-stone-100 rounded-full h-1.5">
            <div 
              className="bg-karate h-1.5 rounded-full" 
              style={{ width: `${((currentQuestionIndex + 1) / study.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {study.type === 'flashcard' ? (
          // Flashcard UI
          <Card 
            className={`border border-stone-200 mb-6 cursor-pointer transition-all transform ${flipped ? 'bg-stone-50' : ''}`}
            onClick={handleFlip}
          >
            <div className="absolute top-3 right-3">
              <Badge variant="outline">Tap to flip</Badge>
            </div>
            <div className="min-h-[250px] flex items-center justify-center p-6">
              {!flipped ? (
                <div className="text-center">
                  <Brain className="h-8 w-8 mx-auto mb-4 text-stone-400" />
                  <h3 className="text-xl font-medium mb-2">{currentQuestion.question}</h3>
                </div>
              ) : (
                <div className="text-center">
                  <Book className="h-8 w-8 mx-auto mb-4 text-karate" />
                  <p className="text-xl font-serif mb-4">{currentQuestion.correctAnswer}</p>
                  {currentQuestion.explanation && (
                    <p className="text-stone-600 text-sm italic border-t border-stone-200 pt-4 mt-4">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Card>
        ) : study.type === 'matching' ? (
          // Matching exercise UI
          <Card className="border border-stone-200 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {study.questions.map((q) => (
                  <div 
                    key={q.id} 
                    className={`p-3 border rounded-md cursor-pointer transition-all ${
                      userAnswers[currentQuestion.id] === q.correctAnswer 
                        ? 'border-karate bg-stone-50' 
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                    onClick={() => handleAnswerChange(q.correctAnswer)}
                  >
                    {q.correctAnswer}
                  </div>
                ))}
              </div>
            </CardContent>
            {userAnswers[currentQuestion.id] && (
              <CardFooter className="flex-col items-start border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  {userAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                    <>
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Correct!</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-500" />
                      <span className="font-medium">Incorrect</span>
                    </>
                  )}
                </div>
                <Collapsible open={showExplanation} onOpenChange={setShowExplanation}>
                  <CollapsibleTrigger className="text-sm text-stone-600 underline">
                    {showExplanation ? "Hide explanation" : "Show explanation"}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="text-sm text-stone-600 pt-2">
                    {currentQuestion.explanation}
                  </CollapsibleContent>
                </Collapsible>
              </CardFooter>
            )}
          </Card>
        ) : (
          // Quiz UI (default)
          <Card className="border border-stone-200 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
            </CardHeader>
            {currentQuestion.image && (
              <div className="px-6 pb-4">
                <div className="aspect-video rounded-md overflow-hidden border border-stone-200">
                  <img 
                    src={currentQuestion.image} 
                    alt={currentQuestion.question} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <CardContent>
              <RadioGroup 
                value={userAnswers[currentQuestion.id] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {currentQuestion.options?.map((option, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 p-3 border rounded-md transition-all hover:border-stone-300"
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            {userAnswers[currentQuestion.id] && study.type === 'quiz' && (
              <CardFooter className="flex-col items-start border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  {userAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                    <>
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Correct!</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-500" />
                      <span className="font-medium">Incorrect</span>
                    </>
                  )}
                </div>
                <Collapsible open={showExplanation} onOpenChange={setShowExplanation}>
                  <CollapsibleTrigger className="text-sm text-stone-600 underline">
                    {showExplanation ? "Hide explanation" : "Show explanation"}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="text-sm text-stone-600 pt-2">
                    {currentQuestion.explanation}
                  </CollapsibleContent>
                </Collapsible>
              </CardFooter>
            )}
          </Card>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between pb-6">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={study.type === 'quiz' && !userAnswers[currentQuestion.id]}
          >
            {currentQuestionIndex < study.questions.length - 1 ? 'Next' : 'Finish'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <MobileLayout>
      {/* Header */}
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="px-4 py-6">
          <div className="flex items-center justify-center mb-2">
            <Badge variant="outline" className="mb-2 mr-2">
              {study.difficulty}
            </Badge>
            <Badge variant="secondary" className="mb-2">
              {study.type}
            </Badge>
          </div>
          <h1 className="text-2xl font-serif font-semibold text-stone-800 text-center mb-1">
            {study.title}
          </h1>
          <p className="text-stone-600 text-center text-sm">
            {study.description}
          </p>
        </div>
      </div>

      {/* Study content */}
      {renderStudyContent()}
    </MobileLayout>
  );
};

export default StudyDetailPage;
