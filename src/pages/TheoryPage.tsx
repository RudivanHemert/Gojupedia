import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Book, Scroll, Target, ChevronDown } from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { TheorySectionList } from '@/components/theory/TheorySection';
import { useTranslation } from 'react-i18next';

const TheoryPage = () => {
  const { t } = useTranslation();
  const sections = [
    {
      id: 'terminology',
      name: t('theory.terminology'),
      description: t('theory.terminologyDesc'),
      icon: <Book className="h-5 w-5 text-karate" />,
      path: '/terminology',
    },
    {
      id: 'history',
      name: t('theory.history'),
      description: t('theory.historyDesc'),
      icon: <Scroll className="h-5 w-5 text-karate" />,
      path: '/history',
    },
    {
      id: 'philosophy',
      name: t('theory.philosophy', 'Philosophy'),
      description: t('theory.philosophyDesc', 'Core principles and values of Goju Ryu'),
      icon: <Book className="h-5 w-5 text-karate" />,
      path: '/philosophy',
    },
    {
      id: 'kata',
      name: t('theory.kata'),
      description: t('theory.kataDesc'),
      icon: <ChevronDown className="h-5 w-5 text-karate" />,
      path: '/theory/kata',
    },
    {
      id: 'vital-points',
      name: t('theory.vitalPoints'),
      description: t('theory.vitalPointsDesc'),
      icon: <Target className="h-5 w-5 text-karate" />,
      path: '/vital-points',
    }
  ];

  return (
    <MobileLayout hideHeader={true}>
      <TheoryHeader 
        title={t('theory.title')}
        description={t('theory.description')}
        imageUrl="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2041&auto=format&fit=crop"
      />

      <div className="p-4">
        <TheorySectionList sections={sections} />
      </div>
    </MobileLayout>
  );
};

export default TheoryPage;
