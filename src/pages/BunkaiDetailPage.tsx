import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { katas } from '@/data';
import { Kata } from '@/types';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';

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

const gekisaiDaiIchiBeschrijving = `Betekent letterlijk 'aanval en vernietiging 1'. Deze voor het karate wat ongebruikelijk agressieve benaming weerspiegelt de tijd waarin het Japanse eiland Okinawa het slagveld voor Japans-Amerikaanse oorlogshandelingen was. Het kata werd in 1940 ontwikkeld door de grondlegger van het Okinawa Goju-ryu Karate-do, Myagi Chojun sensei. Het bestaat uit diverse combinaties van eenvoudige basistechnieken, die het aanleren van de latere moeilijkere klassieke koryu kata vergemakkelijken. Examenstof voor kukyu (negende kyu, witte band) en hoger.`;

const gekisaiDaiNiBeschrijving = `Betekent letterlijk 'aanval en vernietiging 2'. Net als Gekisai Dai Ichi ontwikkeld door Myagi Chojun sensei om dezelfde redenen. Examenstof voor nanakyu (zevende kyu, gele band) en hoger.`;

const gekisaiDaiNiBunkai = [
  {
    nummer: '01',
    naam: 'Hiki Uke',
    aanval: 'Chudan Oi Zuki.',
    verdediging: "Hiki Uke + overpakken met 'Sukui Uke'.",
    tegenaanval: 'Beetpakken bij de keel.',
    voetenwerk: 'Sayu Tenshin + voorwaartse Suri Ashi.',
    vitalePunten: 'Bijv. adamsappel [Nodo Botoke] en/of halsslagader [Matsukaze].',
    aandachtspunten: 'Bij het inslippen (Suri Ashi) de voorste voet om de voorste voet van de aanvaller haken en een been klem aanleggen of de voorste voet op de voorste voet van de aanvaller zetten. De aanvalsarm vastklemmen tussen je eigen bovenarm en flank.'
  },
  {
    nummer: '02',
    naam: 'Nihon Hiki Uke',
    aanval: 'Chudan Oi Zuki + Jodan Gyaku Zuki.',
    verdediging: 'Twee keer Hiki Uke.',
    tegenaanval: 'Nukite Zuki.',
    voetenwerk: 'Een voet terugstappen of twee keer Sayu Tenshin.',
    vitalePunten: 'Oog [Gansei] of Halssalgader [Matsukaze]).',
    aandachtspunten: 'Met de hand/arm van de tweede aanval sluit je de andere arm op. Evt. met de grote teen op voorvoet druk zetten [Kori].'
  },
  {
    nummer: '03',
    naam: 'Tora Guchi',
    aanval: 'Jodan Oi Zuki',
    verdediging: 'Jodan Haishu Osae Uke',
    tegenaanval: 'Morote Tsukkami en Morote Oshi.',
    voetenwerk: 'Sayu Tenshin naar Neko Ashi Dachi, daarna uitstappen. Na de duw de achterste voet bijtrekken.',
    vitalePunten: 'Bijv. [Kinteki] en halsslagader/Adamsappel ([Matsukaze]/[Nodo Botoke]).',
    aandachtspunten: 'Aanval vroeg onderscheppen en met MUchimi uitvoeren.'
  }
];

const saifaBeschrijving = `Betekent zoiets als 'vernietigende slagen'. Sai betekent, net als in Gekisai, 'vernietigen'. Fa betekent ondermeer 'slaan'. Typerend voor kata Saifa zijn de vele slagtechnieken, zoals bijvoorbeeld uraken uchi, tettsui uchi en haito uchi. Saifa is het eerste klassieke koryu kata. Het kata werd overgeleverd door Ryu Ryu Ko aan Higaonna Kanryo sensei. Vergeleken met het Gekisai Dai kata neemt vanaf Saifa de moeilijkheidsgraad van de kata toe en verschijnen meer en meer combinaties van hand- en beentechnieken die goede coördinatie vergen. Examenstof voor gokyu (vijfde kyu, groene band) en hoger.`;

