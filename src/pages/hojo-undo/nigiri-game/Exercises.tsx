import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Dumbbell } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';

const NigiriGameExercises = () => {
  const mainComponents = [
    {
      title: "Basis Oefeningen",
      subtitle: "Basic Exercises",
      icon: Weight,
      color: "bg-blue-500",
      items: [
        "Nigiri Game Kamae - Basis houding",
        "Nigiri Game Uke - Blokken met vazen",
        "Nigiri Game Tsuki - Stoten met vazen",
        "Nigiri Game Uchi - Slagen met vazen"
      ]
    },
    {
      title: "Gevorderde Oefeningen",
      subtitle: "Advanced Exercises",
      icon: Target,
      color: "bg-green-500",
      items: [
        "Nigiri Game Kata - Kata met vazen",
        "Nigiri Game Kumite - Partner oefeningen",
        "Nigiri Game Hojo Undo - Ondersteunende training",
        "Nigiri Game Kihon - Basis technieken"
      ]
    },
    {
      title: "Speciale Technieken",
      subtitle: "Special Techniques",
      icon: Zap,
      color: "bg-orange-500",
      items: [
        "Grip training - Grijpkracht ontwikkeling",
        "Finger training - Vingerkracht",
        "Wrist training - Polsstabiliteit",
        "Forearm training - Voorarmkracht"
      ]
    },
    {
      title: "Training Routines",
      subtitle: "Training Routines",
      icon: Clock,
      color: "bg-purple-500",
      items: [
        "Dagelijkse routine voor beginners",
        "Weekelijkse routine voor gevorderden",
        "Maandelijkse progressie schema",
        "Seizoensgebonden training aanpassingen"
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
    "Begin altijd met lichte gewichten",
    "Focus op correcte grip techniek",
    "Adem regelmatig en gecontroleerd",
    "Bouw geleidelijk op in intensiteit",
    "Neem voldoende rust tussen sets",
    "Luister naar je lichaam"
  ];

  const navigationLinks = [
    { 
      path: '/hojo-undo/nigiri-game/function', 
      label: 'Functie', 
      description: 'Leer over de functies van de Nigiri Game',
      icon: Target 
    },
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
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title="Nigiri Game Oefeningen"
      subtitle="Exercises"
      japaneseTitle="握り甕の練習"
      badgeText="Praktische Training"
      description="Leer effectieve oefeningen met de Nigiri Game voor grijpkrachtontwikkeling en techniekverbetering"
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote="Deze oefeningen zijn eeuwenlang doorgegeven van meester op leerling. Ze zijn ontwikkeld om functionele grijpkracht te creëren die direct toepasbaar is in karate technieken."
      safetyNotice="Voer alle oefeningen uit onder deskundige begeleiding. Begin met lichte gewichten en focus op correcte techniek voordat je de intensiteit verhoogt."
      backPath="/hojo-undo"
    />
  );
};

export default NigiriGameExercises; 