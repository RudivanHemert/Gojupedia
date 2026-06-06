import React from 'react';
import { useTranslation } from 'react-i18next';
import StudyCollectionPage from '@/components/study/StudyCollectionPage';

const QuizListPage = () => {
  const { t } = useTranslation();

  return (
    <StudyCollectionPage
      type="quiz"
      title={t('study.quizzes.title', t('title', 'Quizzes'))}
      description={t('study.quizzes.description', t('description', 'Test your knowledge on various topics'))}
      emptyMessage={t('study.noQuizzes', 'No quizzes available currently.')}
    />
  );
};

export default QuizListPage;