const saifaBunkai = [
  {
    nummer: '01',
    naam: 'Hazushi Waza + Otoshi Uke + Jodan Uraken Uchi',
    aanval: '1. Kote Dori. 2. Chudan Gyaku Zuki.',
    verdediging: '1. Hazushi Waza (bevrijdingstechniek). 2. Shotei Otoshi Uke',
    tegenaanval: 'Jodan Uraken Uchi.',
    voetenwerk: '45° instappen en indraaien naar Heiko Dachi, daarna in of terug stappen naar Shiko Dachi.',
    vitalePunten: 'Bijv. [Jinchu]',
    aandachtspunten: 'Bij het instappen de knokkels van de beetgepakte hand/arm tegen de onderarm van de tegenstander drukken om zijn greep te verzwakken (van meet af aan druk houden). Bij het lostrekken (Hazushi Waza) je armen dicht bij het lichaam houden. Na de Otoshi Uke de arm beetpakken (niet gelijk grijpen). De wering kan ook worden uitgevoerd in Osae of Nagashi vorm.'
  },
  {
    nummer: '02',
    naam: 'Sukui Uke + Shotei Gedan Harai Uke + Hiza Ate + Mae Geri',
    aanval: 'Chudan Oi Zuki + Mae Geri.',
    verdediging: 'Sukui Uke + Shotei Gedan Harai Uke.',
    tegenaanval: 'Hiza Ate + Gedan Mae Geri.',
    voetenwerk: 'Vanuit Heiko Dachi terug met Suri Ashi naar Heiko Sanchin Dachi.',
    vitalePunten: 'Bijv. [Ein] (Hiza Geri) en [Kinteki] (Mae Geri).',
    aandachtspunten: 'Bij de Sukui Uke wordt de andere hand gebruikt als bescherming. De aanvaller moet de Mae Geri gelijk terugtrekken. Wanneer de aanvaller, na het terug trekken van de Mae Geri, de romp zijwaarts draait, maak je de Mae Geri naar de flank.'
  },
  {
    nummer: '03',
    naam: '(Morote Hiki Uke +) Heiko Zuki',
    aanval: 'Nihon Chudan Zuki.',
    verdediging: 'Nihon Hiki Uke.',
    tegenaanval: 'Morote Nukite Zuki + Morote Oshi.',
    voetenwerk: 'Een voet naar achteren + voorwaartse Suri Ashi of Ayumi Ashi (al naar gelang de afstand). In geval van grote, sterke tegenstander: twee keer Sayu Tenshin.',
    vitalePunten: 'Bijv. onder het sleutelbeen (Nukite) en [Ganka] (Oshi).',
    aandachtspunten: 'De Morote Nukite Zuki en Morote Oshi worden zoveel mogelijk in een beweging uitgevoerd.'
  },
  {
    nummer: '04',
    naam: '(Morote) Gedan Furi Uchi',
    aanval: 'Ashi Dori.',
    verdediging: 'Wegstappen.',
    tegenaanval: 'Morote Gedan Furi Uchi + Kubi Nage.',
    voetenwerk: 'Kotai Ayumi Ashi eventueel wegdraaien bij het werpen.',
    vitalePunten: 'Bijv. Beide oren of slapen: [Komekami].',
    aandachtspunten: 'Beetpakken bij de oren of bij de kaak en haren.'
  },
  {
    nummer: '05',
    naam: 'Tettsui Uchi + TsukamiHiki + Ura Zuki + Jodan Gyaku "Zuki"',
    aanval: 'Chudan Oi Zuki',
    verdediging: 'Gedan Uchi Nagashi Uke.',
    tegenaanval: 'Tettsui Uchi + Tsukkamihiki + Ura Zuki + Jodan (Gyaku) Oshi.',
    voetenwerk: 'Tai Sabaki, daarna uitstappen voor de Ura Zuki en eventueel doorstappen voor de duw (Ayumi Ashi).',
    vitalePunten: 'Bijv. fontanel [Shomon] (Tettsui Uchi) + neus (Ura Zuki) + evt. Oog [Gansei] (Oshi).',
    aandachtspunten: 'Bij de lage wering de arm rond en kort bij het lichaam houden (niet "scheppen").'
  },
  {
    nummer: '06',
    naam: 'Haito Uchi',
    aanval: 'Chudan Oi Zuki.',
    verdediging: 'Ura Hiki Uke.',
    tegenaanval: 'Haito Uchi.',
    voetenwerk: 'Sayu Tenshin naar Neko Ashi Dachi.',
    vitalePunten: 'Bijv. Zwevende rib/nieren [Ushiro Denko] of nek [Keichu].',
    aandachtspunten: 'In de Kata is de Haito Uchi een Chudan techniek.'
  },
  {
    nummer: '07',
    naam: 'Tora Guchi',
    aanval: 'Jodan Oi Zuki.',
    verdediging: 'Jodan Haishu Osae Uke.',
    tegenaanval: 'Morote Tsukkami en Morote Oshi.',
    voetenwerk: 'Sayu Tenshin naar Neko Ashi Dachi, daarna uitstappen. Na de duw de achterste voet bijtrekken.',
    vitalePunten: 'Bijv. [Kinteki] en halsslagader/adamsappel [Matsukaze]/[Nodo Botoke].',
    aandachtspunten: 'Aanval vroeg onderscheppen en met Muchimi uitvoeren.'
  }
];

const BunkaiDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [kata, setKata] = useState<Kata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundKata = katas.find(k => k.id === id);
    setKata(foundKata || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <p>{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (!kata) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <p>{t('kataNotFound', 'Kata not found')}</p>
          <Link to="/bunkai">
            <Button variant="outline" className="mt-4">
              {t('common.back', 'Back to Bunkai')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    }
  };

  // Helper to get bunkai data from translations
  const getBunkaiList = (kataKey: string) => {
    const bunkaiRoot = t(`bunkai.kata.${kataKey}`, { returnObjects: true }) as { [key: string]: any };
    if (!bunkaiRoot) return [];
    const bunkaiList = [];
    for (let i = 1; i <= 20; i++) {
      const bunkai = bunkaiRoot[`bunkai${i}`];
      if (!bunkai) break;
      bunkaiList.push({ nummer: i.toString().padStart(2, '0'), ...bunkai });
    }
    return {
      description: typeof bunkaiRoot.description === 'string' ? bunkaiRoot.description : '',
      title: typeof bunkaiRoot.title === 'string' ? bunkaiRoot.title : '',
      overviewTitle: typeof bunkaiRoot.overviewTitle === 'string' ? bunkaiRoot.overviewTitle : '',
      bunkaiList
    };
  };

  // Map kata id to translation key
  const kataKeyMap: Record<string, string> = {
    'gekisai-dai-ichi': 'gekisaiDaiIchi',
    'gekisai-dai-ni': 'gekisaiDaiNi',
    'saifa': 'saifa',
    'seiyunchin': 'seiyunchin',
    'shisochin': 'shisochin',
    'sanseru': 'sanseru',
    // Add more kata keys as needed
  };

  const kataKey = kataKeyMap[kata.id];
  const bunkaiData = kataKey ? getBunkaiList(kataKey) : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          {/* DEBUG: Toon de kata-id bovenaan */}
          <div style={{ color: 'red', fontWeight: 'bold', marginBottom: 8 }}>Kata id: {kata?.id}</div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Back Button */}
            <motion.div variants={itemVariants}>
              <Link to="/bunkai">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft size={16} />
                  {t('common.back', 'Back to Bunkai')}
                </Button>
              </Link>
            </motion.div>

            {/* Kata Info */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-2xl font-serif font-semibold">{kata.name}</h1>
                      <p className="text-lg text-stone-600">{kata.japaneseName}</p>
                      <p className="text-stone-500 italic mt-1">{kata.meaning}</p>
                    </div>
                    <Badge variant="outline">{kata.level}</Badge>
                  </div>
                  <p className="text-stone-600">{kata.description}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bunkai Video */}
            {kata.bunkai && (
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">{t('bunkaiDemonstration', 'Bunkai Demonstration')}</h2>
                    <div className="aspect-video relative">
                      <iframe
                        src={kata.bunkai.replace('watch?v=', 'embed/')}
                        className="absolute inset-0 w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href={kata.bunkai}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900"
                      >
                        <ExternalLink size={16} />
                        {t('watchOnYouTube', 'Watch on YouTube')}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Kata Video */}
            {kata.videoUrl && (
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">{t('kataPerformance', 'Kata Performance')}</h2>
                    <div className="aspect-video relative">
                      <iframe
                        src={kata.videoUrl.replace('watch?v=', 'embed/')}
                        className="absolute inset-0 w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href={kata.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900"
                      >
                        <ExternalLink size={16} />
                        {t('watchOnYouTube', 'Watch on YouTube')}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Additional Information */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">{t('additionalInformation', 'Additional Information')}</h2>
                  {kata.history && (
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">{t('history', 'History')}</h3>
                      <p className="text-stone-600">{kata.history}</p>
                    </div>
                  )}
                  {kata.culturalSignificance && (
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">{t('culturalSignificance', 'Cultural Significance')}</h3>
                      <p className="text-stone-600">{kata.culturalSignificance}</p>
                    </div>
                  )}
                  {kata.masters && kata.masters.length > 0 && (
                    <div>
                      <h3 className="font-medium mb-2">{t('notableMasters', 'Notable Masters')}</h3>
                      <ul className="list-disc list-inside text-stone-600">
                        {kata.masters.map((master, index) => (
                          <li key={index}>{master}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Bunkai Section (Accordion) */}
            {bunkaiData &&
              typeof bunkaiData === 'object' &&
              'description' in bunkaiData &&
              'title' in bunkaiData &&
              'bunkaiList' in bunkaiData &&
              Array.isArray((bunkaiData as any).bunkaiList) && (
                (() => {
                  const bd = bunkaiData as { description: string; title: string; overviewTitle?: string; bunkaiList: any[] };
                  return (
                    <motion.div variants={itemVariants}>
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-lg font-bold mb-2 text-gray-800">{t('description', 'Beschrijving')}</h2>
                          <p className="text-sm text-gray-700 mb-4">{bd.description}</p>
                          <h2 className="text-lg font-bold mb-4 text-gray-800">{bd.overviewTitle || bd.title || t('bunkai.overview', 'Bunkai Overview')}</h2>
                          <Accordion type="single" collapsible>
                            {bd.bunkaiList.map((bunkai: any) => (
                              <AccordionItem key={bunkai.nummer} value={bunkai.nummer}>
                                <AccordionTrigger>
                                  <span className="font-semibold text-base">{t('bunkaiNumber', 'Bunkai')} {bunkai.nummer}:</span> <span className="text-base">{bunkai.name}</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-1 pl-2 text-sm text-gray-700">
                                    <div><span className="font-semibold">{t('bunkai.details.attack', 'Attack')}:</span> {bunkai.attack}</div>
                                    <div><span className="font-semibold">{t('bunkai.details.defense', 'Defense')}:</span> {bunkai.defense}</div>
                                    <div><span className="font-semibold">{t('bunkai.details.counterAttack', 'Counter-attack')}:</span> {bunkai.counterAttack}</div>
                                    <div><span className="font-semibold">{t('bunkai.details.footwork', 'Footwork')}:</span> {bunkai.footwork}</div>
                                    <div><span className="font-semibold">{t('bunkai.details.vitalPoints', 'Vital Points')}:</span> {bunkai.vitalPoints}</div>
                                    <div><span className="font-semibold">{t('bunkai.details.notes', 'Important Notes')}:</span> {bunkai.notes}</div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })()
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BunkaiDetailPage; 