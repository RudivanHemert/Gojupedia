import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Menu, ArrowLeft } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavigationMenu from './NavigationMenu';
import { useTranslation } from 'react-i18next';

const TOP_LEVEL_ROUTES = [
  '/',
  '/kata',
  '/practice',
  '/theory',
  '/terminology',
  '/history',
  '/philosophy',
  '/vital-points',
  '/gradings',
  '/hojo-undo',
  '/kumite',
  '/bunkai',
  '/techniques',
  '/study',
  '/settings',
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isTopLevel = TOP_LEVEL_ROUTES.includes(location.pathname);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-3 flex items-center justify-between border-b border-border bg-muted"
    >
      {isTopLevel ? (
        <span className="p-2 -ml-2" />
      ) : (
        <button
          onClick={handleBack}
          className="p-2 -ml-2 hover:bg-muted rounded-full transition-colors"
          aria-label={t('common.back')}
        >
          <ArrowLeft size={20} />
        </button>
      )}
      
      <h1 className="text-xl font-serif font-medium text-stone-800">{t('common.shortAppName')}</h1>
      
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 -mr-2 hover:bg-muted rounded-full transition-colors" aria-label={t('common.openMenu')}>
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-medium">{t('common.menuTitle')}</h2>
            <NavigationMenu />
          </div>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default Header;
