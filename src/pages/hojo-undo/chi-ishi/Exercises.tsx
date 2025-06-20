import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Dumbbell } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const ChiIshiExercises = () => {
  const { t } = useTranslation('hojoUndo');

  const mainComponents = [
    {
      title: t('chiIshi.exercises.mainComponents.basicExercises.title'),
      subtitle: t('chiIshi.exercises.mainComponents.basicExercises.subtitle'),
      icon: Weight,
      color: "bg-blue-500",
      items: t('chiIshi.exercises.mainComponents.basicExercises.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.exercises.mainComponents.advancedExercises.title'),
      subtitle: t('chiIshi.exercises.mainComponents.advancedExercises.subtitle'),
      icon: Target,
      color: "bg-green-500",
      items: t('chiIshi.exercises.mainComponents.advancedExercises.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.exercises.mainComponents.specialTechniques.title'),
      subtitle: t('chiIshi.exercises.mainComponents.specialTechniques.subtitle'),
      icon: Zap,
      color: "bg-orange-500",
      items: t('chiIshi.exercises.mainComponents.specialTechniques.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.exercises.mainComponents.trainingRoutines.title'),
      subtitle: t('chiIshi.exercises.mainComponents.trainingRoutines.subtitle'),
      icon: Clock,
      color: "bg-purple-500",
      items: t('chiIshi.exercises.mainComponents.trainingRoutines.items', { returnObjects: true }) as string[]
    }
  ];

  const benefits = [
    {
      category: "Fysieke Voordelen",
      icon: Weight,
      color: "text-blue-500",
      items: t('benefits.chiIshi.physical', { returnObjects: true }) as string[]
    },
    {
      category: "Technische Voordelen",
      icon: Target,
      color: "text-green-500", 
      items: t('benefits.chiIshi.technical', { returnObjects: true }) as string[]
    },
    {
      category: "Mentale Voordelen",
      icon: Brain,
      color: "text-purple-500",
      items: t('benefits.chiIshi.mental', { returnObjects: true }) as string[]
    }
  ];

  const principles = t('chiIshi.exercises.principles', { returnObjects: true }) as string[];

  const navigationLinks = [
    { 
      path: '/hojo-undo/chi-ishi/function', 
      label: t('chiIshi.exercises.navigationLinks.function.label'), 
      description: t('chiIshi.exercises.navigationLinks.function.description'),
      icon: Target 
    },
    { 
      path: '/hojo-undo/chi-ishi/construction', 
      label: t('chiIshi.exercises.navigationLinks.construction.label'), 
      description: t('chiIshi.exercises.navigationLinks.construction.description'),
      icon: Info 
    },
    { 
      path: '/hojo-undo/chi-ishi/attention-points', 
      label: t('chiIshi.exercises.navigationLinks.attentionPoints.label'), 
      description: t('chiIshi.exercises.navigationLinks.attentionPoints.description'),
      icon: Shield 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('chiIshi.exercises.title')}
      subtitle={t('chiIshi.exercises.subtitle')}
      japaneseTitle={t('chiIshi.exercises.japaneseTitle')}
      badgeText={t('chiIshi.exercises.badgeText')}
      description={t('chiIshi.exercises.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('chiIshi.exercises.historicalNote')}
      safetyNotice={t('chiIshi.exercises.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default ChiIshiExercises; 
