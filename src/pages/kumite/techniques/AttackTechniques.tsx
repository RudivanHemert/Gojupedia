import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';

const AttackTechniques = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.techniques.attack-techniques')}
        description={t('kumite.techniques.attack.description')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('kumite.techniques.attack.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('kumite.techniques.attack.description')}</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('kumite.techniques.attack.tsuki.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('kumite.techniques.attack.tsuki.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.attack.tsuki.techniques.kizami-zuki.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.attack.tsuki.techniques.kizami-zuki.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.attack.tsuki.techniques.gyaku-zuki.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.attack.tsuki.techniques.gyaku-zuki.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">{t('kumite.techniques.attack.uchi.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('kumite.techniques.attack.uchi.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.attack.uchi.techniques.uraken-uchi.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.attack.uchi.techniques.uraken-uchi.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.attack.uchi.techniques.haito-uchi.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.attack.uchi.techniques.haito-uchi.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">{t('kumite.techniques.attack.keri.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('kumite.techniques.attack.keri.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.attack.keri.techniques.mae-geri.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.attack.keri.techniques.mae-geri.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.attack.keri.techniques.mawashi-geri.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.attack.keri.techniques.mawashi-geri.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AttackTechniques; 