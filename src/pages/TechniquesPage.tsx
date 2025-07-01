import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Link } from 'react-router-dom';
import { BookOpen, Footprints, HandMetal, Hand, Activity, Flame } from 'lucide-react';

const techniqueSections = [
  {
    id: 'blocks',
    path: '/terminology/blocks',
    icon: <BookOpen className="h-8 w-8 text-blue-500" />, 
    labelKey: 'terminology.sections.blocks',
    descKey: 'terminology.sections.blocks-content.description',
  },
  {
    id: 'kicks',
    path: '/terminology/kicks',
    icon: <Footprints className="h-8 w-8 text-green-500" />, 
    labelKey: 'terminology.sections.kicks',
    descKey: 'terminology.sections.kicks-content.description',
  },
  {
    id: 'punches',
    path: '/terminology/punches',
    icon: <Hand className="h-8 w-8 text-red-500" />, 
    labelKey: 'terminology.sections.punches',
    descKey: 'terminology.sections.punches-content.description',
  },
  {
    id: 'stances',
    path: '/terminology/stances',
    icon: <HandMetal className="h-8 w-8 text-yellow-500" />, 
    labelKey: 'terminology.sections.stances',
    descKey: 'terminology.sections.stances-content.description',
  },
  {
    id: 'strikes',
    path: '/terminology/strikes',
    icon: <Activity className="h-8 w-8 text-purple-500" />, 
    labelKey: 'terminology.sections.strikes',
    descKey: 'terminology.sections.strikes-content.description',
  },
  {
    id: 'warmup',
    path: '/terminology/warmup',
    icon: <Flame className="h-8 w-8 text-orange-500" />, 
    labelKey: 'Training & Warming-up',
    descKey: 'Voorbereidende oefeningen en traditionele training',
  },
];

const TechniquesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('techniques.title')}
        description={t('techniques.description')}
        backUrl="/practice"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {techniqueSections.map(section => (
            <Link
              key={section.id}
              to={section.path}
              className="block rounded-lg border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 group"
            >
              <div className="flex items-center gap-4 mb-2">
                {section.icon}
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {t(section.labelKey)}
                </h2>
              </div>
              <p className="text-muted-foreground text-sm">
                {t(section.descKey)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechniquesPage;
