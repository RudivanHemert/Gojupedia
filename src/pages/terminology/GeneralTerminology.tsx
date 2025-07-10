import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const GeneralTerminology = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('terminology.sections.general-terms')}
        description={t('terminology.sections.general-terms-content.description')}
        backUrl="/terminology"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <GeneralTerminologyContent />
        </div>
      </div>
    </div>
  );
};

const GeneralTerminologyContent = () => {
  const { t } = useTranslation();
  const termsObject = t('terminology.sections.general-terms-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string }>;

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {t('terminology.sections.general-terms-content.description')}
      </p>
      
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
    </div>
  );
};

export default GeneralTerminology;