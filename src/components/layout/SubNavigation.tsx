
import React from 'react';
import TheoryNavigation from './TheoryNavigation';
import PracticeNavigation from './PracticeNavigation';

interface SubNavigationProps {
  currentPath: string;
}

const SubNavigation: React.FC<SubNavigationProps> = ({ currentPath }) => {
  return (
    <div className="fixed bottom-14 w-full max-w-md bg-stone-50 border-t border-stone-200 z-40">
      <TheoryNavigation currentPath={currentPath} />
      <PracticeNavigation currentPath={currentPath} />
    </div>
  );
};

export default SubNavigation;
