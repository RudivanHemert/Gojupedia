import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/ui/audio-button';

const GojuRyu = () => {
  const { t } = useTranslation();

  const concepts = [
    {
      translationKey: 'philosophy.gojuRyu.concepts.goju.japanese',
      japanese: t('philosophy.gojuRyu.concepts.goju.japanese'),
      romaji: t('philosophy.gojuRyu.concepts.goju.romaji'),
      danish: t('philosophy.gojuRyu.concepts.goju.danish'),
      description: t('philosophy.gojuRyu.concepts.goju.description')
    },
    {
      translationKey: 'philosophy.gojuRyu.concepts.kokyu.japanese',
      japanese: t('philosophy.gojuRyu.concepts.kokyu.japanese'),
      romaji: t('philosophy.gojuRyu.concepts.kokyu.romaji'),
      danish: t('philosophy.gojuRyu.concepts.kokyu.danish'),
      description: t('philosophy.gojuRyu.concepts.kokyu.description')
    },
    {
      translationKey: 'philosophy.gojuRyu.concepts.ki.japanese',
      japanese: t('philosophy.gojuRyu.concepts.ki.japanese'),
      romaji: t('philosophy.gojuRyu.concepts.ki.romaji'),
      danish: t('philosophy.gojuRyu.concepts.ki.danish'),
      description: t('philosophy.gojuRyu.concepts.ki.description')
    },
    {
      translationKey: 'philosophy.gojuRyu.concepts.wa.japanese',
      japanese: t('philosophy.gojuRyu.concepts.wa.japanese'),
      romaji: t('philosophy.gojuRyu.concepts.wa.romaji'),
      danish: t('philosophy.gojuRyu.concepts.wa.danish'),
      description: t('philosophy.gojuRyu.concepts.wa.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader
        title={t('philosophy.gojuRyu.title')}
        description={t('philosophy.gojuRyu.subtitle')}
        backUrl="/philosophy"
      />
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>剛柔流</span>
                  <AudioButton text="Goju Ryu" lang="ja-JP" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 mb-6">
                  <p className="text-muted-foreground flex-1">
                    {t('philosophy.gojuRyu.mainDescription')}
                  </p>
                  <AudioButton text={t('philosophy.gojuRyu.mainDescription')} translationKey="philosophy.gojuRyu.mainDescription" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      {t('philosophy.gojuRyu.go.title')}
                      <AudioButton text={t('philosophy.gojuRyu.go.title')} translationKey="philosophy.gojuRyu.go.title" size="sm" />
                    </h3>
                    <p className="text-red-700 text-sm">
                      {t('philosophy.gojuRyu.go.description')}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      {t('philosophy.gojuRyu.ju.title')}
                      <AudioButton text={t('philosophy.gojuRyu.ju.title')} translationKey="philosophy.gojuRyu.ju.title" size="sm" />
                    </h3>
                    <p className="text-blue-700 text-sm">
                      {t('philosophy.gojuRyu.ju.description')}
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4">{t('philosophy.gojuRyu.coreConcepts')}</h3>
                <div className="space-y-4">
                  {concepts.map((concept, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-medium">{concept.japanese}</span>
                          <AudioButton text={concept.japanese} translationKey={concept.translationKey} />
                        </div>
                        <Badge variant="outline">{concept.romaji}</Badge>
                      </div>

                      <div className="space-y-2">
                        <p className="font-medium text-foreground">
                          {concept.danish}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {concept.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GojuRyu; 