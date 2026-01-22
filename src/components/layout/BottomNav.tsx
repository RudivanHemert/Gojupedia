import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ScrollText, Dumbbell, Brain, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import useHaptics from '@/hooks/useHaptics';

interface BottomNavProps {
    onMenuClick: () => void;
    className?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ onMenuClick, className }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const { impact } = useHaptics();

    const currentPath = location.pathname;
    const isHome = currentPath === '/';

    // Define main navigation items
    const navItems = [
        {
            id: 'home',
            icon: Home,
            label: 'navigation.home',
            path: '/',
            isActive: isHome
        },
        {
            id: 'theory',
            icon: ScrollText,
            label: 'navigation.theory',
            path: '/theory',
            isActive: currentPath.startsWith('/theory') ||
                currentPath.startsWith('/history') ||
                currentPath.startsWith('/philosophy') ||
                currentPath.startsWith('/terminology')
        },
        {
            id: 'practice',
            icon: Dumbbell,
            label: 'navigation.practice',
            path: '/practice',
            isActive: currentPath.startsWith('/practice') ||
                currentPath.startsWith('/kata') ||
                currentPath.startsWith('/techniques') ||
                currentPath.startsWith('/bunkai') ||
                currentPath.startsWith('/hojo-undo')
        },
        {
            id: 'study',
            icon: Brain,
            label: 'navigation.study',
            path: '/study',
            isActive: currentPath.startsWith('/study')
        }
    ];

    const handleNavClick = (path: string) => {
        impact('light');
        navigate(path);
    };

    const handleMenuClick = () => {
        impact('medium');
        onMenuClick();
    };

    return (
        <div className={cn(
            "fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-stone-900/90 backdrop-blur-lg border-t border-stone-200 dark:border-stone-800 pb-safe transition-transform duration-300 lg:hidden",
            className
        )}>
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.path)}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200",
                                item.isActive
                                    ? "text-primary dark:text-primary"
                                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                            )}
                        >
                            <Icon
                                size={24}
                                strokeWidth={item.isActive ? 2.5 : 2}
                                className={cn(
                                    "transition-transform duration-200",
                                    item.isActive ? "scale-110" : "scale-100"
                                )}
                            />
                            <span className="text-[10px] font-medium tracking-wide">
                                {t(item.label)}
                            </span>
                        </button>
                    );
                })}

                {/* Menu Button (Reverts to Sidebar) */}
                <button
                    onClick={handleMenuClick}
                    className="flex flex-col items-center justify-center w-full h-full space-y-1 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors duration-200"
                >
                    <Menu size={24} strokeWidth={2} />
                    <span className="text-[10px] font-medium tracking-wide">
                        {t('navigation.menu', 'Menu')}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default BottomNav;
