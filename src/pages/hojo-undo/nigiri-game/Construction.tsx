import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Wrench } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const NigiriGameConstruction = () => {
  const { t } = useTranslation('hojoUndo');

  const mainComponents = [
    {
      title: t('nigiriGame.construction.mainComponents.materials.title'),
      subtitle: t('nigiriGame.construction.mainComponents.materials.subtitle'),
      icon: Weight,
      color: "bg-blue-500",
      items: t('nigiriGame.construction.mainComponents.materials.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.construction.mainComponents.dimensions.title'),
      subtitle: t('nigiriGame.construction.mainComponents.dimensions.subtitle'),
      icon: Target,
      color: "bg-green-500",
      items: t('nigiriGame.construction.mainComponents.dimensions.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.construction.mainComponents.constructionSteps.title'),
      subtitle: t('nigiriGame.construction.mainComponents.constructionSteps.subtitle'),
      icon: Wrench,
      color: "bg-orange-500",
      items: t('nigiriGame.construction.mainComponents.constructionSteps.items', { returnObjects: true }) as string[]
    },
    {
      title: t('nigiriGame.construction.mainComponents.qualityControl.title'),
      subtitle: t('nigiriGame.construction.mainComponents.qualityControl.subtitle'),
      icon: Shield,
      color: "bg-purple-500",
      items: t('nigiriGame.construction.mainComponents.qualityControl.items', { returnObjects: true }) as string[]
    }
  ];

  const benefits = [
    {
      category: t('benefitCategories.practicalBenefits'),
      icon: Weight,
      color: "text-blue-500",
      items: t('benefits.construction.practical', { returnObjects: true }) as string[]
    },
    {
      category: t('benefitCategories.trainingBenefits'),
      icon: Target,
      color: "text-green-500", 
      items: t('benefits.construction.training', { returnObjects: true }) as string[]
    },
    {
      category: t('benefitCategories.qualityBenefits'),
      icon: Brain,
      color: "text-purple-500",
      items: t('benefits.construction.quality', { returnObjects: true }) as string[]
    }
  ];

  const principles = t('nigiriGame.construction.principles', { returnObjects: true }) as string[];

  const navigationLinks = [
    { 
      path: '/hojo-undo/nigiri-game/function', 
      label: t('nigiriGame.construction.navigationLinks.function.label'), 
      description: t('nigiriGame.construction.navigationLinks.function.description'),
      icon: Target 
    },
    { 
      path: '/hojo-undo/nigiri-game/attention-points', 
      label: t('nigiriGame.construction.navigationLinks.attentionPoints.label'), 
      description: t('nigiriGame.construction.navigationLinks.attentionPoints.description'),
      icon: Shield 
    },
    { 
      path: '/hojo-undo/nigiri-game/exercises', 
      label: t('nigiriGame.construction.navigationLinks.exercises.label'), 
      description: t('nigiriGame.construction.navigationLinks.exercises.description'),
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('nigiriGame.construction.title')}
      subtitle={t('nigiriGame.construction.subtitle')}
      japaneseTitle={t('nigiriGame.construction.japaneseTitle')}
      badgeText={t('nigiriGame.construction.badgeText')}
      description={t('nigiriGame.construction.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('nigiriGame.construction.historicalNote')}
      safetyNotice={t('nigiriGame.construction.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default NigiriGameConstruction; 