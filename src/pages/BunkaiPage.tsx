import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { katas } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const gekisaiDaiIchiBunkai = [
  {
    nummer: '01',
    naam: 'Jodan Age Uke + Jodan Oi Zuki',
    aanval: 'Jodan Oi Zuki.',
    verdediging: 'Jodan Age Uke.',
    tegenaanval: 'Jodan Oi Zuki.',
    voetenwerk: '45° schuin naar achteren uitstappen naar Heiko Sanchin Dachi + voetwissel (in-uit).',
    vitalePunten: 'Bijv. Oog [Seimo], [Gansei] of [Kasumi].',
    aandachtspunten: 'Behoud steeds Zanchin. Dit geldt voor alle bunkai!'
  },
  {
    nummer: '02',
    naam: 'Gedan Harai Uke',
    aanval: 'Gedan Oi Zuki.',
    verdediging: 'Gedan Harai Uke (als slag en wering tegelijk).',
    tegenaanval: 'Wering = aanval.',
    voetenwerk: 'Zijwaarts uitstappen naar buiten in Shiko Dachi.',
    vitalePunten: 'Elleboog [Soto Hijitsume].',
    aandachtspunten: 'Bij training met hard contact niet het vitale punt [Hijitsume] aanvallen maar de onderarm!'
  },
  {
    nummer: '03',
    naam: 'Chudan Yoko Uke + Mae Geri + Hiji Ate + Jodan Uraken Uchi',
    aanval: 'Chudan Oi Zuki.',
    verdediging: 'Chudan Yoko Uke.',
    tegenaanval: 'Gedan Mae Geri + Chudan Hiji Ate + Jodan Uraken Uchi.',
    voetenwerk: 'Sayu Tenshin + na Mae Geri inkomen naar voren met Zenkutsu Dachi.',
    vitalePunten: 'Bijv. [Kinteki] (Mae Geri) + [Ganka] of [Suigetsu] (Hiji Ate) + [Jinchu] (Jodan Uraken Uchi).',
    aandachtspunten: 'De lage voorwaartse trap wordt al naar gelang de afstand uitgevoerd met de bal van de voet, de voorzijde van de enkel of het scheenbeen. De aanvaller ontwijkt de Chudan Hiji Ate met een achterwaartse Suri Ashi.'
  },
  {
    nummer: '04',
    naam: 'Gedan Harai Uke + Chudan Gyaku Zuki',
    aanval: 'Gedan Oi Zuki.',
    verdediging: 'Gedan Harai Uke.',
    tegenaanval: 'Chudan Gyaku Zuki.',
    voetenwerk: 'Schuin naar achteren weg stappen.',
    vitalePunten: 'Bijv. [Ganka].',
    aandachtspunten: 'Gevorderden (vanaf bruine band) moeten de wering en tegenaanval als één beweging oefenen. De laatste twee Bunkai Kumite moeten door gevorderden ook als één geheel worden getraind.'
  },
  {
    nummer: '05',
    naam: 'Ashi Barai + Yoko Shuto Uchi + Hikite + Fumikomi Geri',
    aanval: 'Chudan Oi Zuki.',
    verdediging: 'Chudan Yoko Uke + Tsukkami (= beetpakken).',
    tegenaanval: 'Ashi Baraï + Yoko Shuto Uchi + Fumikomi Geri.',
    voetenwerk: 'Sayu Tenshin met 45 graden draai.',
    vitalePunten: 'Bijv. [Jinchu] of Adamsappel [Nodo Botoku] (Yoko Shuto Uchi) + nek (Fumikomi Geri).',
    aandachtspunten: 'Na de Ashi Barai de voet snel terugbrengen, om te voorkomen dat de tegenstander tegen je been aanvalt. Voor de veiligheid van de tegenstander wordt de Yoko Shuto Uchi niet slaand uitgevoerd naar een Kyusho, maar meer duwend bijvoorbeeld op borst en schouder. De Fumikomi Geri kan met beide benen worden uitgevoerd, afhankelijk van hoe de tegenstander valt. In de Kata is het echter hetzelfde been als die waarmee de veeg wordt uitgevoerd. Gevorderde karata kunnen ook een irimi stap maken en de tegenstander van dichtbij vegen. Bij deze gevorderden variatie wordt tevens de elleboog op de borst klem gezet.'
  },
  {
    nummer: '06',
    naam: 'Awase Zuki',
    aanval: 'Chudan Oi Zuki.',
    verdediging: 'Nagashi Seiken Ura Uke (variant van Chudan Yoko Uke).',
    tegenaanval: 'Awase Zuki + Awase Oshi.',
    voetenwerk: 'Sayu Tenshin + uitstappen naar Zenkutsu Dachi.',
    vitalePunten: 'Bijv. [Ganka] (Gyaku Zuki) en [Inazuma] (Ura Zuki).',
    aandachtspunten: 'De aanval moet vroeg onderschept worden. De Awase Zuki moet eerst krachtig gefocust worden voordat deze als duw wordt voortgezet. Om dit te kunnen doen, moet je eerst naar binnen en beneden ontspannen en de adem binnen laten komen. De Awase Zuki is een verkleinde, gesloten hand versie van de Tora Guchi.'
  }
];

const BunkaiPage = () => {
  const { t } = useTranslation();

  // Filter katas that have bunkai and group them by level
  const bunkaiByLevel = katas
    .filter(kata => kata.bunkai && kata.bunkai.length > 0)
    .reduce((acc, kata) => {
      if (!acc[kata.level]) {
        acc[kata.level] = [];
      }
      acc[kata.level].push(kata);
      return acc;
    }, {} as Record<string, typeof katas>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('bunkai.title')}
        description={t('bunkai.description')}
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {Object.entries(bunkaiByLevel).map(([level, levelKatas]) => (
            <motion.div key={level} variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {t(`kata.levels.${level}`)}
              </h2>
              <div className="grid gap-4">
                {levelKatas.map((kata) => (
                  <Link 
                    key={kata.id} 
                    to={`/bunkai/${kata.id}`}
                    className="block transition-transform hover:scale-[1.02]"
                  >
                    <Card className="overflow-hidden border border-gray-200 hover:border-red-500 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {kata.name}
                              </h3>
                              <Badge variant="secondary" className="bg-red-100 text-red-800">
                                {kata.japaneseName}
                              </Badge>
                            </div>
                            <p className="text-gray-600 italic">
                              {kata.meaning}
                            </p>
                          </div>
                          <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BunkaiPage; 