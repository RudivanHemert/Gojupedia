import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';
import { GraduationCap, Clock, Shield, Target } from 'lucide-react';

const trainingMethods = [
  { id: 'kihon', icon: GraduationCap, color: 'text-blue-600' },
  { id: 'yakusoku', icon: Clock, color: 'text-green-600' },
  { id: 'jiyu', icon: Target, color: 'text-red-600' },
  { id: 'shiai', icon: Shield, color: 'text-purple-600' }
];

const Training = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('kumite.training.title')}
        description={t('kumite.training.description')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('kumite.training.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('kumite.training.description')}</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('kumite.training.methods.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {trainingMethods.map((method) => (
                  <div key={method.id} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <method.icon className={method.color} size={24} />
                      <h4 className="font-medium">{t(`kumite.training.methods.${method.id}.name`)}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{t(`kumite.training.methods.${method.id}.description`)}</p>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Benefits:</strong> {t(`kumite.training.methods.${method.id}.benefits`)}</p>
                      <p className="text-sm"><strong>Focus:</strong> {t(`kumite.training.methods.${method.id}.focus`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('kumite.training.progression.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">{t('kumite.training.progression.beginner.name')}</h4>
                  <p className="text-sm text-muted-foreground">{t('kumite.training.progression.beginner.description')}</p>
                  <p className="text-sm"><strong>Duration:</strong> {t('kumite.training.progression.beginner.duration')}</p>
                  <p className="text-sm"><strong>Goals:</strong> {t('kumite.training.progression.beginner.goals')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">{t('kumite.training.progression.intermediate.name')}</h4>
                  <p className="text-sm text-muted-foreground">{t('kumite.training.progression.intermediate.description')}</p>
                  <p className="text-sm"><strong>Duration:</strong> {t('kumite.training.progression.intermediate.duration')}</p>
                  <p className="text-sm"><strong>Goals:</strong> {t('kumite.training.progression.intermediate.goals')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">{t('kumite.training.progression.advanced.name')}</h4>
                  <p className="text-sm text-muted-foreground">{t('kumite.training.progression.advanced.description')}</p>
                  <p className="text-sm"><strong>Duration:</strong> {t('kumite.training.progression.advanced.duration')}</p>
                  <p className="text-sm"><strong>Goals:</strong> {t('kumite.training.progression.advanced.goals')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('kumite.training.safety.title')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm"><strong>Equipment:</strong> {t('kumite.training.safety.equipment')}</p>
                  <p className="text-sm"><strong>Supervision:</strong> {t('kumite.training.safety.supervision')}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Progression:</strong> {t('kumite.training.safety.progression')}</p>
                  <p className="text-sm"><strong>Communication:</strong> {t('kumite.training.safety.communication')}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Training; 