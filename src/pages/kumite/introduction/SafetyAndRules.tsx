import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';
import { Shield, Users, Clock, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useMarkdownContent } from '@/utils/markdown';
import { useLanguage } from '@/contexts/LanguageContext';

const safetySections = [
  { id: 'basic-principles', icon: Shield, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'equipment', icon: Users, color: 'text-green-600', bgColor: 'bg-green-50' },
  { id: 'competition-rules', icon: AlertCircle, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { id: 'training-safety', icon: Clock, color: 'text-purple-600', bgColor: 'bg-purple-50' },
];

const SafetyAndRules = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const content = useMarkdownContent(`kumite/introduction/safety-and-rules.${language}`) || useMarkdownContent('kumite/introduction/safety-and-rules.en');

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.introduction.safety-title')}
        description={t('kumite.introduction.safety-desc')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        {/* Table of Contents */}
        <nav className="mb-6">
          <ul className="flex flex-wrap gap-4 text-sm text-primary font-medium">
            <li><a href="#basic-principles">{t('kumite.introduction.safety.basic-principles')}</a></li>
            <li><a href="#equipment">{t('kumite.introduction.safety.equipment')}</a></li>
            <li><a href="#competition-rules">{t('kumite.introduction.safety.competition-rules')}</a></li>
            <li><a href="#training-safety">{t('kumite.introduction.safety.training-safety')}</a></li>
          </ul>
        </nav>

        {/* Basic Safety Principles */}
        <section id="basic-principles">
          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">{t('kumite.introduction.safety.basic-principles')}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {['control', 'equipment', 'supervision', 'respect', 'progressive'].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span className="text-sm">{t(`kumite.introduction.safety.principles.${item}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Safety Equipment */}
        <section id="equipment">
          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">{t('kumite.introduction.safety.equipment')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-green-700">{t('kumite.introduction.safety.required-equipment')}</h3>
                  <ul className="space-y-2">
                    {['hand-protectors', 'foot-protectors', 'mouth-guard', 'groin-protector'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-600" size={16} />
                        <span>{t(`kumite.introduction.safety.equipment-details.required.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-green-700">{t('kumite.introduction.safety.optional-equipment')}</h3>
                  <ul className="space-y-2">
                    {['head-protection', 'chest-protector', 'shin-guards'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Info className="text-green-600" size={16} />
                        <span>{t(`kumite.introduction.safety.equipment-details.optional.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Competition Rules */}
        <section id="competition-rules">
          <Card className="p-6 border-l-4 border-l-orange-500">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">{t('kumite.introduction.safety.competition-rules')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-orange-700">{t('kumite.introduction.safety.allowed-areas')}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-1">{t('kumite.introduction.safety.scoring-areas')}</h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        {['head-face-neck', 'chest-abdomen-back', 'arms-legs'].map(item => (
                          <li key={item}>• {t(`kumite.introduction.safety.areas.scoring.${item}`)}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1 text-red-600">{t('kumite.introduction.safety.forbidden-areas')}</h4>
                      <ul className="text-xs space-y-1 text-red-600">
                        {['throat', 'spine', 'groin', 'joints'].map(item => (
                          <li key={item}>• {t(`kumite.introduction.safety.areas.forbidden.${item}`)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-orange-700">{t('kumite.introduction.safety.penalties')}</h3>
                  <div className="space-y-2">
                    {['chukoku', 'keikoku', 'hansoku'].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <AlertCircle className="text-orange-600" size={16} />
                        <span className="text-sm">
                          {t(`kumite.introduction.safety.penalty-types.${item}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Training Safety */}
        <section id="training-safety">
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">{t('kumite.introduction.safety.training-safety')}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {['before', 'during', 'after'].map(phase => (
                  <div key={phase} className="space-y-2">
                    <h3 className="font-semibold text-purple-700 capitalize">{t(`kumite.introduction.safety.training.${phase}`)}</h3>
                    <ul className="space-y-1">
                      {['item1', 'item2', 'item3', 'item4'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-purple-600" size={16} />
                          <span>{t(`kumite.introduction.safety.training.${phase}-${item}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default SafetyAndRules; 