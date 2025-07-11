import React from 'react';
// Remove MobileLayout import if no longer needed directly
// import MobileLayout from '@/components/layout/MobileLayout'; 
import { studies } from '@/data';
import StudyCard from '@/components/study/StudyCard'; // Import the reusable card
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const QuizListPage = () => {
  const { t } = useTranslation();
  // Filter for quizzes
  const quizStudies = studies.filter(study => study.type === 'quiz');

  return (
    <>
      <TheoryHeader 
        title={t('study.quizzes.title')}
        description={t('study.quizzes.description')}
        backUrl="/study"
      />

      {/* Quiz Cards - Revert to Vertical List Layout */}
      <div className="px-4 py-6 space-y-4">
        {quizStudies.length > 0 ? (
          quizStudies.map(study => (
            <StudyCard key={study.id} study={study} />
          ))
        ) : (
          <p className="text-center text-stone-500 italic">{t('study.noQuizzes', 'No quizzes available currently.')}</p>
        )}
      </div>
    </>
  );
};

export default QuizListPage; 