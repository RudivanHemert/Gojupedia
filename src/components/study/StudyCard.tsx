import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Study } from '@/types'; // Assuming Study type is defined here
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, BookText, ListCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Helper function for icons (can be kept here or moved to a utils file)
const getStudyTypeIcon = (type: string) => {
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

  // Helper function to get translated title and description
  const getTranslatedContent = (study: Study) => {
    // For dynamically generated studies, use translation keys
    if (study.id.includes('-quiz') || study.id.includes('-flashcard')) {
      // Extract category (handles e.g. 'body-parts-flashcards')
      const match = study.id.match(/^([a-z0-9-]+)-(quiz|flashcard)/);
      const category = match ? match[1] : study.id.split('-')[0];
      const type = study.id.includes('-quiz') ? 'quiz' : 'flashcard';

      if (type === 'quiz') {
        const quizTypeKey = `study.quizTypes.${category}`;
        return {
          title: t(`${quizTypeKey}.title`, t(`quizTypes.${category}.title`, 'Quiz')),
          description: t(`${quizTypeKey}.description`, t(`quizTypes.${category}.description`, 'Test your knowledge.'))
        };
      } else {
        const flashcardTypeKey = `study.flashcardTypes.${category}`;
        return {
          title: t(`${flashcardTypeKey}.title`, t(`flashcardTypes.${category}.title`, 'Flashcards')),
          description: t(`${flashcardTypeKey}.description`, t(`flashcardTypes.${category}.description`, 'Practice with flashcards.'))
        };
      }
    }
    // For manual studies, return original content
    return {
      title: study.title,
      description: study.description
    };
  };

  const translatedContent = getTranslatedContent(study);
  const questionsLabel = study.type === 'quiz'
    ? t('study.questions')
    : t('study.cards');
  const categoryLabel = t(`study.categories.${study.category}`);
  const typeLabel = study.type === 'quiz'
    ? t('study.testTypes.quiz')
    : study.type === 'flashcard'
      ? t('study.testTypes.flashcards')
      : t('study.testTypes.matching');
  const difficultyLabel =
    study.difficulty === 'beginner' ? t('study.difficulty.beginner') :
    study.difficulty === 'intermediate' ? t('study.difficulty.intermediate') :
    study.difficulty === 'advanced' ? t('study.difficulty.advanced') : study.difficulty;

  return (
    <Card key={study.id} className="border border-border hover:border-karate transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="mb-2">
            {difficultyLabel}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1 mb-2">
            {getStudyTypeIcon(study.type)}
            {typeLabel}
          </Badge>
        </div>
        <CardTitle className="text-xl">{translatedContent.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{translatedContent.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4 pb-0">
        <div className="text-sm text-muted-foreground">
          {/* Dynamically generated studies might have empty questions array initially */}
          {/* Adjusted label for clarity */}
          {study.questions?.length > 0 && (
              <><strong>{study.questions.length}</strong> {questionsLabel} • </> 
          )}
          {t('study.category')}: <Badge variant="outline" className="text-xs">{categoryLabel}</Badge>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full" onClick={() => navigate(`/study/${study.id}`)}>
          {t('study.startQuiz')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StudyCard; 