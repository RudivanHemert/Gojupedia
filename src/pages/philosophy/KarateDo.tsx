import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/AudioButton';

const KarateDo = () => {
  const { t } = useTranslation();

  const principles = [
    {
      japanese: "空手道",
      romaji: "Karate Do",
      dutch: "De Weg van de Lege Hand",
      english: "The Way of the Empty Hand",
      description: "Karate is niet alleen een vechtsport, maar een levensweg die discipline, respect en zelfverbetering bevordert."
    },
    {
      japanese: "道",
      romaji: "Do",
      dutch: "De Weg",
      english: "The Way",
      description: "Een levenslange reis van zelfontwikkeling en spirituele groei door middel van martiale training."
    },
    {
      japanese: "修行",
      romaji: "Shugyo",
      dutch: "Spirituele Training",
      english: "Spiritual Training",
      description: "De intense, doorlopende training die niet alleen het lichaam maar ook de geest ontwikkelt."
    },
    {
      japanese: "心技体",
      romaji: "Shin Gi Tai",
      dutch: "Geest, Techniek, Lichaam",
      english: "Mind, Technique, Body",
      description: "De drie essentiële elementen die in balans moeten zijn voor ware beheersing van karate."
    }
  ];

  const aspects = [
    {
      title: "Shin (心) - Geest",
      description: "De ontwikkeling van mentale kracht, discipline en karakter door training.",
      color: "blue"
    },
    {
      title: "Gi (技) - Techniek",
      description: "De beheersing van fysieke technieken en de principes van beweging.",
      color: "green"
    },
    {
      title: "Tai (体) - Lichaam",
      description: "De fysieke conditie, kracht en flexibiliteit die nodig zijn voor effectieve technieken.",
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('philosophy.sections.karate-do.title', 'Karate Do')}
        description={t('philosophy.sections.karate-do.description', 'De weg van de lege hand')}
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
                  <span>空手道</span>
                  <AudioButton text="Karate Do" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Karate Do betekent letterlijk "de weg van de lege hand". Het woord "kara" betekent leeg, 
                  "te" betekent hand, en "do" betekent weg. Dit verwijst niet alleen naar het feit dat karate 
                  zonder wapens wordt beoefend, maar ook naar de spirituele dimensie van het leegmaken van de geest.
                </p>

                <h3 className="text-lg font-semibold mb-4">Shin Gi Tai (心技体)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {aspects.map((aspect, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-${aspect.color}-50 p-4 rounded-lg border-l-4 border-${aspect.color}-500`}
                    >
                      <h4 className={`font-semibold text-${aspect.color}-800 mb-2`}>
                        {aspect.title}
                      </h4>
                      <p className={`text-${aspect.color}-700 text-sm`}>
                        {aspect.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-4">Filosofische Principes</h3>
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-medium">{principle.japanese}</span>
                          <AudioButton text={principle.romaji} />
                        </div>
                        <Badge variant="outline">{principle.romaji}</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900">
                          {principle.dutch} / {principle.english}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {principle.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">De Lege Hand</h4>
                  <p className="text-yellow-700 text-sm">
                    "Kara" (空) betekent niet alleen "leeg" in de zin van zonder wapens, 
                    maar ook "leeg" in de spirituele zin - het leegmaken van de geest van 
                    ego, angst en begeerte. Dit is de ware betekenis van karate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KarateDo; 