import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomSidebar from './CustomSidebar';

interface SidebarLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, hideHeader = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-muted">
      {/* Sidebar - now overlays content on mobile, takes space on desktop */}
      <CustomSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      {/* Main Content - takes full width on mobile, adjusts on desktop */}
      <main className="flex-1 flex flex-col min-h-screen w-full transition-all duration-300">
        {/* Top Header with Menu Button */}
        {!hideHeader && (
          <header className="bg-card border-border px-4 py-3 flex items-center justify-between sticky top-0 z-30">
            {/* Left side - Menu button */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="lg:hidden"
              >
                <Menu size={20} />
              </Button>
            </div>
            
            {/* Center - Title */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-lg font-semibold text-stone-800">
                GojuPedia
              </h1>
            </div>
            
            {/* Right side - Empty div for balance */}
            <div className="w-10"></div>
          </header>
        )}

        {/* Content Area - full width on mobile, adjusted on desktop */}
        <div className="w-full max-w-3xl px-4 py-8 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full max-w-screen-sm px-2 sm:px-4 md:px-8 py-4 overflow-y-auto"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout; 