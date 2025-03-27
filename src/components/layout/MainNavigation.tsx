import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ScrollText, Dumbbell, Brain, Settings } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MainNavigationProps {
  activeTab: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ activeTab }) => {
  const navigate = useNavigate();

  return (
    <Tabs 
      value={activeTab}
      className="w-full"
      onValueChange={(value) => {
        if (value === "home") navigate("/");
        else if (value === "theory") navigate("/theory");
        else if (value === "practice") navigate("/practice");
        else if (value === "study") navigate("/study");
        else if (value === "settings") navigate("/settings");
      }}
    >
      <TabsList className="grid grid-cols-5 h-14 bg-stone-100">
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
        <TabsTrigger value="settings" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:bg-stone-200">
          <Settings size={18} />
          <span className="text-xs">Settings</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default MainNavigation;
