import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import InteractiveVitalPoints from '../components/theory/InteractiveVitalPoints';

const VitalPointsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('vitalPoints.title')}
        description={t('vitalPoints.description')}
        backUrl="/theory"
      />
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <InteractiveVitalPoints />
        </div>
      </div>
    </div>
  );
};

export default VitalPointsPage;
