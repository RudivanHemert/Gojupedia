import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Wrench } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const ChiIshiConstruction = () => {
  const { t } = useTranslation('hojoUndo');

  const mainComponents = [
    {
      title: t('chiIshi.construction.mainComponents.materials.title'),
      subtitle: t('chiIshi.construction.mainComponents.materials.subtitle'),
      icon: Weight,
      color: "bg-blue-500",
      items: t('chiIshi.construction.mainComponents.materials.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.construction.mainComponents.dimensions.title'),
      subtitle: t('chiIshi.construction.mainComponents.dimensions.subtitle'),
      icon: Target,
      color: "bg-green-500",
      items: t('chiIshi.construction.mainComponents.dimensions.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.construction.mainComponents.constructionSteps.title'),
      subtitle: t('chiIshi.construction.mainComponents.constructionSteps.subtitle'),
      icon: Wrench,
      color: "bg-orange-500",
      items: t('chiIshi.construction.mainComponents.constructionSteps.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.construction.mainComponents.safetyMeasures.title'),
      subtitle: t('chiIshi.construction.mainComponents.safetyMeasures.subtitle'),
      icon: Shield,
      color: "bg-purple-500",
      items: t('chiIshi.construction.mainComponents.safetyMeasures.items', { returnObjects: true }) as string[]
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

  const principles = t('chiIshi.construction.principles', { returnObjects: true }) as string[];

  const navigationLinks = [
    { 
      path: '/hojo-undo/chi-ishi/function', 
      label: t('chiIshi.construction.navigationLinks.function.label'), 
      description: t('chiIshi.construction.navigationLinks.function.description'),
      icon: Target 
    },
    { 
      path: '/hojo-undo/chi-ishi/attention-points', 
      label: t('chiIshi.construction.navigationLinks.attentionPoints.label'), 
      description: t('chiIshi.construction.navigationLinks.attentionPoints.description'),
      icon: Shield 
    },
    { 
      path: '/hojo-undo/chi-ishi/exercises', 
      label: t('chiIshi.construction.navigationLinks.exercises.label'), 
      description: t('chiIshi.construction.navigationLinks.exercises.description'),
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('chiIshi.construction.title')}
      subtitle={t('chiIshi.construction.subtitle')}
      japaneseTitle={t('chiIshi.construction.japaneseTitle')}
      badgeText={t('chiIshi.construction.badgeText')}
      description={t('chiIshi.construction.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('chiIshi.construction.historicalNote')}
      safetyNotice={t('chiIshi.construction.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default ChiIshiConstruction; 