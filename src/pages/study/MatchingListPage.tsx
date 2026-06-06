import React from 'react';
import { useTranslation } from 'react-i18next';
import StudyCollectionPage from '@/components/study/StudyCollectionPage';

const MatchingListPage = () => {
  const { t } = useTranslation();

  return (
    <StudyCollectionPage
      type="matching"
      title={t('study.matching.title', t('title', 'Matching'))}
      description={t('study.matching.description', t('description', 'Match terms and concepts'))}
      emptyMessage={t('study.noMatching', 'No matching exercises available currently.')}
    />
  );
};

export default MatchingListPage;
