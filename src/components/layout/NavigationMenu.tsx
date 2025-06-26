import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Search as SearchIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NavigationMenu = () => {
  const { t } = useTranslation();
  return (
    <nav className="space-y-2">
      <Link to="/search" className="block p-2 hover:bg-stone-100 rounded transition-colors flex items-center gap-2">
        <SearchIcon className="h-4 w-4" />
        <span>{t('common.search') || 'Zoeken'}</span>
      </Link>
      <Link to="/" className="block p-2 hover:bg-stone-100 rounded transition-colors">{t('navigation.home')}</Link>
      
      <div className="pt-2 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 px-2 pb-1">{t('navigation.theory')}</h3>
        <Link to="/theory" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('navigation.overview')}</Link>
        <Link to="/terminology" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('theory.nav.terminology')}</Link>
        <Link to="/history" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('theory.nav.history')}</Link>
        <Link to="/philosophy" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('theory.nav.philosophy')}</Link>
        <Link to="/vital-points" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('theory.nav.vitalPoints')}</Link>
        <Link to="/gradings" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('theory.nav.gradings')}</Link>
      </div>
      
      <div className="pt-2 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 px-2 pb-1">{t('navigation.practice')}</h3>
        <Link to="/practice" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('navigation.overview')}</Link>
        <Link to="/techniques" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('practice.nav.techniques')}</Link>
        <Link to="/kata" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('practice.nav.kata')}</Link>
        <Link to="/bunkai" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('practice.nav.bunkai')}</Link>
        <Link to="/hojo-undo" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('practice.nav.hojoUndo')}</Link>
        <Link to="/kumite" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('practice.nav.kumite')}</Link>
      </div>
      
      <div className="pt-2 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 px-2 pb-1">{t('navigation.study')}</h3>
        <Link to="/study" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">{t('navigation.learningMaterials')}</Link>
      </div>
      
      <div className="pt-2 border-t border-gray-100">
        <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-stone-100 rounded transition-colors">
          <Settings size={16} />
          <span>{t('navigation.settings')}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;