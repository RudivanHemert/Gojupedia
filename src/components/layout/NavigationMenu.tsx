import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

const NavigationMenu = () => {
  return (
    <nav className="space-y-2">
      <Link to="/" className="block p-2 hover:bg-stone-100 rounded transition-colors">Home</Link>
      
      <div className="pt-2 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 px-2 pb-1">Theory</h3>
        <Link to="/theory" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Overview</Link>
        <Link to="/terminology" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Terminology</Link>
        <Link to="/history" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">History</Link>
        <Link to="/philosophy" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Philosophy</Link>
        <Link to="/vital-points" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Vital Points</Link>
        <Link to="/gradings" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Gradings</Link>
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
        <Link to="/study" className="block p-2 hover:bg-stone-100 rounded transition-colors pl-4">Learning Materials</Link>
      </div>
      
      <div className="pt-2 border-t border-gray-100">
        <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-stone-100 rounded transition-colors">
          <Settings size={16} />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;