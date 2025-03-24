
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PracticeNavigationProps {
  currentPath: string;
}

const PracticeNavigation: React.FC<PracticeNavigationProps> = ({ currentPath }) => {
  const navigate = useNavigate();
  const basePath = '/' + currentPath.split('/')[1];
  
  if (basePath !== '/practice' && 
      basePath !== '/techniques' && 
      basePath !== '/kata' && 
      basePath !== '/hojo-undo' && 
      basePath !== '/kumite') {
    return null;
  }
  
  return (
    <Tabs 
      defaultValue={
        basePath === '/practice' ? 'practice' : 
        basePath === '/techniques' ? 'techniques' : 
        basePath === '/kata' ? 'kata' : 
        basePath === '/hojo-undo' ? 'hojo-undo' : 
        'kumite'
      } 
      className="w-full"
      onValueChange={(value) => {
        navigate(value);
      }}
    >
      <TabsList className="grid grid-cols-4 h-12 bg-stone-100">
        <TabsTrigger value="/techniques" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Techniques</span>
        </TabsTrigger>
        <TabsTrigger value="/kata" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Kata</span>
        </TabsTrigger>
        <TabsTrigger value="/hojo-undo" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Hojo Undo</span>
        </TabsTrigger>
        <TabsTrigger value="/kumite" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Kumite</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PracticeNavigation;
