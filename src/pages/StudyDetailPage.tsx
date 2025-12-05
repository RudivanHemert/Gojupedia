import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { buildStudies } from '@/data';
import { Study, StudyQuestion } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, Book, Check, X, RotateCcw, Trophy, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { toast } from '@/hooks/use-toast';
import TechniqueQuiz from '@/components/learning/TechniqueQuiz';
import TechniqueFlashcards from '@/components/learning/TechniqueFlashcards';
import TechniqueMatching from '@/components/learning/TechniqueMatching';
import MatchingGame from '@/components/learning/MatchingGame';
import VitalPointsQuiz from '@/components/learning/VitalPointsQuiz';
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
    // Accept both singular and plural for backward compatibility
    if (id === `${categorySlug}-flashcard` || id === `${categorySlug}-flashcards`) {
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
  const [questionResults, setQuestionResults] = useState<Record<string, boolean>>({});
  const { t, i18n } = useTranslation();
  const allStudies = React.useMemo(() => buildStudies(t), [i18n.language]);

  // Find the study by ID
  useEffect(() => {
    const foundStudy = allStudies.find(s => s.id === id);
    if (foundStudy) {
      setStudy(foundStudy);
      // Reset state when study changes
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setShowExplanation(false);
      setQuizCompleted(false);
      setScore(0);
      setFlipped(false);
      setQuestionResults({});
      setQuestionResults({});
    } else {
      toast({
        title: t('study.notFound.title'),
        description: t('study.notFound.description'),
        variant: "destructive"
      });
      navigate('/study');
    }
  }, [id, navigate, t, allStudies]);

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
        const results: Record<string, boolean> = {};
        study.questions.forEach(q => {
          results[q.id] = userAnswers[q.id] === q.correctAnswer;
        });
        setQuestionResults(results);
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
        <p className="text-muted-foreground">{t('study.loading')}</p>
      </div>
    );
  }

  // Common Header JSX - defined once
  const typeLabel = study?.type === 'quiz'
    ? t('study.testTypes.quiz')
    : study?.type === 'flashcard'
      ? t('study.testTypes.flashcards')
      : t('study.testTypes.matching');
  // Prefer nested difficulty keys; fallback to top-level keys if needed
  const difficultyLabel = study?.difficulty === 'beginner' ? (t('study.difficulty.beginner', { defaultValue: t('beginner') }))
    : study?.difficulty === 'intermediate' ? (t('study.difficulty.intermediate', { defaultValue: t('intermediate') }))
      : study?.difficulty === 'advanced' ? (t('study.difficulty.advanced', { defaultValue: t('advanced') }))
        : study?.difficulty;

  const renderHeader = () => (
    <div className="bg-muted border-b border-border">
      <div className="px-4 py-6">
        {/* Global back button is already provided by the layout header; avoid duplicate here */}
        <div className="flex items-center justify-center mb-2">
          <Badge variant="outline" className="mb-2 mr-2">
            {difficultyLabel}
          </Badge>
          <Badge variant="secondary" className="mb-2">
            {typeLabel}
          </Badge>
        </div>
        <h1 className="text-2xl font-semibold text-foreground text-center mb-1">
          {study.title}
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          {study.description}
        </p>
      </div>
    </div>
  );

  // 2. Handle special study types
  if (study.type === 'vital-points-quiz') {
    return (
      <>
        {renderHeader()}
        <div className="p-4">
          <VitalPointsQuiz />
        </div>
      </>
    );
  }

  // 3. Attempt to parse as a Dynamically Generated Study Module
  const { category: generatedCategory, type: generatedType } = parseGeneratedStudyId(id);

  if (generatedCategory && generatedType) {
    // It's a dynamically generated study, render the correct component
    return (
      <>
        {renderHeader()}
        <div className="p-4">
          {generatedType === 'quiz' && (
            <TechniqueQuiz category={generatedCategory} title={study.title} />
          )}
          {generatedType === 'flashcard' && (
            <TechniqueFlashcards category={generatedCategory} title={study.title} />
          )}
        </div>
      </>
    );
  }

  // 4. Handle Manually Defined Study Types (if not a generated study)

  // Check if completed first
  if (quizCompleted) {
    // Calculate score from questionResults if available, otherwise use score state
    const calculatedScore = study.type === 'quiz' && study.questions && Object.keys(questionResults).length > 0
      ? Object.values(questionResults).filter(Boolean).length
      : score;
    const totalQuestions = study.questions?.length || 0;

    return (
      <>
        {renderHeader()}
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-karate" />
          </div>
          <h2 className="text-2xl mb-2">{t('study.completed')}</h2>
          {(study.type === 'quiz' || study.type === 'matching') && study.questions && study.questions.length > 0 && (
            <>
              <p className="text-lg mb-4">
                {(() => {
                  // Try interpolation first
                  const interpolated = t('study.yourScore', { score: calculatedScore, total: totalQuestions });
                  // If interpolation failed (still contains placeholders), use direct string
                  if (interpolated.includes('{score}') || interpolated.includes('{total}')) {
                    const scoreLabel = i18n.language === 'nl' ? 'Je score' :
                      i18n.language === 'en' ? 'Your score' :
                        i18n.language === 'de' ? 'Ihre Punktzahl' :
                          i18n.language === 'es' ? 'Tu puntuación' :
                            i18n.language === 'fr' ? 'Votre score' :
                              i18n.language === 'it' ? 'Il tuo punteggio' :
                                i18n.language === 'pt' ? 'Sua pontuação' :
                                  i18n.language === 'da' ? 'Din score' : 'Your score';
                    const ofLabel = i18n.language === 'nl' ? 'van' :
                      i18n.language === 'en' ? 'out of' :
                        i18n.language === 'de' ? 'von' :
                          i18n.language === 'es' ? 'de' :
                            i18n.language === 'fr' ? 'sur' :
                              i18n.language === 'it' ? 'su' :
                                i18n.language === 'pt' ? 'de' :
                                  i18n.language === 'da' ? 'ud af' : 'out of';
                    return `${scoreLabel}: ${calculatedScore} ${ofLabel} ${totalQuestions}`;
                  }
                  return interpolated;
                })()}
              </p>
              <div className="w-full mb-6 bg-muted rounded-full h-2.5">
                <div
                  className="bg-karate h-2.5 rounded-full"
                  style={{ width: `${totalQuestions > 0 ? (calculatedScore / totalQuestions) * 100 : 0}%` }}
                ></div>
              </div>
              {/* Review Section */}
              <Collapsible className="w-full mb-6">
                <CollapsibleTrigger className="w-full flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <span className="font-medium">{t('study.reviewAnswers', 'Review Answers')}</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  {study.questions.map((question, index) => {
                    const userAnswer = userAnswers[question.id];
                    const isCorrect = questionResults[question.id] || false;
                    return (
                      <Card key={question.id} className={`border-2 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">
                              {t('study.question', { index: index + 1, total: study.questions.length })}: {question.question}
                            </CardTitle>
                            {isCorrect ? (
                              <Check className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div>
                            <span className="font-medium text-sm text-muted-foreground">{t('study.yourAnswer', 'Your answer')}: </span>
                            <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                              {userAnswer || t('study.noAnswer', 'No answer')}
                            </span>
                          </div>
                          {!isCorrect && (
                            <div>
                              <span className="font-medium text-sm text-muted-foreground">{t('study.correctAnswer', 'Correct answer')}: </span>
                              <span className="text-green-600 font-medium">{question.correctAnswer}</span>
                            </div>
                          )}
                          {question.explanation && (
                            <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-950 rounded-md">
                              <span className="font-medium text-sm">{t('study.explanation')}: </span>
                              <p className="text-sm text-muted-foreground mt-1">{question.explanation}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            </>
          )}
          <div className="space-y-3 w-full">
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
        <div className="p-4 text-center text-muted-foreground">
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
        <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
          <span>{t('study.question', { index: currentQuestionIndex + 1, total: study.questions.length })}</span>
          <div className="w-32 bg-muted rounded-full h-1.5">
            <div
              className="bg-karate h-1.5 rounded-full"
              style={{ width: `${study.questions.length > 0 ? ((currentQuestionIndex + 1) / study.questions.length) * 100 : 0}%` }}
            ></div>
          </div>
        </div>

        {/* --- Render Specific Manual Study Type UI --- */}
        {study.type === 'flashcard' ? (
          <Card
            className={`border border-border mb-6 cursor-pointer transition-all transform ${flipped ? 'bg-muted' : ''}`}
            onClick={handleFlip}
          >
            <div className="absolute top-3 right-3">
              <Badge variant="outline">{t('study.tapToFlip')}</Badge>
            </div>
            <div className="min-h-[250px] flex items-center justify-center p-6">
              {!flipped ? (
                <div className="text-center">
                  <Brain className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-medium mb-2">{currentQuestion.question}</h3>
                </div>
              ) : (
                <div className="text-center">
                  <Book className="h-8 w-8 mx-auto mb-4 text-karate" />
                  <p className="text-xl mb-4">{currentQuestion.correctAnswer}</p>
                  {currentQuestion.explanation && (
                    <div className="text-muted-foreground text-sm italic border-t border-border pt-4 mt-4">
                      {currentQuestion.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>
        ) : study.type === 'matching' ? (
          <MatchingGame
            pairs={study.questions.map(q => ({
              id: q.id,
              left: q.question,
              right: q.correctAnswer
            }))}
          />
        ) : (
          <Card className="border border-border mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
            </CardHeader>
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
                      className={`flex items-center space-x-2 p-3 rounded-md border transition-all ${userAnswers[currentQuestion.id] === option && quizCompleted && option === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : userAnswers[currentQuestion.id] === option && quizCompleted && option !== currentQuestion.correctAnswer
                            ? 'border-red-500 bg-red-50'
                            : 'border-border hover:border-border'
                        }`}
                    >
                      <RadioGroupItem value={option} id={option} disabled={quizCompleted} />
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
                  <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
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
