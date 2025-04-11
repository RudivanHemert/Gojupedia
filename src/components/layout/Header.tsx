import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Menu, ArrowLeft } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavigationMenu from './NavigationMenu';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAtRoot = location.pathname === '/';

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-3 flex items-center justify-between border-b border-stone-200 bg-stone-50"
    >
      {isAtRoot ? (
        <Link 
          to="/"
          className="p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Go Home"
        >
          <Home size={20} />
        </Link>
      ) : (
        <button
          onClick={handleBack}
          className="p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Go Back"
        >
          <ArrowLeft size={20} />
        </button>
      )}
      
      <h1 className="text-xl font-serif font-medium text-stone-800">Goju Ryu</h1>
      
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 -mr-2 hover:bg-stone-100 rounded-full transition-colors" aria-label="Open Menu">
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-medium">Menu</h2>
            <NavigationMenu />
          </div>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default Header;
