import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Eye } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';

const NigiriGameAttentionPoints = () => {
  const mainComponents = [
    {
      title: "Veiligheidsmaatregelen",
      subtitle: "Safety Measures",
      icon: Shield,
      color: "bg-red-500",
      items: [
        "Controleer de vazen voor elke training",
        "Begin altijd met lichte gewichten",
        "Stop bij pijn of ongemak",
        "Gebruik alleen op vaste ondergrond"
      ]
    },
    {
      title: "Technische Aandachtspunten",
      subtitle: "Technical Focus Points",
      icon: Target,
      color: "bg-blue-500",
      items: [
        "Houd de rug recht tijdens oefeningen",
        "Adem regelmatig en gecontroleerd",
        "Focus op correcte grip techniek",
        "Beweeg langzaam en gecontroleerd"
      ]
    },
    {
      title: "Training Progressie",
      subtitle: "Training Progression",
      icon: Weight,
      color: "bg-green-500",
      items: [
        "Bouw geleidelijk op in gewicht",
        "Verhoog eerst het aantal herhalingen",
        "Pas daarna het gewicht aan",
        "Neem voldoende rust tussen sessies"
      ]
    },
    {
      title: "Mentale Focus",
      subtitle: "Mental Focus",
      icon: Brain,
      color: "bg-purple-500",
      items: [
        "Concentreer op de beweging",
        "Visualiseer de techniek",
        "Blijf gefocust op ademhaling",
        "Vermijd afleidingen tijdens training"
      ]
    }
  ];

  const benefits = [
    {
      category: "Veiligheidsvoordelen",
      icon: Shield,
      color: "text-red-500",
      items: [
        "Voorkomt blessures door correcte techniek",
        "Bouwt geleidelijk kracht op",
        "Beschermt gewrichten en spieren",
        "Creëert bewustzijn van lichaamssignalen"
      ]
    },
    {
      category: "Technische Voordelen",
      icon: Target,
      color: "text-blue-500", 
      items: [
        "Verbeterde lichaamshouding",
        "Betere ademhalingscontrole",
        "Preciezere bewegingen",
        "Effectievere krachtoverdracht"
      ]
    },
    {
      category: "Progressie Voordelen",
      icon: Weight,
      color: "text-green-500",
      items: [
        "Gestructureerde opbouw van kracht",
        "Duurzame trainingsontwikkeling",
        "Voorkomt overtraining",
        "Maximale trainingseffecten"
      ]
    }
  ];

  const principles = [
    "Veiligheid staat altijd voorop",
    "Techniek is belangrijker dan gewicht",
    "Luister naar je lichaam",
    "Bouw geleidelijk op",
    "Blijf gefocust tijdens training",
    "Neem voldoende rust en herstel"
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
      path: '/hojo-undo/nigiri-game/exercises', 
      label: 'Oefeningen', 
      description: 'Praktische trainingsroutines',
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title="Nigiri Game Aandachtspunten"
      subtitle="Attention Points"
      japaneseTitle="握り甕の注意点"
      badgeText="Veiligheid en Techniek"
      description="Belangrijke aandachtspunten voor veilige en effectieve Nigiri Game training"
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote="Traditioneel werden deze aandachtspunten mondeling doorgegeven van meester op leerling. Ze zijn gebaseerd op eeuwenlange ervaring en zijn essentieel voor veilige training."
      safetyNotice="Deskundige begeleiding is essentieel voor Nigiri Game training. Begin altijd onder toezicht van een ervaren instructeur en stop onmiddellijk bij pijn of ongemak."
      backPath="/hojo-undo"
    />
  );
};

export default NigiriGameAttentionPoints; 