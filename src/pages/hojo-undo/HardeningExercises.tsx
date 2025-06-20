import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Dumbbell } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const HardeningExercises = () => {
  const { t } = useTranslation();

  const mainComponents = [
    {
      title: t('hojoUndo.hardeningExercises.makiwaraTraining'),
      subtitle: "Striking Post",
      icon: Target,
      color: "bg-red-500",
      items: [
        "Verharding van vuisten en handen",
        "Ontwikkeling van correcte stoottechniek",
        "Verbetering van kime (focus)",
        "Ontwikkeling van explosieve kracht"
      ]
    },
    {
      title: t('hojoUndo.hardeningExercises.sunaBakoTraining'),
      subtitle: "Sand Box",
      icon: Weight,
      color: "bg-orange-500",
      items: [
        "Verharding van vingers en handen",
        "Ontwikkeling van precisie en controle",
        "Verbetering van vitale punt training",
        "Ontwikkeling van handcoördinatie"
      ]
    },
    {
      title: t('hojoUndo.hardeningExercises.jariBakoTraining'),
      subtitle: "Gravel Box",
      icon: Shield,
      color: "bg-yellow-500",
      items: [
        "Verharding van handen en vingers",
        "Ontwikkeling van pijnweerstand",
        "Verbetering van grijptechnieken",
        "Ontwikkeling van mentale discipline"
      ]
    },
    {
      title: t('hojoUndo.hardeningExercises.tanrenKumite'),
      subtitle: "Partner Hardening",
      icon: Users,
      color: "bg-purple-500",
      items: [
        "Verharding door partner training",
        "Ontwikkeling van realistische weerstand",
        "Verbetering van timing en afstand",
        "Ontwikkeling van gevechtsconditie"
      ]
    }
  ];

  const benefits = [
    {
      category: "Fysieke Voordelen",
      icon: Weight,
      color: "text-red-500",
      items: [
        "Verharding van handen en voeten",
        "Ontwikkeling van pijnweerstand",
        "Verbetering van botdichtheid",
        "Toename van algemene conditie"
      ]
    },
    {
      category: "Technische Voordelen",
      icon: Target,
      color: "text-orange-500", 
      items: [
        "Verbetering van stoot- en slagtechnieken",
        "Ontwikkeling van correcte impact",
        "Effectievere vitale punt training",
        "Betere controle en precisie"
      ]
    },
    {
      category: "Mentale Voordelen",
      icon: Brain,
      color: "text-purple-500",
      items: [
        "Ontwikkeling van mentale discipline",
        "Verbetering van pijnweerstand",
        "Toename van zelfvertrouwen",
        "Betere focus onder druk"
      ]
    }
  ];

  const principles = [
    "Bouw geleidelijk op in intensiteit",
    "Techniek is belangrijker dan kracht",
    "Luister naar je lichaam",
    "Neem voldoende rust tussen sessies",
    "Focus op correcte uitvoering",
    "Deskundige begeleiding is essentieel"
  ];

  const navigationLinks = [
    { 
      path: '/hojo-undo/strength-exercises', 
      label: 'Krachtoefeningen', 
      description: 'Traditionele krachttraining',
      icon: Dumbbell 
    },
    { 
      path: '/hojo-undo/general-intro', 
      label: 'Algemene Introductie', 
      description: 'Overzicht van Hojo Undo',
      icon: Info 
    },
    { 
      path: '/hojo-undo', 
      label: 'Hojo Undo Overzicht', 
      description: 'Terug naar hoofdpagina',
      icon: ArrowRight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('hojoUndo.hardeningExercises.title')}
      subtitle={t('hojoUndo.hardeningExercises.subtitle')}
      japaneseTitle="鍛錬運動"
      badgeText={t('hojoUndo.hardeningExercises.subtitle')}
      description={t('hojoUndo.hardeningExercises.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('hojoUndo.hardeningExercises.historicalNote')}
      safetyNotice={t('hojoUndo.hardeningExercises.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default HardeningExercises; 