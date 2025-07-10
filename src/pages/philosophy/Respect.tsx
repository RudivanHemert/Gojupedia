import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/AudioButton';

const Respect = () => {
  const { t } = useTranslation();

  const respectTypes = [
    {
      japanese: "礼",
      romaji: "Rei",
      dutch: "Respect",
      english: "Respect",
      description: "Het fundamentele principe van respect in alle aspecten van karate training en leven."
    },
    {
      japanese: "礼儀",
      romaji: "Reigi",
      dutch: "Etiquette",
      english: "Etiquette",
      description: "De juiste manier van gedragen en de formele aspecten van respect tonen."
    },
    {
      japanese: "尊敬",
      romaji: "Sonkei",
      dutch: "Eerbied",
      english: "Reverence",
      description: "Diepe eerbied voor leraren, senioren en de tradities van karate."
    },
    {
      japanese: "謙虚",
      romaji: "Kenkyo",
      dutch: "Nederigheid",
      english: "Humility",
      description: "De bescheiden houding die essentieel is voor ware groei en leren."
    }
  ];

  const respectAreas = [
    {
      title: "Respect voor de Dojo",
      description: "De trainingruimte is een heilige plaats waar we leren en groeien. We tonen respect door de dojo schoon te houden en de regels te volgen.",
      icon: "🏛️"
    },
    {
      title: "Respect voor de Leraar",
      description: "De sensei heeft kennis en wijsheid doorgegeven die door generaties is doorgegeven. We tonen respect door aandachtig te luisteren en te leren.",
      icon: "👨‍🏫"
    },
    {
      title: "Respect voor Medeleerlingen",
      description: "Elke karateka is op zijn eigen reis. We respecteren elkaars niveau, inspanning en persoonlijke groei.",
      icon: "👥"
    },
    {
      title: "Respect voor de Kunst",
      description: "Karate is meer dan een sport - het is een eeuwenoude traditie. We respecteren de geschiedenis en filosofie van de kunst.",
      icon: "🥋"
    },
    {
      title: "Respect voor Jezelf",
      description: "Zelfrespect betekent dat je jezelf en je lichaam met zorg behandelt, en dat je streeft naar zelfverbetering.",
      icon: "💪"
    },
    {
      title: "Respect voor Tegenstanders",
      description: "In kumite tonen we respect door eerlijk te vechten, de regels te volgen en de veiligheid van onze partner te waarborgen.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('philosophy.sections.respect.title', 'Respect')}
        description={t('philosophy.sections.respect.description', 'Respect in de martiale kunsten')}
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
                  <span>礼</span>
                  <AudioButton text="Rei" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Respect is de hoeksteen van alle martiale kunsten. In Goju Ryu Karate wordt respect 
                  niet alleen getoond door buigen, maar door een diepe innerlijke houding van eerbied 
                  en waardering voor alles en iedereen om ons heen.
                </p>

                <h3 className="text-lg font-semibold mb-4">Vormen van Respect</h3>
                <div className="space-y-4">
                  {respectTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-medium">{type.japanese}</span>
                          <AudioButton text={type.romaji} />
                        </div>
                        <Badge variant="outline">{type.romaji}</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900">
                          {type.dutch} / {type.english}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {type.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-4 mt-6">Gebieden van Respect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {respectAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{area.icon}</span>
                        <h4 className="font-semibold text-gray-900">{area.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">De Buiging (礼)</h4>
                  <p className="text-orange-700 text-sm">
                    De buiging is niet alleen een fysieke handeling, maar een uiting van innerlijk respect. 
                    Wanneer we buigen, tonen we respect voor de leraar, de dojo, en de tradities van karate. 
                    Het is een moment van nederigheid en dankbaarheid.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Respect in Training</h4>
                  <p className="text-green-700 text-sm">
                    Tijdens training tonen we respect door op tijd te komen, de dojo-regels te volgen, 
                    aandachtig te luisteren naar instructies, en onze medeleerlingen te helpen. 
                    Respect is niet alleen een regel, maar een manier van leven.
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

export default Respect; 