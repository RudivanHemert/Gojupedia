import { useState, useEffect, useCallback } from 'react';

// Types for the progress system
export interface ProgressItem {
  id: string;
  type: 'kata' | 'terminology' | 'technique' | 'vitalPoint' | 'lesson';
  completed: boolean;
  percentComplete: number;
  lastAccessed: number;
  completedAt?: number;
  attempts?: number;
  quizScores?: number[];
  notes?: string;
}

export interface ProgressStats {
  totalItems: number;
  completedItems: number;
  percentComplete: number;
  byType: Record<ProgressItem['type'], {
    total: number;
    completed: number;
    percentComplete: number;
  }>;
  recentlyCompleted: ProgressItem[];
}

// Define local storage key
const PROGRESS_STORAGE_KEY = 'goju-ryu-progress';

export function useProgress() {
  // Initialize state with progress data from localStorage
  const [progressData, setProgressData] = useState<Record<string, ProgressItem>>(() => {
    if (typeof window === 'undefined') return {};
    
    try {
      const storedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
      return storedProgress ? JSON.parse(storedProgress) : {};
    } catch (error) {
      console.error('Failed to parse progress data from localStorage:', error);
      return {};
    }
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progressData));
    } catch (error) {
      console.error('Failed to save progress data to localStorage:', error);
    }
  }, [progressData]);

  // Get a progress item
  const getProgress = useCallback((id: string, type: ProgressItem['type']) => {
    const key = `${type}:${id}`;
    return progressData[key] || {
      id,
      type,
      completed: false,
      percentComplete: 0,
      lastAccessed: 0,
      attempts: 0,
      quizScores: []
    };
  }, [progressData]);

  // Mark an item as accessed
  const markAccessed = useCallback((id: string, type: ProgressItem['type']) => {
    const key = `${type}:${id}`;
    setProgressData(prev => ({
      ...prev,
      [key]: {
        ...(prev[key] || { id, type, completed: false, percentComplete: 0, attempts: 0, quizScores: [] }),
        lastAccessed: Date.now()
      }
    }));
  }, []);

  // Update progress for an item
  const updateProgress = useCallback((id: string, type: ProgressItem['type'], progress: number) => {
    const key = `${type}:${id}`;
    const currentItem = progressData[key] || { 
      id, 
      type, 
      completed: false, 
      percentComplete: 0, 
      lastAccessed: Date.now(),
      attempts: 0,
      quizScores: []
    };
    
    const newPercentComplete = Math.max(0, Math.min(100, progress));
    const isCompleted = newPercentComplete >= 100;
    
    setProgressData(prev => ({
      ...prev,
      [key]: {
        ...currentItem,
        percentComplete: newPercentComplete,
        completed: isCompleted,
        lastAccessed: Date.now(),
        ...(isCompleted && !currentItem.completedAt ? { completedAt: Date.now() } : {})
      }
    }));
    
    return newPercentComplete;
  }, [progressData]);

  // Mark an item as completed
  const markCompleted = useCallback((id: string, type: ProgressItem['type']) => {
    const key = `${type}:${id}`;
    const currentItem = progressData[key] || { 
      id, 
      type, 
      completed: false, 
      percentComplete: 0, 
      lastAccessed: Date.now(),
      attempts: 0,
      quizScores: []
    };
    
    setProgressData(prev => ({
      ...prev,
      [key]: {
        ...currentItem,
        completed: true,
        percentComplete: 100,
        lastAccessed: Date.now(),
        completedAt: Date.now()
      }
    }));
  }, [progressData]);

  // Add a quiz score
  const addQuizScore = useCallback((id: string, type: ProgressItem['type'], score: number) => {
    const key = `${type}:${id}`;
    const currentItem = progressData[key] || { 
      id, 
      type, 
      completed: false, 
      percentComplete: 0, 
      lastAccessed: Date.now(),
      attempts: 0,
      quizScores: []
    };
    
    const attempts = (currentItem.attempts || 0) + 1;
    const quizScores = [...(currentItem.quizScores || []), score];
    const bestScore = Math.max(...quizScores);
    const isCompleted = bestScore >= 80; // Consider it completed if they scored at least 80%
    
    setProgressData(prev => ({
      ...prev,
      [key]: {
        ...currentItem,
        attempts,
        quizScores,
        percentComplete: isCompleted ? 100 : Math.max(currentItem.percentComplete, score),
        completed: isCompleted,
        lastAccessed: Date.now(),
        ...(isCompleted && !currentItem.completedAt ? { completedAt: Date.now() } : {})
      }
    }));
    
    return {
      attempts,
      bestScore,
      latestScore: score,
      isCompleted
    };
  }, [progressData]);

  // Add a note to an item
  const addNote = useCallback((id: string, type: ProgressItem['type'], note: string) => {
    const key = `${type}:${id}`;
    const currentItem = progressData[key] || { 
      id, 
      type, 
      completed: false, 
      percentComplete: 0, 
      lastAccessed: Date.now(),
      attempts: 0,
      quizScores: []
    };
    
    setProgressData(prev => ({
      ...prev,
      [key]: {
        ...currentItem,
        notes: note,
        lastAccessed: Date.now()
      }
    }));
  }, [progressData]);

  // Reset progress for an item
  const resetProgress = useCallback((id: string, type: ProgressItem['type']) => {
    const key = `${type}:${id}`;
    
    setProgressData(prev => {
      const newData = { ...prev };
      delete newData[key];
      return newData;
    });
  }, []);

  // Reset all progress
  const resetAllProgress = useCallback(() => {
    setProgressData({});
  }, []);

  // Get progress statistics
  const getProgressStats = useCallback((): ProgressStats => {
    const items = Object.values(progressData);
    const totalItems = items.length;
    const completedItems = items.filter(item => item.completed).length;
    
    // Calculate statistics by type
    const typeStats: Record<ProgressItem['type'], { total: number; completed: number; percentComplete: number }> = {
      kata: { total: 0, completed: 0, percentComplete: 0 },
      terminology: { total: 0, completed: 0, percentComplete: 0 },
      technique: { total: 0, completed: 0, percentComplete: 0 },
      vitalPoint: { total: 0, completed: 0, percentComplete: 0 },
      lesson: { total: 0, completed: 0, percentComplete: 0 }
    };
    
    // Populate statistics by type
    items.forEach(item => {
      const stats = typeStats[item.type];
      stats.total++;
      if (item.completed) {
        stats.completed++;
      }
    });
    
    // Calculate percent complete for each type
    Object.keys(typeStats).forEach(type => {
      const stats = typeStats[type as ProgressItem['type']];
      stats.percentComplete = stats.total > 0 
        ? Math.round((stats.completed / stats.total) * 100) 
        : 0;
    });
    
    // Get recently completed items
    const recentlyCompleted = items
      .filter(item => item.completed && item.completedAt)
      .sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0))
      .slice(0, 5);
    
    return {
      totalItems,
      completedItems,
      percentComplete: totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0,
      byType: typeStats,
      recentlyCompleted
    };
  }, [progressData]);

  return {
    getProgress,
    markAccessed,
    updateProgress,
    markCompleted,
    addQuizScore,
    addNote,
    resetProgress,
    resetAllProgress,
    getProgressStats
  };
}

export default useProgress; 