import React from 'react';
import { Target, Brain, Shield, Clock, Users, Info, ArrowRight, Weight, Zap, Dumbbell } from 'lucide-react';
import HojoUndoSectionTemplate from '@/components/hojo-undo/HojoUndoSectionTemplate';
import { useTranslation } from 'react-i18next';

const ChiIshiFunction = () => {
  const { t } = useTranslation('hojoUndo');

  const mainComponents = [
    {
      title: t('chiIshi.function.mainComponents.forearmStrength.title'),
      subtitle: t('chiIshi.function.mainComponents.forearmStrength.subtitle'),
      icon: Dumbbell,
      color: "bg-blue-500",
      items: t('chiIshi.function.mainComponents.forearmStrength.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.function.mainComponents.muchimiPower.title'),
      subtitle: t('chiIshi.function.mainComponents.muchimiPower.subtitle'),
      icon: Brain,
      color: "bg-green-500",
      items: t('chiIshi.function.mainComponents.muchimiPower.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.function.mainComponents.chinkuchiPower.title'),
      subtitle: t('chiIshi.function.mainComponents.chinkuchiPower.subtitle'),
      icon: Target,
      color: "bg-orange-500",
      items: t('chiIshi.function.mainComponents.chinkuchiPower.items', { returnObjects: true }) as string[]
    },
    {
      title: t('chiIshi.function.mainComponents.breathingCoordination.title'),
      subtitle: t('chiIshi.function.mainComponents.breathingCoordination.subtitle'),
      icon: Shield,
      color: "bg-purple-500",
      items: t('chiIshi.function.mainComponents.breathingCoordination.items', { returnObjects: true }) as string[]
    }
  ];

  const benefits = [
    {
      category: t('benefits.physicalBenefits'),
      icon: Weight,
      color: "text-blue-500",
      items: t('benefits.chiIshi.physical', { returnObjects: true }) as string[]
    },
    {
      category: t('benefits.technicalBenefits'),
      icon: Target,
      color: "text-green-500", 
      items: t('benefits.chiIshi.technical', { returnObjects: true }) as string[]
    },
    {
      category: t('benefits.mentalBenefits'),
      icon: Brain,
      color: "text-purple-500",
      items: t('benefits.chiIshi.mental', { returnObjects: true }) as string[]
    }
  ];

  const principles = t('chiIshi.function.principles', { returnObjects: true }) as string[];

  const navigationLinks = [
    { 
      path: '/hojo-undo/chi-ishi/construction', 
      label: t('chiIshi.function.navigationLinks.construction.label'), 
      description: t('chiIshi.function.navigationLinks.construction.description'),
      icon: Info 
    },
    { 
      path: '/hojo-undo/chi-ishi/attention-points', 
      label: t('chiIshi.function.navigationLinks.attentionPoints.label'), 
      description: t('chiIshi.function.navigationLinks.attentionPoints.description'),
      icon: Shield 
    },
    { 
      path: '/hojo-undo/chi-ishi/exercises', 
      label: t('chiIshi.function.navigationLinks.exercises.label'), 
      description: t('chiIshi.function.navigationLinks.exercises.description'),
      icon: Weight 
    }
  ];

  return (
    <HojoUndoSectionTemplate
      title={t('chiIshi.function.title')}
      subtitle={t('chiIshi.function.subtitle')}
      japaneseTitle={t('chiIshi.function.japaneseTitle')}
      badgeText={t('chiIshi.function.badgeText')}
      description={t('chiIshi.function.description')}
      mainComponents={mainComponents}
      benefits={benefits}
      principles={principles}
      navigationLinks={navigationLinks}
      historicalNote={t('chiIshi.function.historicalNote')}
      safetyNotice={t('chiIshi.function.safetyNotice')}
      backPath="/hojo-undo"
    />
  );
};

export default ChiIshiFunction; 