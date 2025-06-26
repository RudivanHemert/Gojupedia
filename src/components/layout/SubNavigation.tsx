import React from 'react';
import TheoryNavigation from './TheoryNavigation';
import PracticeNavigation from './PracticeNavigation';

interface SubNavigationProps {
  currentPath: string;
}

const SubNavigation: React.FC<SubNavigationProps> = ({ currentPath }) => {
  const basePath = '/' + currentPath.split('/')[1];
  
  // Only show theory navigation for theory pages
  const showTheoryNav = ['/theory', '/terminology', '/history', '/philosophy', '/vital-points', '/gradings'].includes(basePath);
  
  // Only show practice navigation for practice pages
  const showPracticeNav = ['/practice', '/techniques', '/kata', '/hojo-undo', '/bunkai'].includes(basePath);

  if (!showTheoryNav && !showPracticeNav) {
    return null;
  }

  return (
    <div className="fixed bottom-14 w-full max-w-md bg-stone-50 border-t border-stone-200 z-40">
      {showTheoryNav && <TheoryNavigation currentPath={currentPath} />}
      {showPracticeNav && <PracticeNavigation currentPath={currentPath} />}
    </div>
  );
};

export default SubNavigation;
