import React from 'react';
// Remove MobileLayout import if no longer needed directly
// import MobileLayout from '@/components/layout/MobileLayout'; 
import { buildStudies } from '@/data';
import StudyCard from '@/components/study/StudyCard'; // Import the reusable card
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const QuizListPage = () => {
  const { t, i18n } = useTranslation();
  const allStudies = React.useMemo(() => buildStudies(t), [i18n.language]);
  const quizStudies = allStudies.filter(study => study.type === 'quiz');

  return (
    <>
      <TheoryHeader 
        title={t('study.quizzes.title', t('title', 'Quizzes'))}
        description={t('study.quizzes.description', t('description', 'Test your knowledge on various topics'))}
        backUrl="/study"
      />

      {/* Quiz Cards - Revert to Vertical List Layout */}
      <div className="px-4 py-6 space-y-4">
        {quizStudies.length > 0 ? (
          quizStudies.map(study => (
            <StudyCard key={study.id} study={study} />
          ))
        ) : (
          <p className="text-center text-muted-foreground italic">{t('study.noQuizzes', 'No quizzes available currently.')}</p>
        )}
      </div>
    </>
  );
};

export default QuizListPage; 