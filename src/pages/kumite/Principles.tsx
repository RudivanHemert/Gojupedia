import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';
import { Brain, Target, Zap, Eye, Clock, Shield } from 'lucide-react';

const principleCategories = [
  { id: 'mental', icon: Brain, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { id: 'tactical', icon: Target, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'physical', icon: Zap, color: 'text-green-600', bgColor: 'bg-green-50' }
];

const mentalPrinciples = [
  { id: 'zanshin', icon: Eye, name: 'Zanshin (残心) - Overblijvende Geest' },
  { id: 'mushin', icon: Brain, name: 'Mushin (無心) - Geest Zonder Gedachten' },
  { id: 'fudoshin', icon: Shield, name: 'Fudoshin (不動心) - Onbeweeglijke Geest' },
  { id: 'senshin', icon: Eye, name: 'Senshin (先心) - Gepurificeerde Geest' }
];

const tacticalPrinciples = [
  { id: 'ma-ai', icon: Target, name: 'Ma-ai (間合い) - Vechtafstand' },
  { id: 'sen', icon: Zap, name: 'Sen (先) - Initiatief' },
  { id: 'go-no-sen', icon: Clock, name: 'Go No Sen (後の先) - Reactie op Aanval' },
  { id: 'sen-no-sen', icon: Target, name: 'Sen No Sen (先の先) - Aanvallen van de Aanval' }
];

const physicalPrinciples = [
  { id: 'balance', icon: Shield, name: 'Balans en Stabiliteit' },
  { id: 'timing', icon: Clock, name: 'Timing en Ritme' },
  { id: 'power', icon: Zap, name: 'Kracht en Snelheid' }
];

const Principles = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('kumite.principles.title')}
        description={t('kumite.principles.description')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        {/* Table of Contents */}
        <nav className="mb-6">
          <ul className="flex flex-wrap gap-4 text-sm text-primary font-medium">
            <li><a href="#mental">{t('kumite.principles.mental.title')}</a></li>
            <li><a href="#tactical">{t('kumite.principles.tactical.title')}</a></li>
            <li><a href="#physical">{t('kumite.principles.physical.title')}</a></li>
          </ul>
        </nav>

        {/* Introduction Card */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('kumite.principles.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('kumite.principles.description')}</p>
        </Card>

        {/* Principle Categories */}
        {principleCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={category.color} size={32} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{t(`kumite.principles.${category.id}.title`)}</h2>
                  <p className="text-muted-foreground">Fundamentele principes voor effectief kumite</p>
                </div>
              </div>

              <div className="space-y-6">
                {category.id === 'mental' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {mentalPrinciples.map((principle) => (
                      <div key={principle.id} className="space-y-3 p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <principle.icon className="text-purple-600" size={20} />
                          <h4 className="font-semibold text-sm">{principle.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t(`kumite.principles.${category.id}.${principle.id}.description`)}
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm"><strong>Toepassing:</strong> {t(`kumite.principles.${category.id}.${principle.id}.application`)}</p>
                          <p className="text-sm"><strong>Belang:</strong> {t(`kumite.principles.${category.id}.${principle.id}.importance`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {category.id === 'tactical' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {tacticalPrinciples.map((principle) => (
                      <div key={principle.id} className="space-y-3 p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <principle.icon className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-sm">{principle.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t(`kumite.principles.${category.id}.${principle.id}.description`)}
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm"><strong>Toepassing:</strong> {t(`kumite.principles.${category.id}.${principle.id}.application`)}</p>
                          <p className="text-sm"><strong>Belang:</strong> {t(`kumite.principles.${category.id}.${principle.id}.importance`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {category.id === 'physical' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {physicalPrinciples.map((principle) => (
                      <div key={principle.id} className="space-y-3 p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <principle.icon className="text-green-600" size={20} />
                          <h4 className="font-semibold text-sm">{principle.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t(`kumite.principles.${category.id}.${principle.id}.description`)}
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm"><strong>Toepassing:</strong> {t(`kumite.principles.${category.id}.${principle.id}.application`)}</p>
                          <p className="text-sm"><strong>Belang:</strong> {t(`kumite.principles.${category.id}.${principle.id}.importance`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </section>
        ))}

        {/* Summary Card */}
        <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <h3 className="text-lg font-semibold mb-4">Samenvatting van Kumite Principes</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-purple-700 mb-2">Mentale Principes</h4>
              <p className="text-muted-foreground">Focus op geestelijke ontwikkeling en bewustzijn</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Tactische Principes</h4>
              <p className="text-muted-foreground">Strategische benadering van kumite en timing</p>
            </div>
            <div>
              <h4 className="font-medium text-green-700 mb-2">Fysieke Principes</h4>
              <p className="text-muted-foreground">Lichamelijke aspecten van techniek en beweging</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Principles; 