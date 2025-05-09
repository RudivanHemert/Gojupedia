import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { katas } from '@/data';
// import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollingText } from '@/components/ui/scrolling-text';
import MediaGallery from '@/components/media/MediaGallery';
import InteractiveKataSteps, { KataStep } from '@/components/practice/InteractiveKataSteps';
// Comment out the problematic import to use local data instead
// import { gekisaiDaiIchiSteps } from '../data/gekisai-dai-ichi';
import { useProgress } from '@/hooks/useProgress';

// Define the steps data directly in this file to avoid import issues
const gekisaiDaiIchiSteps: KataStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Opwaartse wering (jodan uke)',
    description: `Stap vanuit musubi dachi met de rechtervoet recht vooruit en draai op de bal van beide voeten en voer gelijktijdig de wering uit. De lengte van je stand is twee voeten. De werende arm gaat vlak langs het lichaam en aanvankelijk horizontaal voor het middenrif langs en daarna recht omhoog en draait pas op het laatste moment. Zorg voor zo min mogelijk spanning in je schouders. De arm wordt gefocust op een vuist-breedte van het voorhoofd. De hikite-arm gaat aanvankelijk omhoog, blijft hoog tijdens de draai van het lichaam en wordt vandaar actief en krachtig naar de zij getrokken. Focus krachtig. Als je blokt is je gewicht verdeeld over beide voeten. Gevorderden kunnen tijdens de kime de elleboog iets naar beneden draaien en de techniek uitvoeren met een wat rondere beweging.`,
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Hoge stoot (jodan zuki)',
    description: `Zet af door de voorste voet in de grond te drukken en stap rechtdoor in han zenkutsu dachi (drie voeten lang). Het bekken draait niet in bij de stoot. Tijdens de kime van de stoot is ongeveer 70% van je gewicht op het voorste been. De stoot is op ooghoogte. Gebruik ook de krachtige hikite en sluit je tanden tijdens de kime. Gebruik vooral de kracht van de afzet en de verplaatsing, houd je schouders zo lang mogelijk ontspannen.`,
    image: '/Images/Kata/gekisai-dai-ichi-1.png'
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Lage vegende wering (gedan barai)',
    description: `Stap met je rechterbeen terug in shiko dachi en open gelijktijdig je bekken en laat het vallen. Je blijft naar de zijkant kijken. De hikite wordt krachtig teruggetrokken (trek je elleboog naar achteren en naar beneden). Tot de kime is er geen spanning in de arm en de vuist eindigt een vuist-breedte van de knie (in de bunkai wordt de lage wering uitgevoerd als een aanval naar de elleboog en eindigt verder van de knie). Tijdens de kime blijft het bekken open, maar het tanden sluit.

Opmerking: in shiko dachi is de kruin omhoog en de kin iets in (oren gespitst). De rug maakt een "S", de schouderbladen liggen tegen elkaar aan en zijn naar beneden gericht. Het bekken is open en dus naar voren gekanteld, het scheenbeen staat loodrecht op de vloer en de knieën staan recht boven de voeten (aanvankelijk moeten veel karateka's hiervoor de knieën en het dijbeen actief naar achteren duwen). De heup is iets hoger dan de knieën (water zou langzaam naar beneden stromen over het dijbeen). De voeten (vooral de grote teen en de binnenzijde van de voet) worden krachtig in de grond gedrukt en grijpen de vloer tijdens de kime.`,
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Middenhoge wering (chudan uke)',
    description: `Trek de linkervoet naar de andere voet en daarna in een cirkel naar voren (de enkels gaan langs elkaar heen) in sanchin dachi. De vuist van de werende hand begint ver onder de elleboog van de andere arm. De techniek wordt uitgevoerd met muchimi. Deze beweging wordt uitgevoerd met een vrij grote circulaire beweging en de voet en de arm bewegen gelijktijdig.`,
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Voorwaartse trap (mae geri), elleboogstoot en stamp (hiji ate en fumikomi geri), uraken uchi (knokkelslag), gedan barai en middenhoge tegengestelde stoot (chudan gyaku zuki)',
    description: `De technieken in deze serie (behalve de elleboogstoot en de stamp) moeten afzonderlijk en krachtig worden uitgevoerd. Het is belangrijk om (tussendoor) te ontspannen na elke techniek. Bij de klassikale uitvoering van Gekisai dai ichi zit een telstop voor de knokkelslag, hierdoor kan het lichaam beter worden ontspannen. Het ritme is 1-2 en 1-2-3.

Behoud het blok en hikite tijdens de voorwaartse trap. De trap – knie hoog heffen totdat het dijbeen evenwijdig is aan de vloer - is keage (dus zonder bekkenkanteling en heupdraai). De trap is recht naar voren met de bal van de voet naar het kruis. Voor de trap zink je iets in op je standbeen en tijdens de trap steunt het lichaam volledig op het standbeen. Het bekken mag je iets instrekken (hoeft niet) en zet je niet vast. Na de trap ontspan je, trek het onderbeen actief terug totdat hij onder de knie is. Vandaaruit wordt hij neergestampt in zenkutsu dachi.

De elleboogstoot gaat vooral naar voren, de vuist eindigt bij de kaak. Trek de hikite krachtig terug. De elleboogstoot en de stamp worden gezamenlijk uitgevoerd en afhankelijk van het niveau van de karateka kan dit op drie manieren:
1. De voet wordt neergestampt en de kaatsing van de grond wordt gebruikt in de elleboogstoot. Het ritme is 1 ….. 2.
2. De voet wordt neergestampt en meteen daarna wordt de elleboogstoot uitgevoerd. Het ritme in pam-bam.
3. De stamp en de elleboogstoot worden gelijktijdig uitgevoerd. Vanuit hara gaat de kracht gelijktijdig naar de voet als naar de elleboog. Dit heet "splitting power".

De knokkelslag wordt ingezet vanuit het bekken en tijdens de impuls blijven de schouders, elleboog en pols ontspannen. De techniek is een zweepslag (er is dus geen kime) naar jinchu (vitaal punt bij het midden van de bovenlip). Na de techniek klapt de vuist terug en maakt de elleboog een hoek van 90 graden.

De lage vegende wering maakt een relatief kleine zwaai en draait om de elleboog. Tijdens de uitvoering is er geen spanning in de schouders en de elleboog. Tijdens de focus draait de arm iets. De hikite is krachtig.

De tegengestelde stoot wordt uitgevoerd met heel veel kracht en snelheid. De beweging begint door het achterste been te strekken. Daardoor draait het bekken in; dit wordt gebruikt voor de krachtige impuls van de stoot, gefocust en uitgevoerd naar suigetsu. Gebruik ook de krachtige en snelle hikite. Kiai!`,
    image: '/Images/Kata/gekisai-dai-ichi-2.png'
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Voetveeg (ashi barai) en meshandslag (shuto uchi)',
    description: `Trek de achterste voet richting de andere en maak een kleine voetveeg; de vegende voet houdt lang contact met de grond en passeert de andere niet. Focus op de zijkant van de binnenkant van de voet, let er op dat je laag veegt. Stamp de voet neer in hachiji dachi (= 'natuurlijke stand') en gebruik de weerkaatsing van de grond voor de impuls naar de meshandslag; gebruik ook de krachtige hikite (blijft een vuist). Trek tijdens de veeg ook je schouderbladen uit elkaar en wat naar voren (de rug blijft recht, je blijft naar voren kijken) en gebruik ook het terugspringen van de schouderbladen in de meshandslag. Bij de meshandslag zijn de schouders en ellebogen vrij van spanning. De techniek is snel en wordt kort gefocust op ooghoogte ("zware slag"). Bij de meshand zijn de vingers recht en de gebogen duim ligt tegen zijkant van de basis van de wijsvinger. Focus ook op het raakpunt met de pinkmuis.`,
  },
  {
    id: 'step-7',
    number: 7,
    title: 'Dubbele stoot (awase zuki): middenhoge en omgekeerde stoot (chudan en ura zuki)',
    description: `De dubbele stoot is een kleine en gesloten vorm van de tora guchi. Stap vanuit hachiji dachi in een rechte lijn naar achteren (iets schuin) in zenkutsu dachi en trek je hand actief (alsof je iemand meesleurt) in je zij (de knokkels blijven naar boven). Strek je been en zet je hele lichaam achter de dubbele stoot; gebruik vooral de kracht vanuit de grond en je rugspieren (de vuist van de omgekeerde stoot is boven de knie). Stap met je linkerbeen naar voren en kom niet omhoog tijdens het wisselen van de voeten (de voeten staan even naast elkaar; er is een moment vergelijkbaar met op de wc gaan zitten). Voer tijdens het wisselen van de voeten met de rechterhand een middenhoge binnenwaartse wering (chudan uchi uke) uit en met de linkerhand een middenhoge buitenwaartse wering (chudan soto uke), waarbij je (dus) tegen de rug van beide vuisten aankijkt. Stap terug en trek gelijktijdig de vuisten krachtig terug in de zij. Gebruik het weerkaatsen van de grond, het strekken van het been/indraaien bekken en de rugspieren voor nog een krachtige dubbele stoot (awase zuki: ura zuki (omgekeerde stoot) en chudan zuki (middenhoge stoot). Van de vuist die de middenhoge stoot gaat maken, is tijdens de wissel de hikite in de zij met de knokkels naar boven. De ura zuki (knokkels naar beneden tijdens de wissel) is naar de zevende rib (denko), de chudan zuki naar de 5e tussenribruimte, net onder de tepel (ganka).

Opmerking: beginners mogen de chudan soto uke ook als een 'gewone' chudan uke uitvoeren, waarbij je dus tegen de vingerzijde van de vuist kijkt.`,
    image: '/Images/Kata/gekisai-dai-ichi-3.png'
  },
  {
    id: 'step-8',
    number: 8,
    title: 'Afsluiting',
    description: `Open de linkerhand en leg de rechtervuist met een kleine circulaire beweging in de linker. Draai de linkervoet naar buiten, sluit met de rechtervoet aan in musubi dachi en draai gelijktijdig de handen. Sluit de kata af.`,
  }
];

