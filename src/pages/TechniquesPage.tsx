import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { 
  Hand, 
  Shield, 
  Footprints, 
  Target,
  ArrowRight
} from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';

const TechniquesPage = () => {
  const { t } = useTranslation();

  const techniqueSections = [
    {
      id: 'stances',
      labelKey: 'techniques.sections.stances.title',
      descKey: 'techniques.sections.stances.description',
      path: '/techniques/stances',
      icon: <Footprints className="h-6 w-6 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 'blocks',
      labelKey: 'techniques.sections.blocks.title',
      descKey: 'techniques.sections.blocks.description',
      path: '/techniques/blocks',
      icon: <Shield className="h-6 w-6 text-green-500 dark:text-green-400" />
    },
    {
      id: 'strikes',
      labelKey: 'techniques.sections.strikes.title',
      descKey: 'techniques.sections.strikes.description',
      path: '/techniques/strikes',
      icon: <Hand className="h-6 w-6 text-red-500 dark:text-red-400" />
    },
    {
      id: 'kicks',
      labelKey: 'techniques.sections.kicks.title',
      descKey: 'techniques.sections.kicks.description',
      path: '/techniques/kicks',
      icon: <Target className="h-6 w-6 text-purple-500 dark:text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              className="block rounded-lg border border-border bg-card hover:bg-muted/50 transition-all duration-200 p-6 group"
            >
              <div className="flex items-center gap-4 mb-2">
                {section.icon}
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                  {t(section.labelKey)}
                </h2>
              </div>
              <p className="text-muted-foreground text-sm">
                {t(section.descKey)}
              </p>
              <div className="flex items-center text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Bekijk technieken</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechniquesPage;
