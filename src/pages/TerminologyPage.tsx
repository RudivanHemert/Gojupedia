import React from 'react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const terminologySections = [
  { id: 'general-terms', path: '/terminology/general-terms', labelKey: 'terminology.sections.general-terms' },
  { id: 'numbers', path: '/terminology/numbers', labelKey: 'terminology.sections.numbers' },
  { id: 'tournament-terms', path: '/terminology/tournament-terms', labelKey: 'terminology.sections.tournament-terms' },
  { id: 'equipment-weapons', path: '/terminology/equipment-weapons', labelKey: 'terminology.sections.equipment-weapons' },
  { id: 'karate-goju-ryu', path: '/terminology/karate-goju-ryu', labelKey: 'terminology.sections.karate-goju-ryu' },
  { id: 'karate-titles', path: '/terminology/karate-titles', labelKey: 'terminology.sections.karate-titles' },
  { id: 'phrases-etiquette', path: '/terminology/phrases-etiquette', labelKey: 'terminology.sections.phrases-etiquette' },
  { id: 'kata-terms', path: '/terminology/kata-terms', labelKey: 'terminology.sections.kata-terms' },
  { id: 'blocks', path: '/terminology/blocks', labelKey: 'terminology.sections.blocks' },
  { id: 'kicks', path: '/terminology/kicks', labelKey: 'terminology.sections.kicks' },
  { id: 'punches', path: '/terminology/punches', labelKey: 'terminology.sections.punches' },
  { id: 'stances', path: '/terminology/stances', labelKey: 'terminology.sections.stances' },
  { id: 'strikes', path: '/terminology/strikes', labelKey: 'terminology.sections.strikes' },
  { id: 'vital-points', path: '/terminology/vital-points', labelKey: 'terminology.sections.vital-points' },
];

const TerminologyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('terminology.title')}
        description={t('terminology.description')}
      />
      <div className="p-4 max-w-2xl mx-auto">
        <ul className="space-y-3">
          {terminologySections.map(section => (
            <li key={section.id}>
              <Link
                to={section.path}
                className="block px-4 py-3 rounded-lg border border-muted hover:bg-muted/30 transition-colors text-lg font-medium"
              >
                {t(section.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TerminologyPage;