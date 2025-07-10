import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/AudioButton';

const MindBody = () => {
  const { t } = useTranslation();

  const concepts = [
    {
      japanese: "心身一如",
      romaji: "Shin Shin Ichinyo",
      dutch: "Eenheid van Geest en Lichaam",
      english: "Unity of Mind and Body",
      description: "Het principe dat geest en lichaam niet gescheiden zijn, maar één geheel vormen."
    },
    {
      japanese: "集中",
      romaji: "Shuchu",
      dutch: "Concentratie",
      english: "Concentration",
      description: "De volledige focus van geest en lichaam op één doel of actie."
    },
    {
      japanese: "気合",
      romaji: "Kiai",
      dutch: "Spirituele Schreeuw",
      english: "Spiritual Shout",
      description: "De uitdrukking van innerlijke kracht en focus door middel van stem en ademhaling."
    },
    {
      japanese: "無心",
      romaji: "Mushin",
      dutch: "Geest zonder Gedachten",
      english: "Mind without Thoughts",
      description: "Een staat van bewustzijn waarin de geest vrij is van afleidende gedachten."
    }
  ];

  const practices = [
    {
      title: "Ademhaling",
      description: "De juiste ademhalingstechnieken verbinden geest en lichaam en ontwikkelen innerlijke kracht.",
      icon: "🫁"
    },
    {
      title: "Meditatie",
      description: "Stille meditatie helpt bij het ontwikkelen van mentale focus en innerlijke rust.",
      icon: "🧘"
    },
    {
      title: "Kata",
      description: "De beoefening van kata ontwikkelt zowel fysieke techniek als mentale discipline.",
      icon: "🥋"
    },
    {
      title: "Zazen",
      description: "Zittende meditatie die helpt bij het ontwikkelen van bewustzijn en focus.",
      icon: "🧘‍♂️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('philosophy.sections.mind-body.title', 'Geest en Lichaam')}
        description={t('philosophy.sections.mind-body.description', 'De eenheid van geest en lichaam')}
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
                  <span>心身一如</span>
                  <AudioButton text="Shin Shin Ichinyo" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  In Goju Ryu Karate wordt de eenheid van geest en lichaam als fundamenteel beschouwd. 
                  Deze filosofie stelt dat ware kracht en beheersing alleen kunnen worden bereikt wanneer 
                  lichaam en geest in perfecte harmonie samenwerken.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-800 mb-2">Geest (心)</h3>
                    <p className="text-purple-700 text-sm">
                      De mentale aspecten van karate: focus, discipline, bewustzijn, 
                      en spirituele ontwikkeling. De geest leidt het lichaam.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 mb-2">Lichaam (身)</h3>
                    <p className="text-green-700 text-sm">
                      De fysieke aspecten: kracht, flexibiliteit, techniek en conditie. 
                      Het lichaam voert uit wat de geest besluit.
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

                <h3 className="text-lg font-semibold mb-4 mt-6">Praktijken voor Geest-Lichaam Eenheid</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {practices.map((practice, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{practice.icon}</span>
                        <h4 className="font-semibold text-gray-900">{practice.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{practice.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Balans</h4>
                  <p className="text-blue-700 text-sm">
                    De ware kunst van karate ligt niet in het overwinnen van anderen, 
                    maar in het vinden van balans tussen geest en lichaam, en in het 
                    ontwikkelen van innerlijke kracht en vrede.
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

export default MindBody; 