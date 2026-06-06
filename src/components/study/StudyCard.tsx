import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, BookText, Brain, ListCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Study } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const getStudyTypeIcon = (type: Study['type']) => {
  switch (type) {
    case 'quiz':
      return <Brain className="h-4 w-4" />;
    case 'flashcard':
      return <BookText className="h-4 w-4" />;
    case 'matching':
      return <ListCheck className="h-4 w-4" />;
    default:
      return <BookOpen className="h-4 w-4" />;
  }
};

const formatFallbackLabel = (value: string) =>
  value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

interface StudyCardProps {
  study: Study;
}

const StudyCard: React.FC<StudyCardProps> = ({ study }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const translateText = (key: string, fallback: string) => {
    const translated = t(key, { defaultValue: fallback });
    return translated === key ? fallback : translated;
  };

  const getTranslatedContent = (studyItem: Study) => {
    const flashcardMatch = studyItem.id.match(/^([a-z0-9-]+)-flashcards?$/);
    const quizMatch = studyItem.id.match(/^([a-z0-9-]+)-quiz$/);
    const terminologyQuizCategory =
      studyItem.type === 'quiz' && studyItem.category === 'terminology'
        ? studyItem.id
        : undefined;
    const category = flashcardMatch?.[1] || quizMatch?.[1] || terminologyQuizCategory;

    if (category && studyItem.type === 'quiz') {
      const quizTypeKey = `study.quizTypes.${category}`;
      return {
        title: translateText(`${quizTypeKey}.title`, studyItem.title),
        description: translateText(`${quizTypeKey}.description`, studyItem.description),
      };
    }

    if (category && studyItem.type === 'flashcard') {
      const flashcardTypeKey = `study.flashcardTypes.${category}`;
      return {
        title: translateText(`${flashcardTypeKey}.title`, studyItem.title),
        description: translateText(`${flashcardTypeKey}.description`, studyItem.description),
      };
    }

    return {
      title: studyItem.title,
      description: studyItem.description,
    };
  };

  const translatedContent = getTranslatedContent(study);
  const itemLabel =
    study.type === 'flashcard'
      ? translateText('study.cards', 'cards')
      : study.type === 'matching'
        ? translateText('study.pairs', 'pairs')
        : translateText('study.questionsLabel', 'questions');
  const categoryLabel = translateText(
    `study.categories.${study.category}`,
    formatFallbackLabel(study.category),
  );
  const typeLabel =
    study.type === 'quiz'
      ? translateText('study.testTypes.quiz', 'Quiz')
      : study.type === 'flashcard'
        ? translateText('study.testTypes.flashcards', 'Flashcards')
        : translateText('study.testTypes.matching', 'Matching');
  const difficultyLabel =
    study.difficulty === 'beginner'
      ? translateText('study.difficulty.beginner', 'Beginner')
      : study.difficulty === 'intermediate'
        ? translateText('study.difficulty.intermediate', 'Intermediate')
        : study.difficulty === 'advanced'
          ? translateText('study.difficulty.advanced', 'Advanced')
          : study.difficulty;
  const startLabel =
    study.type === 'flashcard'
      ? translateText('study.startFlashcards', 'Start Flashcards')
      : study.type === 'matching'
        ? translateText('study.startMatching', 'Start Matching')
        : translateText('study.startQuiz', 'Start Quiz');

  return (
    <Card className="flex h-full flex-col border-border transition-colors hover:border-karate">
      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="outline">{difficultyLabel}</Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            {getStudyTypeIcon(study.type)}
            {typeLabel}
          </Badge>
        </div>
        <div>
          <CardTitle className="text-lg leading-tight">{translatedContent.title}</CardTitle>
          <CardDescription className="mt-1 line-clamp-2">{translatedContent.description}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-wrap content-start gap-2 pt-0 text-sm text-muted-foreground">
        {study.questions?.length > 0 && (
          <Badge variant="outline">
            {study.questions.length} {itemLabel}
          </Badge>
        )}
        <Badge variant="outline">{categoryLabel}</Badge>
      </CardContent>

      <CardFooter className="pt-4">
        <Button className="w-full" onClick={() => navigate(`/study/${study.id}`)}>
          {startLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StudyCard;
