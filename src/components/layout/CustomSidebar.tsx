import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  ScrollText,
  Dumbbell,
  Brain,
  Search,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
  Menu,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

// All subpages/tabs for each main section
const sidebarStructure = [
  {
    id: 'home',
    labelKey: 'navigation.home',
    icon: Home,
    path: '/',
    sublinks: []
  },
  {
    id: 'theory',
    labelKey: 'navigation.theory',
    icon: ScrollText,
    path: '/theory',
    sublinks: [
      { labelKey: 'navigation.theoryOverview', path: '/theory' },
      { labelKey: 'navigation.terminology', path: '/terminology' },
      { labelKey: 'navigation.history', path: '/history' },
      { labelKey: 'navigation.philosophy', path: '/philosophy' },
      { labelKey: 'navigation.kataTheory', path: '/theory/kata' },
      { labelKey: 'navigation.vitalPoints', path: '/vital-points' },
      { labelKey: 'navigation.gradings', path: '/gradings' },
      { labelKey: 'navigation.kumite', path: '/kumite' },
    ]
  },
  {
    id: 'practice',
    labelKey: 'navigation.practice',
    icon: Dumbbell,
    path: '/practice',
    sublinks: [
      { labelKey: 'navigation.practiceOverview', path: '/practice' },
      { labelKey: 'navigation.techniques', path: '/techniques' },
      { labelKey: 'navigation.kata', path: '/kata' },
      { labelKey: 'navigation.bunkai', path: '/bunkai' },
      { labelKey: 'navigation.hojoUndo', path: '/hojo-undo' },
      { labelKey: 'navigation.newaza', path: '/newaza' },
    ]
  },
  {
    id: 'study',
    labelKey: 'navigation.study',
    icon: Brain,
    path: '/study',
    sublinks: [
      { labelKey: 'navigation.studyOverview', path: '/study' },
      { labelKey: 'navigation.quizzes', path: '/study/quizzes' },
      { labelKey: 'navigation.flashcards', path: '/study/flashcards' },
      { labelKey: 'navigation.gradings', path: '/gradings' },
    ]
  },
  {
    id: 'search',
    labelKey: 'navigation.search',
    icon: Search,
    path: '/search',
    sublinks: []
  },
  {
    id: 'settings',
    labelKey: 'navigation.settings',
    icon: SettingsIcon,
    path: '/settings',
    sublinks: []
  }
];

const CustomSidebar: React.FC<CustomSidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const currentPath = location.pathname;
  const basePath = '/' + currentPath.split('/')[1];
  const isAtRoot = currentPath === '/';

  // Which main section is expanded
  const [expanded, setExpanded] = useState<string | null>(null);
  // Track which section should expand after sidebar opens
  const [pendingExpand, setPendingExpand] = useState<string | null>(null);

  // Effect: expand section after sidebar opens
  useEffect(() => {
    if (isOpen && pendingExpand) {
      setExpanded(pendingExpand);
      setPendingExpand(null);
    }
  }, [isOpen, pendingExpand]);

  // Determine active main section
  const getActiveSection = () => {
    if (isAtRoot) return 'home';
    if ([
      '/theory', '/terminology', '/history', '/philosophy', '/vital-points', '/gradings', '/theory/kata', '/kumite'
    ].includes(basePath) || currentPath.startsWith('/theory')) return 'theory';
    if ([
      '/practice', '/techniques', '/kata', '/bunkai', '/hojo-undo', '/newaza'
    ].includes(basePath)) return 'practice';
    if ([
      '/study', '/study/quizzes', '/study/flashcards', '/gradings'
    ].includes(basePath)) return 'study';
    if (basePath === '/search') return 'search';
    if (basePath === '/settings') return 'settings';
    return '';
  };
  const activeSection = getActiveSection();

  // Handle main section click
  const handleMainClick = (section: typeof sidebarStructure[0]) => {
    // Open sidebar on mobile if closed
    if (!isOpen && typeof window !== 'undefined' && window.innerWidth < 1024) {
      onToggle();
      if (section.sublinks.length > 0) {
        setPendingExpand(section.id);
      } else {
        // For direct links, navigate after sidebar opens
        setPendingExpand('');
        setTimeout(() => {
          navigate(section.path);
          setExpanded(null);
          onToggle(); // close sidebar on mobile
        }, 250);
      }
      return;
    }
    if (section.sublinks.length === 0) {
      navigate(section.path);
      setExpanded(null);
      onToggle(); // close sidebar on mobile
    } else {
      setExpanded(expanded === section.id ? null : section.id);
    }
  };

  // Handle sublink click
  const handleSubClick = (path: string) => {
    navigate(path);
    onToggle(); // close sidebar on mobile
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-white border-r border-stone-200 z-50 transition-all duration-300 ease-in-out shadow-lg flex flex-col",
          // Mobile: hidden by default, slide in when open
          "lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64 lg:w-16",
          "lg:shadow-lg"
        )}
        style={{ maxWidth: '90vw' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-stone-50">
          {isOpen && (
            <h2 className="text-lg font-semibold text-stone-800">
              GojuPedia
            </h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="p-2 hover:bg-stone-200"
            aria-label="Toggle sidebar"
          >
            {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {sidebarStructure.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            const isExpanded = expanded === section.id;
            return (
              <div key={section.id}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    isOpen
                      ? "w-full flex items-center h-12 px-3 text-base transition-all duration-200 justify-start"
                      : "w-full flex items-center justify-center h-12 transition-all duration-200",
                    isActive ? "bg-stone-100 text-stone-900 border-stone-300" : "hover:bg-stone-50 text-stone-600 hover:text-stone-900"
                  )}
                  size={isOpen ? undefined : "icon"}
                  title={t(section.labelKey)}
                  onClick={() => handleMainClick(section)}
                  aria-expanded={isExpanded}
                  aria-controls={`sidebar-section-${section.id}`}
                >
                  <Icon size={22} className="flex-shrink-0" />
                  {isOpen && (
                    <span className="ml-3 text-sm font-medium flex-1 text-left">
                      {t(section.labelKey)}
                    </span>
                  )}
                  {isOpen && section.sublinks.length > 0 && (
                    isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />
                  )}
                </Button>
                {/* Sublinks */}
                {isOpen && section.sublinks.length > 0 && isExpanded && (
                  <div id={`sidebar-section-${section.id}`} className="pl-8 py-1 space-y-1">
                    {section.sublinks.map((sublink) => (
                      <Button
                        key={sublink.path}
                        variant={currentPath.startsWith(sublink.path) ? "secondary" : "ghost"}
                        className={cn(
                          "w-full flex items-center h-10 px-2 text-sm rounded-md transition-all duration-150",
                          currentPath.startsWith(sublink.path)
                            ? "bg-primary/10 text-primary font-semibold"
                            : "hover:bg-stone-100 text-stone-700"
                        )}
                        onClick={() => handleSubClick(sublink.path)}
                        style={{ textAlign: 'left' }}
                      >
                        {t(sublink.labelKey)}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default CustomSidebar; 