import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Dumbbell } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const NigiriGameExercises = () => {
  const { t } = useTranslation('hojoUndo');

  const mainComponents = [
    {
      title: t('nigiriGame.exercises.mainComponents.basicExercises.title'),
      subtitle: t('nigiriGame.exercises.mainComponents.basicExercises.subtitle'),
      icon: Weight,
      color: "bg-blue-500",
      items: t('nigiriGame.exercises.mainComponents.basicExercises.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.exercises.mainComponents.advancedExercises.title'),
      subtitle: t('nigiriGame.exercises.mainComponents.advancedExercises.subtitle'),
      icon: Target,
      color: "bg-green-500",
      items: t('nigiriGame.exercises.mainComponents.advancedExercises.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.exercises.mainComponents.specialTechniques.title'),
      subtitle: t('nigiriGame.exercises.mainComponents.specialTechniques.subtitle'),
      icon: Zap,
      color: "bg-orange-500",
      items: t('nigiriGame.exercises.mainComponents.specialTechniques.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.exercises.mainComponents.trainingRoutines.title'),
      subtitle: t('nigiriGame.exercises.mainComponents.trainingRoutines.subtitle'),
      icon: Clock,
      color: "bg-purple-500",
      items: t('nigiriGame.exercises.mainComponents.trainingRoutines.items', { returnObjects: true }) as string[]
    }
  ];

  const benefits = [
    {
      category: "Fysieke Voordelen",
      icon: Weight,
      color: "text-blue-500",
      items: t('benefits.nigiriGame.physical', { returnObjects: true }) as string[]
    },
    {
      category: "Technische Voordelen",
      icon: Target,
      color: "text-green-500", 
      items: t('benefits.nigiriGame.technical', { returnObjects: true }) as string[]
    },
    {
      category: "Mentale Voordelen",
      icon: Brain,
      color: "text-purple-500",
      items: t('benefits.nigiriGame.mental', { returnObjects: true }) as string[]
    }
  ];

  const principles = t('nigiriGame.exercises.principles', { returnObjects: true }) as string[];

  const navigationLinks = [
    { 
      path: '/hojo-undo/nigiri-game/function', 
      label: t('nigiriGame.exercises.navigationLinks.function.label'), 
      description: t('nigiriGame.exercises.navigationLinks.function.description'),
      icon: Target 
    },
    { 
      path: '/hojo-undo/nigiri-game/construction', 
      label: t('nigiriGame.exercises.navigationLinks.construction.label'), 
      description: t('nigiriGame.exercises.navigationLinks.construction.description'),
      icon: Info 
    },
    { 
      path: '/hojo-undo/nigiri-game/attention-points', 
      label: t('nigiriGame.exercises.navigationLinks.attentionPoints.label'), 
      description: t('nigiriGame.exercises.navigationLinks.attentionPoints.description'),
      icon: Shield 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('nigiriGame.exercises.title')}
      subtitle={t('nigiriGame.exercises.subtitle')}
      japaneseTitle={t('nigiriGame.exercises.japaneseTitle')}
      badgeText={t('nigiriGame.exercises.badgeText')}
      description={t('nigiriGame.exercises.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('nigiriGame.exercises.historicalNote')}
      safetyNotice={t('nigiriGame.exercises.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default NigiriGameExercises; 