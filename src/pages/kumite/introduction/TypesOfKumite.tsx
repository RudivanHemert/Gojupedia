import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';
import { Shield, Target, Users, Clock, Trophy, CheckCircle, ArrowRight } from 'lucide-react';
import { useMarkdownContent } from '@/utils/markdown';
import { useLanguage } from '@/contexts/LanguageContext';

const kumiteTypes = [
  { id: 'ippon' },
  { id: 'sanbon' },
  { id: 'gohon' },
  { id: 'jiyu' },
  { id: 'shiai' }
];

const TypesOfKumite = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const content = useMarkdownContent(`kumite/introduction/types-of-kumite.${language}`) || useMarkdownContent('kumite/introduction/types-of-kumite.en');

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('kumite.introduction.types-title')}
        description={t('kumite.introduction.types-desc')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        {/* Table of Contents */}
        <nav className="mb-6">
          <ul className="flex flex-wrap gap-4 text-sm text-primary font-medium">
            <li><a href="#kumite-types">{t('kumite.introduction.kumite-types')}</a></li>
            <li><a href="#progression">{t('kumite.introduction.progression-title')}</a></li>
            <li><a href="#safety">{t('kumite.introduction.safety-title')}</a></li>
          </ul>
        </nav>

        {/* Kumite Types Grid */}
        <section id="kumite-types">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kumiteTypes.map((type) => (
              <Card key={type.id} className={`p-6 border-2 hover:shadow-lg transition-shadow h-full flex flex-col`}>
                <div className="mb-4">
                  <h3 className="font-semibold text-base">{t(`kumite.introduction.types.${type.id}.title`)}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {t(`kumite.introduction.types.${type.id}.description`)}
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">{t('kumite.introduction.goals')}</h4>
                    <ul className="space-y-1">
                      {['goal1', 'goal2', 'goal3'].map(goal => (
                        <li key={goal} className="flex items-center gap-2 text-xs">
                          <span>{t(`kumite.introduction.types.${type.id}.goals.${goal}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">{t('kumite.introduction.characteristics')}</h4>
                    <ul className="space-y-1">
                      {['char1', 'char2', 'char3'].map(char => (
                        <li key={char} className="flex items-center gap-2 text-xs">
                          <span>{t(`kumite.introduction.types.${type.id}.characteristics.${char}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Training Progression */}
        <section id="progression">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">{t('kumite.introduction.progression-title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['basic', 'expansion', 'freedom', 'competition'].map((stage, index) => (
                <div key={stage} className="text-center">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{t(`kumite.introduction.progression.${stage}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`kumite.introduction.progression.${stage}.desc`)}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Safety Information */}
        <section id="safety">
          <Card className="p-6 border-l-4 border-l-red-500">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3">{t('kumite.introduction.safety-title')}</h2>
                <p className="text-muted-foreground mb-4">
                  {t('kumite.introduction.safety-desc')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['control', 'equipment', 'supervision', 'respect'].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-red-600" size={20} />
                      <span className="text-sm">{t(`kumite.introduction.safety.principles.${item}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default TypesOfKumite; 