import React from 'react';
import { useTranslation } from 'react-i18next';
import StudyCollectionPage from '@/components/study/StudyCollectionPage';

const FlashcardListPage = () => {
  const { t } = useTranslation();

  return (
    <StudyCollectionPage
      type="flashcard"
      title={t('study.flashcards.title', 'Flashcards')}
      description={t('study.flashcards.description', 'Review terms and concepts with flashcards.')}
      emptyMessage={t('study.noFlashcards', 'No flashcard sets available currently.')}
    />
  );
};

export default FlashcardListPage;
