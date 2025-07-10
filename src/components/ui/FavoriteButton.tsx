import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites, FavoriteItem } from '@/hooks/useFavorites';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  item: FavoriteItem;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  item, 
  size = 'md',
  className 
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(item.id);
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(item);
  };
  
  const sizes = {
    sm: 'p-1.5 rounded-full',
    md: 'p-2 rounded-full',
    lg: 'p-2.5 rounded-full'
  };
  
  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 24
  };
  
  return (
    <button
      onClick={handleToggle}
      className={cn(
        sizes[size],
        isFav 
          ? 'bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300' 
          : 'bg-muted text-gray-500 hover:bg-muted dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
        className
      )}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart 
        size={iconSizes[size]} 
        fill={isFav ? 'currentColor' : 'none'} 
      />
    </button>
  );
};

export default FavoriteButton; 