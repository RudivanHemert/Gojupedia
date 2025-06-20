import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, HandMetal } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';

const NigiriGameFunction = () => {
  const mainComponents = [
    {
      title: "Vinger- en Handkracht",
      subtitle: "Finger and Hand Strength",
      icon: HandMetal,
      color: "bg-blue-500",
      items: [
        "Versterking van vingerspieren",
        "Ontwikkeling van grijpkracht",
        "Verbetering van handcoördinatie",
        "Toename van vingeruithoudingsvermogen"
      ]
    },
    {
      title: "Pols Stabiliteit",
      subtitle: "Wrist Stability",
      icon: Target,
      color: "bg-green-500",
      items: [
        "Versterking van polsspieren",
        "Verbetering van polsstabiliteit",
        "Ontwikkeling van polscontrole",
        "Toename van polsuithoudingsvermogen"
      ]
    },
    {
      title: "Voorarm Kracht",
      subtitle: "Forearm Strength",
      icon: Weight,
      color: "bg-orange-500",
      items: [
        "Versterking van voorarmspieren",
        "Ontwikkeling van grip uithoudingsvermogen",
        "Verbetering van voorarm stabiliteit",
        "Toename van algemene armkracht"
      ]
    },
    {
      title: "Mentale Discipline",
      subtitle: "Mental Discipline",
      icon: Brain,
      color: "bg-purple-500",
      items: [
        "Ontwikkeling van concentratie",
        "Verbetering van geduld",
        "Toename van mentale focus",
        "Betere controle over bewegingen"
      ]
    }
  ];

  const benefits = [
    {
      category: "Fysieke Voordelen",
      icon: Weight,
      color: "text-blue-500",
      items: [
        "Versterking van vinger- en handspieren",
        "Verbetering van polsstabiliteit",
        "Ontwikkeling van voorarmkracht",
        "Toename van grijpuithoudingsvermogen"
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
    "Begin met lichte gewichten en bouw geleidelijk op",
    "Focus op correcte grip techniek",
    "Adem regelmatig en gecontroleerd",
    "Neem voldoende rust tussen sets",
    "Luister naar je lichaam",
    "Combineer met andere Hojo Undo oefeningen"
  ];

  const navigationLinks = [
    { 
      path: '/hojo-undo/nigiri-game/construction', 
      label: 'Constructie', 
      description: 'Leer hoe je Nigiri Game vazen maakt',
      icon: Info 
    },
    { 
      path: '/hojo-undo/nigiri-game/attention-points', 
      label: 'Aandachtspunten', 
      description: 'Veiligheids- en trainingstips',
      icon: Shield 
    },
    { 
      path: '/hojo-undo/nigiri-game/exercises', 
      label: 'Oefeningen', 
      description: 'Praktische trainingsroutines',
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title="Nigiri Game Functie"
      subtitle="Function"
      japaneseTitle="握り甕の機能"
      badgeText="Grijpkracht Training"
      description="Ontdek de functies en voordelen van de traditionele Nigiri Game in karate training"
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote="De Nigiri Game is van Chinese origine en werd traditioneel gebruikt voor het ontwikkelen van grijpkracht. De vazen werden gevuld met zand of grind om het gewicht aan te passen."
      safetyNotice="Deskundige begeleiding is essentieel voor Nigiri Game training. Begin altijd met lichte gewichten en focus op correcte techniek voordat je het gewicht verhoogt."
      backPath="/hojo-undo"
    />
  );
};

export default NigiriGameFunction; 