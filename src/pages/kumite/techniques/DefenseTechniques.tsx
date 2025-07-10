import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';

const DefenseTechniques = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('kumite.techniques.defense-techniques')}
        description={t('kumite.techniques.defense.description')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('kumite.techniques.defense.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('kumite.techniques.defense.description')}</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('kumite.techniques.defense.uke.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('kumite.techniques.defense.uke.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.defense.uke.techniques.age-uke.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.defense.uke.techniques.age-uke.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.defense.uke.techniques.soto-uke.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.defense.uke.techniques.soto-uke.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.defense.uke.techniques.uchi-uke.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.defense.uke.techniques.uchi-uke.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.defense.uke.techniques.gedan-barai.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.defense.uke.techniques.gedan-barai.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">{t('kumite.techniques.defense.kawashi.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('kumite.techniques.defense.kawashi.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.defense.kawashi.techniques.te-nagashi-uke.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.defense.kawashi.techniques.te-nagashi-uke.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.defense.kawashi.techniques.te-osae-uke.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.defense.kawashi.techniques.te-osae-uke.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DefenseTechniques; 