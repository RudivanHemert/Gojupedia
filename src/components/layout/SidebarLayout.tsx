import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomSidebar from './CustomSidebar';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@/components/ui/breadcrumbs';

interface SidebarLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, hideHeader = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - now overlays content on mobile, takes space on desktop */}
      <CustomSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content - takes full width on mobile, adjusts on desktop */}
      <main className="flex-1 flex flex-col min-h-screen w-full transition-all duration-300">
        {/* Top Header with Menu Button */}
        {!hideHeader && (
          <header className="bg-card border-border px-4 py-3 flex items-center justify-between sticky top-0 z-30">
            {/* Left side - Back + Menu (mobile) */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.history.length > 1) {
                    navigate(-1);
                  } else {
                    navigate('/');
                  }
                }}
                aria-label="Back"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="lg:hidden"
                aria-label="Open menu"
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

            {/* Right side - Empty for balance */}
            <div className="w-10" />
          </header>
        )}

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Content Area - full width */}
        <div className="w-full px-0 py-0">
          <motion.div
            id="app-scroll-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full overflow-y-auto"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div >
  );
};

export default SidebarLayout; 