import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';
import { CheckCircle, Star, Info } from 'lucide-react';
import { useMarkdownContent } from '@/utils/markdown';
import { useLanguage } from '@/contexts/LanguageContext';

const goals = [
  'practical-application',
  'timing-distance',
  'mental-discipline',
  'physical-conditioning',
  'tactical-thinking',
];

const WhatIsKumite = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  // Try to load the markdown in the current language, fallback to English
  const content = useMarkdownContent(`kumite/introduction/what-is-kumite.${language}`) || useMarkdownContent('kumite/introduction/what-is-kumite.en');

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('kumite.introduction.what-is')}
        description={t('kumite.introduction.what-is-desc')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-3xl mx-auto space-y-8">
        {/* Table of Contents */}
        <nav className="mb-6">
          <ul className="flex flex-wrap gap-4 text-sm text-primary font-medium">
            <li><a href="#definition">{t('kumite.introduction.definition')}</a></li>
            <li><a href="#goals">{t('kumite.introduction.goals')}</a></li>
            <li><a href="#importance">{t('kumite.introduction.importance')}</a></li>
          </ul>
        </nav>

        {/* Definition Card */}
        <section id="definition">
          <Card className="p-6 flex items-start gap-4 bg-muted border-primary/30">
            <Star className="text-primary mt-1" size={32} />
            <div>
              <h2 className="text-xl font-semibold mb-2">{t('kumite.introduction.what-is')}</h2>
              <div className="prose max-w-none">{content && content.split('##')[0]}</div>
            </div>
          </Card>
        </section>

        {/* Goals Checklist */}
        <section id="goals">
          <h3 className="text-lg font-bold mb-3 mt-8">{t('kumite.introduction.goals')}</h3>
          <ul className="space-y-2">
            {goals.map(goal => (
              <li key={goal} className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span>{t(`kumite.introduction.goals-list.${goal}`)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Importance InfoBlock */}
        <section id="importance">
          <div className="flex items-start gap-3 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <Info className="text-blue-500 mt-1" size={24} />
            <div>
              <h4 className="font-semibold mb-1">{t('kumite.introduction.importance')}</h4>
              <div className="prose max-w-none">{content && content.split('## Importance in Karate')[1]}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatIsKumite; 