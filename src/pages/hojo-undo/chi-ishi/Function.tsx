import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Dumbbell } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';

const ChiIshiFunction = () => {
  const mainComponents = [
    {
      title: "Versterkt met name de spieren van de onderarm en hand",
      subtitle: "Strengthens forearm and hand muscles",
      icon: Dumbbell,
      color: "bg-blue-500",
      items: [
        "Ondersteuning van polsstabiliteit bij stoot- en slagtechnieken",
        "Versterking van grip voor nabijgevecht technieken",
        "Verbetering van handcoördinatie en controle",
        "Ontwikkeling van vinger- en handspieren"
      ]
    },
    {
      title: "Ontwikkeling van muchimi kracht",
      subtitle: "Development of muchimi power",
      icon: Brain,
      color: "bg-green-500",
      items: [
        "Verhoogde weerstand in totale beweging",
        "Niet-explosieve bewegingen voor optimale ontwikkeling",
        "Integratie van lichaam en geest",
        "Ontwikkeling van kleverige kracht"
      ]
    },
    {
      title: "Ontwikkeling van chinkuchi kakin kracht",
      subtitle: "Development of chinkuchi kakin power",
      icon: Target,
      color: "bg-orange-500",
      items: [
        "Vastknijpen van stok aan einde van bewegingen",
        "Concentratie van kracht in specifieke punten",
        "Ontwikkeling van explosieve kracht",
        "Verbetering van kime (focus)"
      ]
    },
    {
      title: "Ademhalingscoördinatie",
      subtitle: "Breathing coordination",
      icon: Shield,
      color: "bg-purple-500",
      items: [
        "Integratie van ademhaling met beweging",
        "Ontwikkeling van kokyu (ademhalingskracht)",
        "Verbetering van mentale focus",
        "Coördinatie van lichaam, adem en geest"
      ]
    }
  ];

  const benefits = [
    {
      category: "Fysieke Voordelen",
      icon: Weight,
      color: "text-blue-500",
      items: [
        "Versterking van pols- en handspieren",
        "Verbetering van schouder- en armkracht",
        "Ontwikkeling van core stabiliteit",
        "Toename van algemene lichaamssterkte"
      ]
    },
    {
      category: "Technische Voordelen",
      icon: Target,
      color: "text-green-500", 
      items: [
        "Effectievere grijptechnieken",
        "Verbeterde klemtechnieken",
        "Krachtigere pakkingen",
        "Betere controle bij vitale punten"
      ]
    },
    {
      category: "Mentale Voordelen",
      icon: Brain,
      color: "text-purple-500",
      items: [
        "Ontwikkeling van concentratie",
        "Verbetering van mentale discipline",
        "Toename van zelfvertrouwen",
        "Betere focus tijdens training"
      ]
    }
  ];

  const principles = [
    "Coördinatie van lichaam, adem en geest",
    "Techniek is belangrijker dan gewicht",
    "Beweeg langzaam en gecontroleerd",
    "Focus op correcte grip techniek",
    "Adem regelmatig en gecontroleerd",
    "Bouw geleidelijk op in intensiteit"
  ];

  const navigationLinks = [
    { 
      path: '/hojo-undo/chi-ishi/construction', 
      label: 'Constructie', 
      description: 'Leer hoe je een Chi Ishi maakt',
      icon: Info 
    },
    { 
      path: '/hojo-undo/chi-ishi/attention-points', 
      label: 'Aandachtspunten', 
      description: 'Veiligheids- en trainingstips',
      icon: Shield 
    },
    { 
      path: '/hojo-undo/chi-ishi/exercises', 
      label: 'Oefeningen', 
      description: 'Praktische trainingsroutines',
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title="Chi Ishi Functie"
      subtitle="Function"
      japaneseTitle="力石の機能"
      badgeText="Stenen hefboom gewicht"
      description="De chi ishi is een 'stenen hefboom gewicht'. Het wordt nog steeds gebruikt in China, o.a. in de provincie Fuzhou."
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote="De Chi Ishi heeft zijn oorsprong in China en wordt nog steeds gebruikt in de provincie Fuzhou. Het is een van de oudste Hojo Undo instrumenten en is essentieel voor traditionele karate training."
      safetyNotice="Deskundige begeleiding is essentieel voor Chi Ishi training. Begin altijd met lichte gewichten en focus op correcte techniek voordat je de intensiteit verhoogt."
      backPath="/hojo-undo"
    />
  );
};

export default ChiIshiFunction; 