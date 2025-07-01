import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Link } from 'react-router-dom';

const kumiteSections = [
  { 
    id: 'introduction', 
    path: '/kumite/introduction', 
    labelKey: 'kumite.sections.introduction',
    subsections: [
      { id: 'what-is', path: '/kumite/introduction/what-is', labelKey: 'kumite.introduction.what-is' },
      { id: 'types', path: '/kumite/introduction/types', labelKey: 'kumite.introduction.types-title' },
      { id: 'safety', path: '/kumite/introduction/safety', labelKey: 'kumite.introduction.safety-title' },
    ]
  },
  { 
    id: 'techniques', 
    path: '/kumite/techniques', 
    labelKey: 'kumite.sections.techniques',
    subsections: [
      { id: 'attack', path: '/kumite/techniques/attack', labelKey: 'kumite.techniques.attack-techniques' },
      { id: 'defense', path: '/kumite/techniques/defense', labelKey: 'kumite.techniques.defense-techniques' },
      { id: 'throwing', path: '/kumite/techniques/throwing', labelKey: 'kumite.techniques.throwing-techniques' },
    ]
  },
  { id: 'principles', path: '/kumite/principles', labelKey: 'kumite.sections.principles' },
  { id: 'training', path: '/kumite/training', labelKey: 'kumite.sections.training' },
  { id: 'competition', path: '/kumite/competition', labelKey: 'kumite.sections.competition' },
];

const KumitePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.title')}
        description={t('kumite.description')}
        backUrl="/practice"
      />
      <div className="p-4 max-w-4xl mx-auto">
        <div className="grid gap-6">
          {kumiteSections.map(section => (
            <div key={section.id} className="border border-muted rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-stone-800">
                {t(section.labelKey)}
              </h2>
              
              {section.subsections ? (
                <div className="grid gap-3">
                  {section.subsections.map(subsection => (
                    <Link
                      key={subsection.id}
                      to={subsection.path}
                      className="block px-4 py-3 rounded-lg border border-muted hover:bg-muted/30 transition-colors text-lg font-medium bg-stone-50"
                    >
                      {t(subsection.labelKey)}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={section.path}
                  className="block px-4 py-3 rounded-lg border border-muted hover:bg-muted/30 transition-colors text-lg font-medium bg-stone-50"
                >
                  {t(section.labelKey)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KumitePage;
