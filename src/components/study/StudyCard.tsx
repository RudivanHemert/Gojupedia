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

interface StudyCardProps {
  study: Study;
}

const StudyCard: React.FC<StudyCardProps> = ({ study }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getTranslatedContent = (studyItem: Study) => {
    if (studyItem.id.includes('-quiz') || studyItem.id.includes('-flashcard')) {
      const match = studyItem.id.match(/^([a-z0-9-]+)-(quiz|flashcard)/);
      const category = match ? match[1] : studyItem.id.split('-')[0];
      const type = studyItem.id.includes('-quiz') ? 'quiz' : 'flashcard';

      if (type === 'quiz') {
        const quizTypeKey = `study.quizTypes.${category}`;
        return {
          title: t(`${quizTypeKey}.title`, t(`quizTypes.${category}.title`, 'Quiz')),
          description: t(`${quizTypeKey}.description`, t(`quizTypes.${category}.description`, 'Test your knowledge.')),
        };
      }

      const flashcardTypeKey = `study.flashcardTypes.${category}`;
      return {
        title: t(`${flashcardTypeKey}.title`, t(`flashcardTypes.${category}.title`, 'Flashcards')),
        description: t(`${flashcardTypeKey}.description`, t(`flashcardTypes.${category}.description`, 'Practice with flashcards.')),
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
      ? t('study.cards', 'cards')
      : study.type === 'matching'
        ? t('study.pairs', 'pairs')
        : t('study.questionsLabel', 'questions');
  const categoryLabel = t(`study.categories.${study.category}`, {
    defaultValue: study.category.replace(/-/g, ' '),
  });
  const typeLabel =
    study.type === 'quiz'
      ? t('study.testTypes.quiz', 'Quiz')
      : study.type === 'flashcard'
        ? t('study.testTypes.flashcards', 'Flashcards')
        : t('study.testTypes.matching', 'Matching');
  const difficultyLabel =
    study.difficulty === 'beginner'
      ? t('study.difficulty.beginner', 'Beginner')
      : study.difficulty === 'intermediate'
        ? t('study.difficulty.intermediate', 'Intermediate')
        : study.difficulty === 'advanced'
          ? t('study.difficulty.advanced', 'Advanced')
          : study.difficulty;
  const startLabel =
    study.type === 'flashcard'
      ? t('study.startFlashcards', 'Start Flashcards')
      : study.type === 'matching'
        ? t('study.startMatching', 'Start Matching')
        : t('study.startQuiz', 'Start Quiz');

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
