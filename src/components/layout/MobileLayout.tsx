
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Book, BookOpen, History, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const basePath = '/' + currentPath.split('/')[1];
  
  const isAtRoot = currentPath === '/';

  return (
    <div className="app-container relative">
      {/* Status bar */}
      <div className="h-8 bg-stone-900 text-white flex items-center justify-between px-4 text-xs">
        <span>9:41</span>
        <div className="flex space-x-2">
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>

      {/* Header */}
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
          <button className="p-2 -mr-2 hover:bg-stone-100 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </motion.div>
      )}

      {/* Main content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pb-20"
      >
        {children}
      </motion.main>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 w-full max-w-md bg-stone-50 border-t border-stone-200 p-2 z-50">
        <Tabs 
          defaultValue={isAtRoot ? 'home' : basePath} 
          className="w-full"
          onValueChange={(value) => {
            if (value !== basePath) {
              navigate(value);
            }
          }}
        >
          <TabsList className="grid grid-cols-4 h-14 bg-stone-100">
            <TabsTrigger value="/" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
              <Home size={18} />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            <TabsTrigger value="/techniques" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
              <Book size={18} />
              <span className="text-xs">Techniques</span>
            </TabsTrigger>
            <TabsTrigger value="/kata" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
              <BookOpen size={18} />
              <span className="text-xs">Kata</span>
            </TabsTrigger>
            <TabsTrigger value="/history" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
              <History size={18} />
              <span className="text-xs">History</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default MobileLayout;
