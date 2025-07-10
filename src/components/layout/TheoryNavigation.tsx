import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';

interface TheoryNavigationProps {
  currentPath: string;
}

const TheoryNavigation: React.FC<TheoryNavigationProps> = ({ currentPath }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const basePath = '/' + currentPath.split('/')[1];
  const isKataTheory = currentPath === '/theory/kata';
  
  if (basePath !== '/theory' && 
      basePath !== '/terminology' && 
      basePath !== '/history' && 
      basePath !== '/philosophy' && 
      basePath !== '/vital-points' &&
      basePath !== '/gradings') {
    return null;
  }
  
  return (
    <Tabs 
      defaultValue={
        isKataTheory ? '/theory/kata' :
        basePath === '/theory' ? '/theory' : 
        basePath // Otherwise, use the current basePath if it's one of the theory sections
      } 
      className="w-full"
      onValueChange={(value) => {
        navigate(value);
      }}
    >
      <TabsList className="grid grid-cols-6 h-12 bg-muted"> 
        <TabsTrigger value="/terminology" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('theory.nav.terminology')}</span>
        </TabsTrigger>
        <TabsTrigger value="/history" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('theory.nav.history')}</span>
        </TabsTrigger>
        <TabsTrigger value="/philosophy" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('theory.nav.philosophy')}</span>
        </TabsTrigger>
        <TabsTrigger value="/theory/kata" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('theory.nav.kata')}</span>
        </TabsTrigger>
        <TabsTrigger value="/vital-points" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('theory.nav.vitalPoints')}</span>
        </TabsTrigger>
        <TabsTrigger value="/gradings" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('theory.nav.gradings')}</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TheoryNavigation;
