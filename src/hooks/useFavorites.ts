import { useState, useEffect, useCallback } from 'react';

// Define types
export interface FavoriteItem {
  id: string;
  type: 'kata' | 'technique' | 'terminology' | 'vitalPoint' | 'lesson' | 'general';
  title: string;
  description?: string;
  path: string;
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

  // Check if an item is in favorites
  const isFavorite = useCallback((id: string) => {
    return favorites.some(item => item.id === id);
  }, [favorites]);

  // Add an item to favorites
  const addFavorite = useCallback((item: FavoriteItem) => {
    setFavorites(prev => {
      // Don't add if already exists
      if (prev.some(existing => existing.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  }, []);

  // Remove an item from favorites
  const removeFavorite = useCallback((id: string) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  }, []);

  // Toggle an item in favorites
  const toggleFavorite = useCallback((item: FavoriteItem) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
      return false;
    } else {
      addFavorite(item);
      return true;
    }
  }, [isFavorite, removeFavorite, addFavorite]);

  // Return the hook interface
  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite
  };
}

export default useFavorites; 