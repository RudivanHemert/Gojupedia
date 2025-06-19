import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { studies } from '@/data';
import { Study, StudyQuestion } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, Book, Check, X, RotateCcw, Trophy, Brain } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { toast } from '@/hooks/use-toast';
import TechniqueQuiz from '@/components/learning/TechniqueQuiz';
import TechniqueFlashcards from '@/components/learning/TechniqueFlashcards';
import { techniquesData, TechniqueData } from '@/data/techniquesData';
import { useTranslation } from 'react-i18next';

// Get all possible categories from the source data
const allTerminologyCategories = [
    ...new Set(techniquesData.map(item => item.category))
] as const;
type TerminologyCategory = typeof allTerminologyCategories[number];

// Helper to generate slug from category name (consistent with data/index.ts)
const generateSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

// New helper function to parse category and type from generated IDs
const parseGeneratedStudyId = (id: string): { category: TerminologyCategory | undefined, type: 'quiz' | 'flashcard' | undefined } => {
    for (const category of allTerminologyCategories) {
        const categorySlug = generateSlug(category);
        if (id === `${categorySlug}-quiz`) {
            return { category, type: 'quiz' };
        }
        if (id === `${categorySlug}-flashcard`) {
            return { category, type: 'flashcard' };
        }
    }
    return { category: undefined, type: undefined }; // Not a recognized generated ID
};

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
  const { t } = useTranslation();

  // Find the study by ID
  useEffect(() => {
    const foundStudy = studies.find(s => s.id === id);
    if (foundStudy) {
      setStudy(foundStudy);
      // Reset state when study changes
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setShowExplanation(false);
      setQuizCompleted(false);
      setScore(0);
      setFlipped(false);
    } else {
      toast({
        title: t('study.notFound.title'),
        description: t('study.notFound.description'),
        variant: "destructive"
      });
      navigate('/study');
    }
  }, [id, navigate, t]);

  // --- Event Handlers --- 
  const handleAnswerChange = (answer: string) => {
    const currentQuestion = study?.questions?.[currentQuestionIndex];
    if (!currentQuestion) return; 
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer 
    }));
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setFlipped(false);
    if (!study || !study.questions) return;
    
    if (currentQuestionIndex < study.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      if (study.type === 'quiz' && study.questions.length > 0) {
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

  // --- Main Component Return Logic --- 

  // 1. Handle Loading State
  if (!study || !id) {
    return (
      <div className="flex items-center justify-center h-60">
        <p className="text-stone-600">{t('study.loading')}</p>
      </div>
    );
  }

  // Common Header JSX - defined once
  const renderHeader = () => (
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
  );

  // 2. Attempt to parse as a Dynamically Generated Study Module
  const { category: generatedCategory, type: generatedType } = parseGeneratedStudyId(id);
  
  if (generatedCategory && generatedType) {
    // It's a dynamically generated study, render the correct component
    return (
        <>
          {renderHeader()}
          <div className="p-4">
            {generatedType === 'quiz' ? (
              <TechniqueQuiz category={generatedCategory} title={study.title} />
            ) : ( // Must be 'flashcard'
              <TechniqueFlashcards category={generatedCategory} title={study.title} />
            )}
          </div>
        </>
      );
  }

  // 3. Handle Manually Defined Study Types (if not a generated study)
  
  // Check if completed first
  if (quizCompleted) {
    return (
      <>
        {renderHeader()}
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-karate" />
          </div>
          <h2 className="text-2xl font-serif mb-2">{t('study.completed')}</h2>
          {(study.type === 'quiz' || study.type === 'matching') && study.questions && study.questions.length > 0 && (
            <>
              <p className="text-lg mb-4">
                {t('study.yourScore', { score, total: study.questions.length })}
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
              {t('study.studyAgain')}
            </Button>
            <Button 
              className="w-full"
              onClick={() => navigate('/study')}
            >
              {t('study.backToStudySection')}
            </Button>
          </div>
        </div>
      </>
    );
  }

  // Define currentQuestion for manual study types
  const currentQuestion = study.questions?.[currentQuestionIndex];

  // Handle missing question for manual study types
  if (!currentQuestion) {
    return (
      <>
        {renderHeader()}
        <div className="p-4 text-center text-stone-500">
          {t('study.noQuestionFound', { index: currentQuestionIndex })}
        </div>
      </>
    );
  }

  // Render the specific UI for Flashcard/Matching/Default Quiz
  return (
    <>
      {renderHeader()}
      <div className="pt-4 px-4">
        {/* Progress Indicator */}
        <div className="flex justify-between items-center mb-4 text-sm text-stone-600">
          <span>{t('study.question', { index: currentQuestionIndex + 1, total: study.questions.length })}</span>
          <div className="w-32 bg-stone-100 rounded-full h-1.5">
            <div 
              className="bg-karate h-1.5 rounded-full" 
              style={{ width: `${study.questions.length > 0 ? ((currentQuestionIndex + 1) / study.questions.length) * 100 : 0}%` }}
            ></div>
          </div>
        </div>

        {/* --- Render Specific Manual Study Type UI --- */}
        {study.type === 'flashcard' ? (
          <Card 
            className={`border border-stone-200 mb-6 cursor-pointer transition-all transform ${flipped ? 'bg-stone-50' : ''}`}
            onClick={handleFlip}
          >
            <div className="absolute top-3 right-3">
              <Badge variant="outline">{t('study.tapToFlip')}</Badge>
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
                    <div className="text-stone-600 text-sm italic border-t border-stone-200 pt-4 mt-4">
                      {currentQuestion.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>
        ) : study.type === 'matching' ? (
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
                      <span className="font-medium">{t('study.correct')}</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-500" />
                      <span className="font-medium">{t('study.incorrect')}</span>
                    </>
                  )}
                </div>
                <Collapsible open={showExplanation} onOpenChange={setShowExplanation}>
                  <CollapsibleTrigger className="text-sm text-stone-600 underline">
                    {showExplanation ? t('study.hideExplanation') : t('study.showExplanation')}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="text-sm text-stone-600 pt-2">
                    {currentQuestion.explanation}
                  </CollapsibleContent>
                </Collapsible>
              </CardFooter>
            )}
          </Card>
        ) : ( 
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
                disabled={quizCompleted} 
              >
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <div 
                      key={option} 
                      className={`flex items-center space-x-2 p-3 rounded-md border transition-all ${ 
                        userAnswers[currentQuestion.id] === option && quizCompleted && option === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : userAnswers[currentQuestion.id] === option && quizCompleted && option !== currentQuestion.correctAnswer
                          ? 'border-red-500 bg-red-50'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <RadioGroupItem value={option} id={option} disabled={quizCompleted}/>
                      <Label 
                        htmlFor={option} 
                        className="flex-1 cursor-pointer"
                      >
                        {option}
                      </Label>
                      {quizCompleted && option === currentQuestion.correctAnswer && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                      {quizCompleted && userAnswers[currentQuestion.id] === option && option !== currentQuestion.correctAnswer && (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </RadioGroup>
              {quizCompleted && currentQuestion.explanation && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                  <h3 className="font-semibold mb-1">{t('study.explanation')}:</h3>
                  <p className="text-sm text-gray-700">{currentQuestion.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* --- Navigation Buttons (Shared for manual study types) --- */} 
        <div className="flex justify-between mt-6 pb-6">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('study.previous')}
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={study.type !== 'flashcard' && !userAnswers[currentQuestion.id]}
          >
            {currentQuestionIndex < study.questions.length - 1 ? t('study.next') : t('study.finish')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );

};

export default StudyDetailPage;
