import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/AudioButton';

const DojoKun = () => {
  const { t } = useTranslation();

  const principles = [
    {
      japanese: "一、人格 完成に 努める こと",
      romaji: "Hitotsu, jinkaku kansei ni tsutomeru koto",
      dutch: "Eerst, streef naar de voltooiing van je karakter",
      english: "First, strive for the perfection of character"
    },
    {
      japanese: "一、誠の道を 守ること",
      romaji: "Hitotsu, makoto no michi wo mamoru koto",
      dutch: "Eerst, bewaak de weg van waarheid",
      english: "First, guard the way of truth"
    },
    {
      japanese: "一、努力の 精神を 養うこと",
      romaji: "Hitotsu, doryoku no seishin wo yashinau koto",
      dutch: "Eerst, ontwikkel de geest van doorzettingsvermogen",
      english: "First, foster the spirit of effort"
    },
    {
      japanese: "一、礼儀を 重んずること",
      romaji: "Hitotsu, reigi wo omonzuru koto",
      dutch: "Eerst, respecteer anderen",
      english: "First, respect others"
    },
    {
      japanese: "一、血気の 勇を 戒むること",
      romaji: "Hitotsu, kekki no yuu wo imashimuru koto",
      dutch: "Eerst, onthoud je van gewelddadige daden",
      english: "First, refrain from violent behavior"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('philosophy.sections.dojo-kun.title')}
        description={t('philosophy.sections.dojo-kun.description')}
        backUrl="/philosophy"
      />
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>道場訓</span>
                  <AudioButton text="Dojo Kun" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  De Dojo Kun zijn de vijf principes die elke karateka moet volgen. 
                  Deze principes vormen de basis van de martiale kunst en worden 
                  traditioneel gereciteerd aan het begin en einde van elke training.
                </p>
                
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="mb-2">
                          Principe {index + 1}
                        </Badge>
                        <AudioButton text={principle.romaji} />
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-lg font-medium text-gray-900">
                          {principle.japanese}
                        </p>
                        <p className="text-sm text-gray-600 italic">
                          {principle.romaji}
                        </p>
                        <p className="text-gray-700">
                          {principle.dutch}
                        </p>
                        <p className="text-sm text-gray-500">
                          {principle.english}
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

export default DojoKun; 