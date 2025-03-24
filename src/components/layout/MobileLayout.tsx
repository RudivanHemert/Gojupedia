import React, { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Menu, Settings, Brain, ScrollText, Dumbbell, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const basePath = '/' + currentPath.split('/')[1];
  
  const isAtRoot = currentPath === '/';
  const isTheory = ['/theory', '/terminology', '/history', '/philosophy'].includes(basePath);
  const isPractice = ['/practice', '/techniques', '/kata', '/hojo-undo', '/kumite'].includes(basePath);
  const isStudy = ['/study', '/gradings'].includes(basePath);

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
    }
  }, [currentPath, isAtRoot, isTheory, isPractice, isStudy]);

  const renderTheoryNavigation = () => {
    if (!isTheory) return null;
    
    return (
      <Tabs 
        defaultValue={
          basePath === '/theory' ? 'theory' : 
          basePath === '/terminology' ? 'terminology' : 
          basePath === '/vital-points' ? 'vital-points' : 
          'history'
        } 
        className="w-full"
        onValueChange={(value) => {
          navigate(value);
        }}
      >
        <TabsList className="grid grid-cols-3 h-12 bg-stone-100">
          <TabsTrigger value="/terminology" className="flex items-center justify-center data-[state=active]:bg-stone-200">
            <span className="text-xs">Terminology</span>
          </TabsTrigger>
          <TabsTrigger value="/history" className="flex items-center justify-center data-[state=active]:bg-stone-200">
            <span className="text-xs">History</span>
          </TabsTrigger>
          <TabsTrigger value="/vital-points" className="flex items-center justify-center data-[state=active]:bg-stone-200">
            <span className="text-xs">Vital Points</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  };

  const renderPracticeNavigation = () => {
    if (!isPractice) return null;
    
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

  const renderMainNavigation = () => {
    return (
      <Tabs 
        value={activeTab}
        className="w-full"
        onValueChange={(value) => {
          if (value === "home") navigate("/");
          else if (value === "theory") navigate("/theory");
          else if (value === "practice") navigate("/practice");
          else if (value === "study") navigate("/study");
        }}
      >
        <TabsList className="grid grid-cols-4 h-14 bg-stone-100">
          <TabsTrigger value="home" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
            <Home size={18} />
            <span className="text-xs">Home</span>
          </TabsTrigger>
          <TabsTrigger value="theory" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
            <ScrollText size={18} />
            <span className="text-xs">Theory</span>
          </TabsTrigger>
          <TabsTrigger value="practice" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
            <Dumbbell size={18} />
            <span className="text-xs">Practice</span>
          </TabsTrigger>
          <TabsTrigger value="study" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
            <Brain size={18} />
            <span className="text-xs">Study</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  };

  return (
    <div className="app-container relative">
      <div className="h-8 bg-stone-900 text-white flex items-center justify-between px-4 text-xs">
        <span>9:41</span>
        <div className="flex space-x-2">
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>

      {!isAtRoot && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 py-3 flex items-center justify-between border-b border-stone-200 bg-stone-50"
        >
          <Link 
            to="/"
            className="p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <Home size={20} />
          </Link>
          <h1 className="text-xl font-serif font-medium text-stone-800">Goju Ryu</h1>
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 -mr-2 hover:bg-stone-100 rounded-full transition-colors">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 space-y-4">
                <h2 className="text-lg font-medium">Menu</h2>
                <nav className="space-y-2">
                  <Link to="/" className="block p-2 hover:bg-stone-100 rounded transition-colors">Home</Link>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 px-2 pb-1">Theory</h3>
                    <Link to="/theory" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Overview</Link>
                    <Link to="/terminology" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Terminology</Link>
                    <Link to="/history" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">History</Link>
                    <Link to="/philosophy" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Philosophy</Link>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 px-2 pb-1">Practice</h3>
                    <Link to="/practice" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Overview</Link>
                    <Link to="/techniques" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Techniques</Link>
                    <Link to="/kata" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Kata</Link>
                    <Link to="/hojo-undo" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Hojo Undo</Link>
                    <Link to="/kumite" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Kumite</Link>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 px-2 pb-1">Study</h3>
                    <Link to="/study" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Study Material</Link>
                    <Link to="/gradings" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Gradings</Link>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Link to="/admin" className="flex items-center gap-2 p-2 text-sm text-stone-500 hover:bg-stone-100 rounded transition-colors">
                      <Settings size={16} />
                      Admin
                    </Link>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      )}

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pb-20"
      >
        {children}
      </motion.main>

      <div className="fixed bottom-14 w-full max-w-md bg-stone-50 border-t border-stone-200 z-40">
        {renderTheoryNavigation()}
        {renderPracticeNavigation()}
      </div>

      <div className="fixed bottom-0 w-full max-w-md bg-stone-50 border-t border-stone-200 z-50">
        {renderMainNavigation()}
      </div>
    </div>
  );
};

export default MobileLayout;
