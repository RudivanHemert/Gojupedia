import React, { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import MainNavigation from './MainNavigation';
import SubNavigation from './SubNavigation';

interface MobileLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, hideHeader = false }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const basePath = '/' + currentPath.split('/')[1];
  const isAtRoot = currentPath === '/';

  const isTheory = ['/theory', '/terminology', '/history', '/philosophy', '/vital-points', '/gradings'].includes(basePath);
  const isPractice = ['/practice', '/techniques', '/kata', '/hojo-undo', '/kumite', '/bunkai'].includes(basePath);
  const isStudy = ['/study'].includes(basePath);
  const isSettings = basePath === '/settings';

  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (isAtRoot) {
      setActiveTab("home");
    } else if (isTheory) {
      setActiveTab("theory");
    } else if (isPractice) {
      setActiveTab("practice");
    } else if (isStudy) {
      setActiveTab("study");
    } else if (isSettings) {
      setActiveTab("settings");
    }
  }, [currentPath, isAtRoot, isTheory, isPractice, isStudy, isSettings]);

  return (
    <div className="app-container relative">
      {!isAtRoot && !hideHeader && <Header />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pb-20"
      >
        {children}
      </motion.main>
      {!hideHeader && <SubNavigation currentPath={currentPath} />}
      <div className="fixed bottom-0 w-full max-w-md bg-stone-50 border-t border-stone-200 z-50">
        <MainNavigation activeTab={activeTab} />
      </div>
    </div>
  );
};

export default MobileLayout;