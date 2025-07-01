import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const VitalPoints = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('terminology.sections.vital-points')}
        description={t('terminology.sections.vital-points-content.description')}
        backUrl="/terminology"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <VitalPointsContent />
        </div>
      </div>
    </div>
  );
};

const VitalPointsContent = () => {
  const { t } = useTranslation();
  const termsObject = t('terminology.sections.vital-points-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string }>;

  console.log('[VitalPoints] termsObject:', termsObject);
  const isEmpty = !termsObject || Object.keys(termsObject).length === 0;

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {t('terminology.sections.vital-points-content.description')}
      </p>
      {isEmpty ? (
        <div className="text-red-500 font-semibold">Geen vitale punten gevonden in de vertaling.</div>
      ) : (
        <div className="grid gap-4">
          {Object.entries(termsObject).map(([key, term]) => (
            <div key={key} className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-japanese">{term.japanese}</span>
                <span className="font-semibold">{term.name}</span>
              </div>
              <p className="text-muted-foreground">{term.english}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VitalPoints;