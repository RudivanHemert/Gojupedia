import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TheoryNavigationProps {
  currentPath: string;
}

const TheoryNavigation: React.FC<TheoryNavigationProps> = ({ currentPath }) => {
  const navigate = useNavigate();
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
        basePath === '/terminology' ? '/terminology' : 
        basePath === '/history' ? '/history' :
        basePath === '/philosophy' ? '/philosophy' :
        basePath === '/vital-points' ? '/vital-points' :
        '/gradings'
      } 
      className="w-full"
      onValueChange={(value) => {
        navigate(value);
      }}
    >
      <TabsList className="grid grid-cols-5 h-12 bg-stone-100">
        <TabsTrigger value="/terminology" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Terminology</span>
        </TabsTrigger>
        <TabsTrigger value="/history" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">History</span>
        </TabsTrigger>
        <TabsTrigger value="/theory/kata" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Kata</span>
        </TabsTrigger>
        <TabsTrigger value="/vital-points" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Vital Points</span>
        </TabsTrigger>
        <TabsTrigger value="/gradings" className="flex items-center justify-center data-[state=active]:bg-stone-200">
          <span className="text-xs">Gradings</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TheoryNavigation;
