import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Wrench } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';

const ChiIshiConstruction = () => {
  const mainComponents = [
    {
      title: "Materialen",
      subtitle: "Materials",
      icon: Weight,
      color: "bg-blue-500",
      items: [
        "Houten stok (meestal eikenhout)",
        "Stenen gewicht (graniet of beton)",
        "Sterke touw of ketting",
        "Bevestigingsmaterialen"
      ]
    },
    {
      title: "Afmetingen",
      subtitle: "Dimensions",
      icon: Target,
      color: "bg-green-500",
      items: [
        "Stok: 60-90 cm lengte",
        "Diameter: 3-4 cm",
        "Gewicht: 5-15 kg (afhankelijk van niveau)",
        "Gewicht afstand: 15-20 cm van einde"
      ]
    },
    {
      title: "Constructie Stappen",
      subtitle: "Construction Steps",
      icon: Wrench,
      color: "bg-orange-500",
      items: [
        "Voorbereiding van materialen",
        "Bevestiging van gewicht aan stok",
        "Aanbrengen van handgrepen",
        "Kwaliteitscontrole en testen"
      ]
    },
    {
      title: "Veiligheidsmaatregelen",
      subtitle: "Safety Measures",
      icon: Shield,
      color: "bg-purple-500",
      items: [
        "Zorgvuldige bevestiging van gewicht",
        "Controle op losse onderdelen",
        "Testen van stabiliteit",
        "Regelmatige inspectie"
      ]
    }
  ];

  const benefits = [
    {
      category: "Praktische Voordelen",
      icon: Weight,
      color: "text-blue-500",
      items: [
        "Kosteneffectieve trainingstool",
        "Aanpasbaar aan persoonlijke behoeften",
        "Duurzaam en langdurig gebruik",
        "Eenvoudig te onderhouden"
      ]
    },
    {
      category: "Training Voordelen",
      icon: Target,
      color: "text-green-500", 
      items: [
        "Gewicht kan aangepast worden aan niveau",
        "Verschillende lengtes voor verschillende technieken",
        "Stabiele constructie voor veilige training",
        "Mobiel en opbergbaar"
      ]
    },
    {
      category: "Kwaliteitsvoordelen",
      icon: Brain,
      color: "text-purple-500",
      items: [
        "Handgemaakte kwaliteit",
        "Traditionele constructiemethoden",
        "Betrouwbare materialen",
        "Getest ontwerp"
      ]
    }
  ];

  const principles = [
    "Gebruik alleen hoogwaardige materialen",
    "Zorg voor stevige bevestiging van alle onderdelen",
    "Test de constructie grondig voordat gebruik",
    "Controleer regelmatig op slijtage en schade",
    "Pas het gewicht aan aan je trainingsniveau",
    "Bewaar de Chi Ishi op een droge, veilige plek"
  ];

  const navigationLinks = [
    { 
      path: '/hojo-undo/chi-ishi/function', 
      label: 'Functie', 
      description: 'Leer over de functies van de Chi Ishi',
      icon: Target 
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
      title="Chi Ishi Constructie"
      subtitle="Construction"
      japaneseTitle="力石の構造"
      badgeText="Bouw je eigen Chi Ishi"
      description="Leer hoe je een traditionele Chi Ishi kunt maken met de juiste materialen en technieken"
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote="Traditioneel werden Chi Ishi gemaakt van natuurlijke materialen die lokaal beschikbaar waren. Moderne versies gebruiken vaak beton of graniet voor het gewicht, maar de basisconstructie blijft hetzelfde."
      safetyNotice="Zorg ervoor dat alle onderdelen stevig bevestigd zijn voordat je de Chi Ishi gebruikt. Controleer regelmatig op slijtage en vervang beschadigde onderdelen onmiddellijk."
      backPath="/hojo-undo"
    />
  );
};

export default ChiIshiConstruction; 