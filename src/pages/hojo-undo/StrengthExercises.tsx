import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Dumbbell } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const StrengthExercises = () => {
  const { t } = useTranslation();

  const mainComponents = [
    {
      title: t('hojoUndo.strengthExercises.chiIshiTraining'),
      subtitle: "Stone Lever Weight",
      icon: Weight,
      color: "bg-blue-500",
      items: [
        "Versterking van onderarm- en handspieren",
        "Ontwikkeling van muchimi kracht",
        "Verbetering van polsstabiliteit",
        "Ontwikkeling van chinkuchi kakin kracht"
      ]
    },
    {
      title: t('hojoUndo.strengthExercises.nigiriGameTraining'),
      subtitle: "Gripping Jars",
      icon: Dumbbell,
      color: "bg-green-500",
      items: [
        "Versterking van vinger- en handkracht",
        "Ontwikkeling van grijpuithoudingsvermogen",
        "Verbetering van polsstabiliteit",
        "Ontwikkeling van voorarmkracht"
      ]
    },
    {
      title: t('hojoUndo.strengthExercises.kongokenTraining'),
      subtitle: "Iron Oval",
      icon: Target,
      color: "bg-orange-500",
      items: [
        "Versterking van schouder- en armspieren",
        "Ontwikkeling van core stabiliteit",
        "Verbetering van balans en coördinatie",
        "Ontwikkeling van algemene lichaamssterkte"
      ]
    },
    {
      title: t('hojoUndo.strengthExercises.ishiSashiTraining'),
      subtitle: "Stone Padlocks",
      icon: Shield,
      color: "bg-purple-500",
      items: [
        "Versterking van vinger- en handspieren",
        "Ontwikkeling van precisie en controle",
        "Verbetering van grijptechnieken",
        "Ontwikkeling van vitale punt training"
      ]
    }
  ];

  const benefits = [
    {
      category: "Fysieke Voordelen",
      icon: Weight,
      color: "text-blue-500",
      items: [
        "Versterking van spieren en spierketens",
        "Verbetering van kracht-uithoudingsvermogen",
        "Ontwikkeling van motorische vaardigheden",
        "Toename van algemene lichaamssterkte"
      ]
    },
    {
      category: "Technische Voordelen",
      icon: Target,
      color: "text-green-500", 
      items: [
        "Verbetering van kata uitvoering",
        "Krachtigere en stabielere basistechnieken",
        "Effectievere gevechtstechnieken",
        "Betere coördinatie en timing"
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
    "Bouw geleidelijk op in intensiteit",
    "Focus op correcte uitvoering",
    "Neem voldoende rust tussen sets",
    "Luister naar je lichaam"
  ];

  const navigationLinks = [
    { 
      path: '/hojo-undo/chi-ishi/function', 
      label: 'Chi Ishi', 
      description: 'Stenen hefboom gewicht training',
      icon: Weight 
    },
    { 
      path: '/hojo-undo/nigiri-game/function', 
      label: 'Nigiri Game', 
      description: 'Grijpvazen training',
      icon: Dumbbell 
    },
    { 
      path: '/hojo-undo/hardening-exercises', 
      label: 'Hardingsoefeningen', 
      description: 'Hardening en conditioning',
      icon: Shield 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('hojoUndo.strengthExercises.title')}
      subtitle={t('hojoUndo.strengthExercises.subtitle')}
      japaneseTitle="力運動"
      badgeText={t('hojoUndo.strengthExercises.subtitle')}
      description={t('hojoUndo.strengthExercises.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('hojoUndo.strengthExercises.historicalNote')}
      safetyNotice={t('hojoUndo.strengthExercises.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default StrengthExercises; 