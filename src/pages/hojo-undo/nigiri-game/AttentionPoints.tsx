import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Eye } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const NigiriGameAttentionPoints = () => {
  const { t } = useTranslation('hojoUndo');

  const mainComponents = [
    {
      title: t('nigiriGame.attentionPoints.mainComponents.safetyMeasures.title'),
      subtitle: t('nigiriGame.attentionPoints.mainComponents.safetyMeasures.subtitle'),
      icon: Shield,
      color: "bg-red-500",
      items: t('nigiriGame.attentionPoints.mainComponents.safetyMeasures.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.attentionPoints.mainComponents.technicalFocusPoints.title'),
      subtitle: t('nigiriGame.attentionPoints.mainComponents.technicalFocusPoints.subtitle'),
      icon: Target,
      color: "bg-blue-500",
      items: t('nigiriGame.attentionPoints.mainComponents.technicalFocusPoints.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.attentionPoints.mainComponents.trainingProgression.title'),
      subtitle: t('nigiriGame.attentionPoints.mainComponents.trainingProgression.subtitle'),
      icon: Weight,
      color: "bg-green-500",
      items: t('nigiriGame.attentionPoints.mainComponents.trainingProgression.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.attentionPoints.mainComponents.mentalFocus.title'),
      subtitle: t('nigiriGame.attentionPoints.mainComponents.mentalFocus.subtitle'),
      icon: Brain,
      color: "bg-purple-500",
      items: t('nigiriGame.attentionPoints.mainComponents.mentalFocus.items', { returnObjects: true }) as string[]
    }
  ];

  const benefits = [
    {
      category: t('benefitCategories.safetyBenefits'),
      icon: Shield,
      color: "text-red-500",
      items: t('benefits.attentionPoints.safety', { returnObjects: true }) as string[]
    },
    {
      category: t('benefitCategories.technicalBenefits'),
      icon: Target,
      color: "text-blue-500", 
      items: t('benefits.attentionPoints.technical', { returnObjects: true }) as string[]
    },
    {
      category: t('benefitCategories.progressionBenefits'),
      icon: Weight,
      color: "text-green-500",
      items: t('benefits.attentionPoints.progression', { returnObjects: true }) as string[]
    }
  ];

  const principles = t('nigiriGame.attentionPoints.principles', { returnObjects: true }) as string[];

  const navigationLinks = [
    { 
      path: '/hojo-undo/nigiri-game/function', 
      label: t('nigiriGame.attentionPoints.navigationLinks.function.label'), 
      description: t('nigiriGame.attentionPoints.navigationLinks.function.description'),
      icon: Target 
    },
    { 
      path: '/hojo-undo/nigiri-game/construction', 
      label: t('nigiriGame.attentionPoints.navigationLinks.construction.label'), 
      description: t('nigiriGame.attentionPoints.navigationLinks.construction.description'),
      icon: Info 
    },
    { 
      path: '/hojo-undo/nigiri-game/exercises', 
      label: t('nigiriGame.attentionPoints.navigationLinks.exercises.label'), 
      description: t('nigiriGame.attentionPoints.navigationLinks.exercises.description'),
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('nigiriGame.attentionPoints.title')}
      subtitle={t('nigiriGame.attentionPoints.subtitle')}
      japaneseTitle={t('nigiriGame.attentionPoints.japaneseTitle')}
      badgeText={t('nigiriGame.attentionPoints.badgeText')}
      description={t('nigiriGame.attentionPoints.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('nigiriGame.attentionPoints.historicalNote')}
      safetyNotice={t('nigiriGame.attentionPoints.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default NigiriGameAttentionPoints; 