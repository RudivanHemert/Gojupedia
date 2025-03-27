import { useState, useEffect, useCallback } from 'react';

// Define the type for a favorite item
export interface FavoriteItem {
  id: string;
  type: 'kata' | 'terminology' | 'technique' | 'vitalPoint' | 'other';
  title: string;
  description?: string;
  imageUrl?: string;
  path: string;
  addedAt: number;
}

// Define local storage key
const FAVORITES_STORAGE_KEY = 'goju-ryu-favorites';

export function useFavorites() {
  // Initialize state with favorites from localStorage
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    if (typeof window === 'undefined') return [];
    
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error('Failed to parse favorites from localStorage:', error);
      return [];
    }
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage:', error);
    }
  }, [favorites]);

  // Add an item to favorites
  const addFavorite = useCallback((item: Omit<FavoriteItem, 'addedAt'>) => {
    setFavorites(prevFavorites => {
      // Check if item is already in favorites
      if (prevFavorites.some(fav => fav.id === item.id && fav.type === item.type)) {
        return prevFavorites;
      }
      
      // Add new item with current timestamp
      return [
        ...prevFavorites, 
        { 
          ...item, 
          addedAt: Date.now() 
        }
      ];
    });
  }, []);

  // Remove an item from favorites
  const removeFavorite = useCallback((id: string, type: FavoriteItem['type']) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(item => !(item.id === id && item.type === type))
    );
  }, []);

  // Check if an item is in favorites
  const isFavorite = useCallback((id: string, type: FavoriteItem['type']) => {
    return favorites.some(item => item.id === id && item.type === type);
  }, [favorites]);

  // Toggle favorite status
  const toggleFavorite = useCallback((item: Omit<FavoriteItem, 'addedAt'>) => {
    if (isFavorite(item.id, item.type)) {
      removeFavorite(item.id, item.type);
      return false;
    } else {
      addFavorite(item);
      return true;
    }
  }, [addFavorite, isFavorite, removeFavorite]);

  // Get favorites by type
  const getFavoritesByType = useCallback((type: FavoriteItem['type']) => {
    return favorites.filter(item => item.type === type);
  }, [favorites]);

  // Clear all favorites
  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    getFavoritesByType,
    clearFavorites
  };
}

export default useFavorites; 