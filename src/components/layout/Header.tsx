import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavigationMenu from './NavigationMenu';

const Header = () => {
  return (
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
            <NavigationMenu />
          </div>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default Header;
