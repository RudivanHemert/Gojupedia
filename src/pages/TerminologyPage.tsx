import React from 'react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useTranslation } from 'react-i18next';
import { TerminologyList } from '@/components/terminology/TerminologyList';

const TerminologyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('terminology.title')}
        description={t('terminology.description')}
      />
      <div className="p-4">
        <TerminologyList />
      </div>
    </div>
  );
};

export default TerminologyPage;