import React from 'react';
import { useTranslation } from 'react-i18next';

const Kicks = () => {
  const { t, i18n } = useTranslation();

  // Type assertion for the terms
  const kickTerms = i18n.t('terminology.sections.kicks-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string; details?: string }>;
  
  // Fallback if terms are not loaded yet or in a different structure
  const termKeys = kickTerms && typeof kickTerms === 'object' ? Object.keys(kickTerms) : [];

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">
        {t('terminology.sections.kicks-content.description')}
      </p>

      {/* Optional: If you want to categorize kicks, you can add logic here or directly in the JSON. */}
      {/* For now, displaying all kicks in one list. */}
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.kicks-content.title', 'Kicks')} 
        </div>
        <div className="px-4 py-2 bg-card">
          {termKeys.length > 0 ? (
            <ul className="list-disc pl-4 space-y-2">
              {termKeys.map(termKey => {
                const term = kickTerms[termKey];
                if (!term) return null; // Should not happen if termKeys is derived from kickTerms
                return (
                  <li key={termKey}>
                    {term.name} {term.japanese && `(${term.japanese})`} - {term.english}
                    {term.details && <p className="text-sm text-muted-foreground pl-2">{term.details}</p>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>{t('terminology.noTermsAvailable', 'No terms available for this section.')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kicks;