import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Eye } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const ChiIshiAttentionPoints = () => {
  const { t } = useTranslation('hojoUndo');

  const mainComponents = [
    {
      title: t('chiIshi.attentionPoints.mainComponents.safetyMeasures.title'),
      subtitle: t('chiIshi.attentionPoints.mainComponents.safetyMeasures.subtitle'),
      icon: Shield,
      color: "bg-red-500",
      items: t('chiIshi.attentionPoints.mainComponents.safetyMeasures.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.attentionPoints.mainComponents.technicalFocusPoints.title'),
      subtitle: t('chiIshi.attentionPoints.mainComponents.technicalFocusPoints.subtitle'),
      icon: Target,
      color: "bg-blue-500",
      items: t('chiIshi.attentionPoints.mainComponents.technicalFocusPoints.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.attentionPoints.mainComponents.trainingProgression.title'),
      subtitle: t('chiIshi.attentionPoints.mainComponents.trainingProgression.subtitle'),
      icon: Weight,
      color: "bg-green-500",
      items: t('chiIshi.attentionPoints.mainComponents.trainingProgression.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.attentionPoints.mainComponents.mentalFocus.title'),
      subtitle: t('chiIshi.attentionPoints.mainComponents.mentalFocus.subtitle'),
      icon: Brain,
      color: "bg-purple-500",
      items: t('chiIshi.attentionPoints.mainComponents.mentalFocus.items', { returnObjects: true }) as string[]
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

  const principles = t('chiIshi.attentionPoints.principles', { returnObjects: true }) as string[];

  const navigationLinks = [
    { 
      path: '/hojo-undo/chi-ishi/function', 
      label: t('chiIshi.attentionPoints.navigationLinks.function.label'), 
      description: t('chiIshi.attentionPoints.navigationLinks.function.description'),
      icon: Target 
    },
    { 
      path: '/hojo-undo/chi-ishi/construction', 
      label: t('chiIshi.attentionPoints.navigationLinks.construction.label'), 
      description: t('chiIshi.attentionPoints.navigationLinks.construction.description'),
      icon: Info 
    },
    { 
      path: '/hojo-undo/chi-ishi/exercises', 
      label: t('chiIshi.attentionPoints.navigationLinks.exercises.label'), 
      description: t('chiIshi.attentionPoints.navigationLinks.exercises.description'),
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('chiIshi.attentionPoints.title')}
      subtitle={t('chiIshi.attentionPoints.subtitle')}
      japaneseTitle={t('chiIshi.attentionPoints.japaneseTitle')}
      badgeText={t('chiIshi.attentionPoints.badgeText')}
      description={t('chiIshi.attentionPoints.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('chiIshi.attentionPoints.historicalNote')}
      safetyNotice={t('chiIshi.attentionPoints.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default ChiIshiAttentionPoints; 
