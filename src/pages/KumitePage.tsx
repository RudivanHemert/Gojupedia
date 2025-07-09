import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const KumitePage = () => {
  const { t } = useTranslation();

  const kumiteSections = [
    {
      id: 'introduction',
      labelKey: 'kumite.sections.introduction.title',
      path: '/kumite/introduction',
      subsections: [
        { id: 'what-is-kumite', labelKey: 'kumite.sections.introduction.whatIsKumite', path: '/kumite/introduction/what-is-kumite' },
        { id: 'types-of-kumite', labelKey: 'kumite.sections.introduction.typesOfKumite', path: '/kumite/introduction/types-of-kumite' },
        { id: 'safety-and-rules', labelKey: 'kumite.sections.introduction.safetyAndRules', path: '/kumite/introduction/safety-and-rules' }
      ]
    },
    {
      id: 'principles',
      labelKey: 'kumite.sections.principles.title',
      path: '/kumite/principles'
    },
    {
      id: 'techniques',
      labelKey: 'kumite.sections.techniques.title',
      path: '/kumite/techniques',
      subsections: [
        { id: 'attack-techniques', labelKey: 'kumite.sections.techniques.attackTechniques', path: '/kumite/techniques/attack-techniques' },
        { id: 'defense-techniques', labelKey: 'kumite.sections.techniques.defenseTechniques', path: '/kumite/techniques/defense-techniques' },
        { id: 'throwing-techniques', labelKey: 'kumite.sections.techniques.throwingTechniques', path: '/kumite/techniques/throwing-techniques' }
      ]
    },
    {
      id: 'competition',
      labelKey: 'kumite.sections.competition.title',
      path: '/kumite/competition'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('kumite.title')}
        description={t('kumite.description')}
        backUrl="/practice"
      />
      <div className="p-4 max-w-4xl mx-auto">
        <div className="grid gap-6">
          {kumiteSections.map(section => (
            <div key={section.id} className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                {t(section.labelKey)}
              </h2>
              
              {section.subsections ? (
                <div className="grid gap-3">
                  {section.subsections.map(subsection => (
                    <Link
                      key={subsection.id}
                      to={subsection.path}
                      className="block px-4 py-3 rounded-lg border border-border hover:bg-muted/30 transition-colors text-lg font-medium bg-muted/20"
                    >
                      {t(subsection.labelKey)}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={section.path}
                  className="block px-4 py-3 rounded-lg border border-border hover:bg-muted/30 transition-colors text-lg font-medium bg-muted/20"
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
