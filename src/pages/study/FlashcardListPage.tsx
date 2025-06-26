// src/pages/study/FlashcardListPage.tsx
import React from 'react';
// Remove MobileLayout import if no longer needed directly
// import MobileLayout from '@/components/layout/MobileLayout';
import { studies } from '@/data';
import StudyCard from '@/components/study/StudyCard'; // Import the reusable card
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const FlashcardListPage = () => {
  const { t } = useTranslation();
  // Filter for flashcards
  const flashcardStudies = studies.filter(study => study.type === 'flashcard');

  return (
    // Remove MobileLayout wrapper
    <>
      <TheoryHeader 
        title={t('study.flashcards.title')}
        description={t('study.flashcards.description')}
        backUrl="/study"
      />

      {/* Flashcard Cards - Revert to Vertical List Layout */}
      <div className="px-4 py-6 space-y-4">
        {flashcardStudies.length > 0 ? (
          flashcardStudies.map(study => (
            <StudyCard key={study.id} study={study} />
          ))
        ) : (
          <p className="text-center text-stone-500 italic">{t('study.noFlashcards', 'No flashcard sets available currently.')}</p>
        )}
      </div>
    </>
  );
};

export default FlashcardListPage; 