import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';

const ThrowingTechniques = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.techniques.throwing-techniques')}
        description={t('kumite.techniques.throwing.description')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('kumite.techniques.throwing.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('kumite.techniques.throwing.description')}</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('kumite.techniques.throwing.nage.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('kumite.techniques.throwing.nage.description')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.throwing.nage.techniques.de-ashi-barai.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.throwing.nage.techniques.de-ashi-barai.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.throwing.nage.techniques.kuzushi.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.throwing.nage.techniques.kuzushi.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.throwing.nage.techniques.o-soto-gari.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.throwing.nage.techniques.o-soto-gari.description')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('kumite.techniques.throwing.nage.techniques.o-uchi-gari.name')}</h4>
                  <p className="text-sm">{t('kumite.techniques.throwing.nage.techniques.o-uchi-gari.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThrowingTechniques; 