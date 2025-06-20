import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Wrench } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';

const NigiriGameConstruction = () => {
  const mainComponents = [
    {
      title: "Materialen",
      subtitle: "Materials",
      icon: Weight,
      color: "bg-blue-500",
      items: [
        "Klei of keramiek voor de vazen",
        "Zand of grind voor gewicht",
        "Gereedschap voor bewerking",
        "Oven voor het bakken"
      ]
    },
    {
      title: "Afmetingen",
      subtitle: "Dimensions",
      icon: Target,
      color: "bg-green-500",
      items: [
        "Diameter: 8-12 cm",
        "Hoogte: 10-15 cm",
        "Wanddikte: 1-2 cm",
        "Gewicht: 2-8 kg (afhankelijk van niveau)"
      ]
    },
    {
      title: "Constructie Stappen",
      subtitle: "Construction Steps",
      icon: Wrench,
      color: "bg-orange-500",
      items: [
        "Vormen van de vazen",
        "Drogen van de klei",
        "Bakken in de oven",
        "Vullen met gewicht"
      ]
    },
    {
      title: "Kwaliteitscontrole",
      subtitle: "Quality Control",
      icon: Shield,
      color: "bg-purple-500",
      items: [
        "Controle op scheuren",
        "Testen van stevigheid",
        "Controle van gewicht",
        "Veiligheidstest"
      ]
    }
  ];

  const benefits = [
    {
      category: "Praktische Voordelen",
      icon: Weight,
      color: "text-blue-500",
      items: [
        "Aanpasbaar gewicht",
        "Duurzame constructie",
        "Eenvoudig te onderhouden",
        "Kosteneffectief"
      ]
    },
    {
      category: "Training Voordelen",
      icon: Target,
      color: "text-green-500", 
      items: [
        "Gewicht kan aangepast worden",
        "Verschillende groottes mogelijk",
        "Veilige trainingstool",
        "Mobiel en opbergbaar"
      ]
    },
    {
      category: "Kwaliteitsvoordelen",
      icon: Brain,
      color: "text-purple-500",
      items: [
        "Handgemaakte kwaliteit",
        "Traditionele methoden",
        "Betrouwbare materialen",
        "Getest ontwerp"
      ]
    }
  ];

  const principles = [
    "Gebruik alleen hoogwaardige materialen",
    "Zorg voor stevige constructie",
    "Test de vazen grondig",
    "Controleer regelmatig op schade",
    "Pas het gewicht aan aan niveau",
    "Bewaar op een droge, veilige plek"
  ];

  const navigationLinks = [
    { 
      path: '/hojo-undo/nigiri-game/function', 
      label: 'Functie', 
      description: 'Leer over de functies van de Nigiri Game',
      icon: Target 
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
      title="Nigiri Game Constructie"
      subtitle="Construction"
      japaneseTitle="握り甕の構造"
      badgeText="Bouw je eigen Nigiri Game"
      description="Leer hoe je traditionele Nigiri Game vazen kunt maken met de juiste materialen en technieken"
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote="Traditioneel werden Nigiri Game vazen gemaakt van klei en gevuld met zand of grind. Moderne versies gebruiken vaak keramiek of beton voor duurzaamheid."
      safetyNotice="Zorg ervoor dat de vazen stevig zijn voordat je ze gebruikt. Controleer regelmatig op scheuren en vervang beschadigde vazen onmiddellijk."
      backPath="/hojo-undo"
    />
  );
};

export default NigiriGameConstruction; 