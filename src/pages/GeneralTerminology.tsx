import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Term {
  name: string;
  japanese?: string;
  english?: string;
  details?: string;
}

const General = () => {
  const { t } = useTranslation('terminology');

  const terms = useMemo(() => {
    // Get the terms object from the translation file
    const termsData = t('sections.general-terms-content.terms', { returnObjects: true });

    // If it's not an object (e.g. translation missing), return empty array
    if (!termsData || typeof termsData !== 'object') return [];

    // Convert to array of entries and sort alphabetically by name (optional, but good for lists)
    // We'll keep the order from the object if needed, or sort. Since the JSON
    // is often manual, sorting by name is usually safer for display.
    return Object.values(termsData as Record<string, Term>).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [t]);

  return (
    <ul className="space-y-4">
      {terms.map((term, index) => (
        <li key={index} className="text-gray-700">
          <span className="font-bold text-gray-900">{term.name}</span>
          {term.japanese && <span className="ml-2 text-gray-500 text-sm">({term.japanese})</span>}
          {(term.english || term.details) && (
            <div className="ml-4 mt-1">
              {term.english && <span className="block italic text-gray-600 mb-1">{term.english}</span>}
              {term.details && <p className="text-gray-800">{term.details}</p>}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default General;