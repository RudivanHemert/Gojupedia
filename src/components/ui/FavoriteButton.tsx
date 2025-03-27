import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFavorites, FavoriteItem } from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  item: Omit<FavoriteItem, 'addedAt'>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  onToggle?: (isFavorite: boolean) => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  item,
  size = 'md',
  className = '',
  showText = false,
  onToggle
}) => {
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const isFav = isFavorite(item.id, item.type);
  
  // Size maps
  const sizeMap = {
    sm: {
      button: 'p-1.5',
      icon: 'text-lg',
      text: 'text-xs',
    },
    md: {
      button: 'p-2',
      icon: 'text-xl',
      text: 'text-sm',
    },
    lg: {
      button: 'p-2.5',
      icon: 'text-2xl',
      text: 'text-base',
    },
  };
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAnimating(true);
    const newIsFavorite = toggleFavorite(item);
    
    if (onToggle) {
      onToggle(newIsFavorite);
    }
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };
  
  return (
    <button
      onClick={handleToggle}
      aria-label={isFav ? t('common.unfavorite') : t('common.favorite')}
      className={`relative flex items-center gap-1.5 focus:outline-none ${sizeMap[size].button} ${className}`}
    >
      <div className="relative">
        <FaStar
          className={`${sizeMap[size].icon} transition-colors duration-200 ${
            isFav ? 'text-yellow-400' : 'text-gray-400 dark:text-gray-600'
          }`}
        />
        
        {/* Animation when adding to favorites */}
        <AnimatePresence>
          {isAnimating && isFav && (
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaStar className={`${sizeMap[size].icon} text-yellow-400`} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {showText && (
        <span 
          className={`${sizeMap[size].text} ${
            isFav ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          {isFav ? t('common.unfavorite') : t('common.favorite')}
        </span>
      )}
    </button>
  );
};

export default FavoriteButton; 