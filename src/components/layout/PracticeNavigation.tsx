import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';

interface PracticeNavigationProps {
  currentPath: string;
}

const PracticeNavigation: React.FC<PracticeNavigationProps> = ({ currentPath }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const basePath = '/' + currentPath.split('/')[1];
  
  if (basePath !== '/practice' && 
      basePath !== '/techniques' && 
      basePath !== '/kata' && 
      basePath !== '/bunkai' &&
      basePath !== '/hojo-undo') {
    return null;
  }
  
  return (
    <Tabs 
      defaultValue={
        basePath === '/practice' ? 'practice' : 
        basePath === '/techniques' ? 'techniques' : 
        basePath === '/kata' ? 'kata' : 
        basePath === '/bunkai' ? 'bunkai' :
        'hojo-undo'
      } 
      className="w-full"
      onValueChange={(value) => {
        navigate(value);
      }}
    >
      <TabsList className="grid grid-cols-4 h-12 bg-muted">
        <TabsTrigger value="/techniques" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('practice.nav.techniques')}</span>
        </TabsTrigger>
        <TabsTrigger value="/kata" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('practice.nav.kata')}</span>
        </TabsTrigger>
        <TabsTrigger value="/bunkai" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('practice.nav.bunkai')}</span>
        </TabsTrigger>
        <TabsTrigger value="/hojo-undo" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">{t('practice.nav.hojoUndo')}</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PracticeNavigation;