// Log that we've defined the steps in this file
console.log('KataDetailPage: Using local gekisaiDaiIchiSteps data with', gekisaiDaiIchiSteps.length, 'steps');

// Define a fallback dataset in case the imported data is unavailable
const fallbackSteps: KataStep[] = [
  {
    id: 'fallback-1',
    number: 1,
    title: 'Beginning position',
    description: 'Start in a ready stance facing forward.'
  },
  {
    id: 'fallback-2',
    number: 2,
    title: 'First movement',
    description: 'Step forward into a front stance with a blocking motion.'
  }
];

const KataDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { markAccessed } = useProgress();
  const [dataLoadError, setDataLoadError] = useState<string | null>(null);
  
  // Immediately test if gekisaiDaiIchiSteps is available
  useEffect(() => {
    console.log('KataDetailPage: Checking availability of gekisaiDaiIchiSteps on mount');
    try {
      if (!gekisaiDaiIchiSteps) {
        console.error('KataDetailPage: gekisaiDaiIchiSteps is undefined or null');
        setDataLoadError('Unable to load gekisaiDaiIchiSteps data. Using fallback data.');
      } else {
        console.log('KataDetailPage: gekisaiDaiIchiSteps is available with', gekisaiDaiIchiSteps.length, 'steps');
        setDataLoadError(null);
      }
    } catch (error) {
      console.error('KataDetailPage: Error accessing gekisaiDaiIchiSteps:', error);
      setDataLoadError(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }, []);
  
  // Get kata data based on ID
  const kata = id ? katas.find(k => k.id === id) : null;
  
  useEffect(() => {
    if (kata) {
      // Mark this kata as accessed for progress tracking
      markAccessed(kata.id, 'kata');
    }
  }, [kata, markAccessed]);
  
  // Format kata steps for the interactive component
  const formattedSteps = useMemo(() => {
    if (!kata) {
      console.log('KataDetailPage: No kata data found');
      return [];
    }
    
    console.log('KataDetailPage: Formatting steps for kata:', kata.id);
    console.log('KataDetailPage: Kata steps from data:', kata.steps);
    
    // For Gekisai Dai Ichi, use the detailed steps we already created
    if (kata.id === 'gekisai-dai-ichi') {
      console.log('KataDetailPage: Using gekisaiDaiIchiSteps for', kata.id);
      console.log('KataDetailPage: gekisaiDaiIchiSteps available:', !!gekisaiDaiIchiSteps);
      console.log('KataDetailPage: gekisaiDaiIchiSteps length:', gekisaiDaiIchiSteps?.length || 0);
      if (gekisaiDaiIchiSteps?.[0]) {
        console.log('KataDetailPage: First step of gekisaiDaiIchiSteps:', 
          `id: ${gekisaiDaiIchiSteps[0].id}, title: ${gekisaiDaiIchiSteps[0].title}`);
      }
      
      // Use the imported data if available, otherwise use fallback
      if (!gekisaiDaiIchiSteps || gekisaiDaiIchiSteps.length === 0) {
        console.warn('KataDetailPage: Using fallback steps data for', kata.id);
        return fallbackSteps;
      }
      
      return gekisaiDaiIchiSteps;
    }
    
    // For other katas, format the simple array steps to the required structure
    console.log('KataDetailPage: Using generic format for', kata.id);
    const steps = kata.steps.map((step, index) => ({
      id: `${kata.id}-step-${index + 1}`,
      number: index + 1,
      title: `Stap ${index + 1}`,
      description: step,
      image: index < kata.images.length ? kata.images[index] : undefined
    }));
    
    console.log('KataDetailPage: Formatted steps:', steps);
    return steps;
  }, [kata]);

  useEffect(() => {
    console.log('KataDetailPage: Steps passed to InteractiveKataSteps:', formattedSteps);
  }, [formattedSteps]);
  
  if (!kata) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Kata Not Found</h1>
        <p className="mb-4">The kata you're looking for doesn't exist in our database.</p>
        <Button onClick={() => navigate('/kata')}>
          Back to Kata List
        </Button>
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const kataVideoId = getYouTubeId(kata.videoUrl);
  const bunkaiVideoId = getYouTubeId(kata.bunkai);
  const shimeVideoId = kata.shime ? getYouTubeId(kata.shime) : null;

  return (
    <>
      {/* Header with Navigation */}
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <img 
            src={kata.images[0]} 
            alt={kata.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/Images/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-white text-3xl font-bold">{kata.name}</h1>
              <p className="text-white opacity-90">{kata.japaneseName}</p>
              <p className="text-white/70 text-sm italic">{kata.meaning}</p>
            </div>
            <Badge>{kata.level}</Badge>
          </div>
        </div>
      </div>
      
      {dataLoadError && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 m-4 rounded-md flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Data Loading Issue</p>
            <p className="text-sm">{dataLoadError}</p>
          </div>
        </div>
      )}
      
      {/* Content Area */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start px-4 pt-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <div>
              <h2 className="text-xl font-serif font-semibold mb-2">Description</h2>
              <p className="text-gray-700 dark:text-gray-300">{kata.description}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-serif font-semibold mb-2">Key Features</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {kata.keyFeatures && kata.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-serif font-semibold mb-2">At a Glance</h2>
                <div className="grid grid-cols-2 gap-y-2">
                  <div className="text-gray-500 dark:text-gray-400">Movements</div>
                  <div className="font-medium">{kata.movements}</div>
                  
                  <div className="text-gray-500 dark:text-gray-400">Duration</div>
                  <div className="font-medium">{kata.duration}</div>
                  
                  <div className="text-gray-500 dark:text-gray-400">Origin</div>
                  <div className="font-medium">{kata.origin}</div>
                  
                  <div className="text-gray-500 dark:text-gray-400">Level</div>
                  <div className="font-medium">{kata.level}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="steps" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-xl font-serif font-semibold mb-2">Sequence of Movements</h2>
            
            {formattedSteps.length === 0 ? (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-md">
                <p className="text-sm font-medium">No steps available for this kata.</p>
                <p className="text-xs mt-1">Steps data may be loading or missing.</p>
              </div>
            ) : (
              <>
                <div className="mb-2">
                  <p className="text-sm text-gray-500">
                    Total steps: {formattedSteps.length}
                  </p>
                </div>
                <InteractiveKataSteps 
                  kataId={kata.id}
                  kataName={kata.name}
                  steps={formattedSteps}
                />
              </>
            )}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="media" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-xl font-serif font-semibold mb-2">Images</h2>
            
            <MediaGallery 
              items={kata.images.map((image, index) => ({
                id: `kata-${kata.id}-image-${index}`,
                type: 'image',
                url: image,
                title: `${kata.name} - Image ${index + 1}`,
                description: '',
                category: 'kata',
                tags: [kata.id, 'image'],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }))}
            />
            
            {/* Videos section */}
            {(kataVideoId || bunkaiVideoId || shimeVideoId) && (
              <div className="space-y-4 mt-8">
                <h2 className="text-xl font-serif font-semibold mb-2">Videos</h2>
                
                {kataVideoId && (
                  <div className="space-y-2">
                    <h3 className="font-medium">Kata Demonstration</h3>
                    <div className="relative pt-[56.25%] bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${kataVideoId}`}
                        title={`${kata.name} Kata Demonstration`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                {bunkaiVideoId && (
                  <div className="space-y-2">
                    <h3 className="font-medium">Bunkai Demonstration</h3>
                    <div className="relative pt-[56.25%] bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${bunkaiVideoId}`}
                        title={`${kata.name} Bunkai Demonstration`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                
                {shimeVideoId && (
                  <div className="space-y-2">
                    <h3 className="font-medium">Shime Demonstration</h3>
                    <div className="relative pt-[56.25%] bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${shimeVideoId}`}
                        title={`${kata.name} Shime Demonstration`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="history" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-xl font-serif font-semibold mb-2">Historical Background</h2>
            <p className="text-gray-700 dark:text-gray-300">{kata.history || "Historical information about this kata is currently being researched."}</p>
            
            <div className="mt-4">
              <h2 className="text-xl font-serif font-semibold mb-2">Cultural Significance</h2>
              <p className="text-gray-700 dark:text-gray-300">{kata.culturalSignificance || "Information about cultural significance is being compiled."}</p>
            </div>
            
            {kata.masters && kata.masters.length > 0 && (
              <div className="mt-4">
                <h2 className="text-xl font-serif font-semibold mb-2">Notable Masters</h2>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  {kata.masters.map((master, index) => (
                    <li key={index}>{master}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default KataDetailPage;
