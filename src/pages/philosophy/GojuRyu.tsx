import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/AudioButton';

const GojuRyu = () => {
  const { t } = useTranslation();

  const concepts = [
    {
      japanese: "剛柔",
      romaji: "Goju",
      dutch: "Hard en Zacht",
      english: "Hard and Soft",
      description: "De fundamentele filosofie van Goju Ryu die harde (Go) en zachte (Ju) technieken combineert in perfecte harmonie."
    },
    {
      japanese: "呼吸",
      romaji: "Kokyu",
      dutch: "Ademhaling",
      english: "Breathing",
      description: "De juiste ademhalingstechnieken zijn essentieel voor het ontwikkelen van kracht en focus in Goju Ryu."
    },
    {
      japanese: "気",
      romaji: "Ki",
      dutch: "Energie",
      english: "Energy",
      description: "De innerlijke energie die door ademhaling en concentratie wordt ontwikkeld en gebruikt in technieken."
    },
    {
      japanese: "和",
      romaji: "Wa",
      dutch: "Harmonie",
      english: "Harmony",
      description: "Het bereiken van harmonie tussen lichaam en geest, en tussen harde en zachte technieken."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('philosophy.sections.goju-ryu.title', 'Goju Ryu')}
        description={t('philosophy.sections.goju-ryu.description', 'De filosofie van hard en zacht')}
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
                  <span>剛柔流</span>
                  <AudioButton text="Goju Ryu" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Goju Ryu Karate is gebaseerd op de filosofie van "Go" (hard) en "Ju" (zacht). 
                  Deze tegenstellingen worden niet gezien als conflicterend, maar als complementair. 
                  De kunst ligt in het vinden van de juiste balans tussen beide elementen.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-red-800 mb-2">Go (剛) - Hard</h3>
                    <p className="text-red-700 text-sm">
                      Directe, krachtige technieken zoals stoten, trappen en blokken. 
                      Vertegenwoordigt kracht, vastberadenheid en directe actie.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">Ju (柔) - Zacht</h3>
                    <p className="text-blue-700 text-sm">
                      Circulaire, absorberende technieken zoals ontwijkingen en worpen. 
                      Vertegenwoordigt flexibiliteit, aanpassingsvermogen en indirecte actie.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4">Kernconcepten</h3>
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
                          <AudioButton text={concept.romaji} />
                        </div>
                        <Badge variant="outline">{concept.romaji}</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900">
                          {concept.dutch} / {concept.english}
                        </p>
                        <p className="text-gray-600 text-sm">
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