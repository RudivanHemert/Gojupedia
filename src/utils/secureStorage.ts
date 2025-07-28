/**
 * Secure localStorage wrapper with validation, size limits, and error handling
 */

import { sanitizeInput } from './security';

// Configuration
const MAX_STORAGE_SIZE = 5 * 1024 * 1024; // 5MB limit per item
const MAX_TOTAL_STORAGE = 10 * 1024 * 1024; // 10MB total limit
const STORAGE_PREFIX = 'goju_'; // Prefix to avoid conflicts

// Allowed storage keys (whitelist approach for security)
const ALLOWED_KEYS = [
  'theme',
  'language', 
  'i18nextLng',
  'progress',
  'favorites',
  'settings',
  'offline-cache',
  'user-preferences'
] as const;

type AllowedKey = typeof ALLOWED_KEYS[number];

/**
 * Validates storage key against whitelist
 */
function validateStorageKey(key: string): key is AllowedKey {
  return ALLOWED_KEYS.includes(key as AllowedKey);
}

/**
 * Gets the prefixed key for storage
 */
function getPrefixedKey(key: string): string {
  return `${STORAGE_PREFIX}${key}`;
}

/**
 * Calculates the size of localStorage usage
 */
function getStorageSize(): number {
  let total = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(STORAGE_PREFIX)) {
      const value = localStorage.getItem(key);
      if (value) {
        total += key.length + value.length;
      }
    }
  }
  return total;
}

/**
 * Safely sets an item in localStorage with validation and size checks
 */
export function secureSetItem(key: string, value: any): boolean {
  try {
    // Validate key
    if (!validateStorageKey(key)) {
      console.warn(`Invalid storage key: ${key}`);
      return false;
    }

    // Serialize value
    const serialized = JSON.stringify(value);
    
    // Check individual item size
    if (serialized.length > MAX_STORAGE_SIZE) {
      console.warn(`Data too large for storage: ${serialized.length} bytes`);
      return false;
    }

    // Check total storage size
    const currentSize = getStorageSize();
    if (currentSize + serialized.length > MAX_TOTAL_STORAGE) {
      console.warn(`Storage quota would be exceeded: ${currentSize + serialized.length} bytes`);
      
      // Try to free up space by removing old cache entries
      cleanupOldCache();
      
      // Check again
      if (getStorageSize() + serialized.length > MAX_TOTAL_STORAGE) {
        return false;
      }
    }

    // Store with prefixed key
    const prefixedKey = getPrefixedKey(key);
    localStorage.setItem(prefixedKey, serialized);
    
    return true;
  } catch (error) {
    console.error('Storage failed:', error);
    
    // Handle quota exceeded error
    if (error instanceof DOMException && error.code === 22) {
      console.warn('LocalStorage quota exceeded');
      cleanupOldCache();
    }
    
    return false;
  }
}

/**
 * Safely gets an item from localStorage with validation
 */
export function secureGetItem<T>(key: string, defaultValue: T): T {
  try {
    // Validate key
    if (!validateStorageKey(key)) {
      console.warn(`Invalid storage key: ${key}`);
      return defaultValue;
    }

    const prefixedKey = getPrefixedKey(key);
    const item = localStorage.getItem(prefixedKey);
    
    if (item === null) {
      return defaultValue;
    }

    const parsed = JSON.parse(item);
    
    // Basic validation of parsed data
    if (parsed === null || parsed === undefined) {
      return defaultValue;
    }

    return parsed as T;
  } catch (error) {
    console.error('Storage retrieval failed:', error);
    return defaultValue;
  }
}

/**
 * Safely removes an item from localStorage
 */
export function secureRemoveItem(key: string): boolean {
  try {
    if (!validateStorageKey(key)) {
      console.warn(`Invalid storage key: ${key}`);
      return false;
    }

    const prefixedKey = getPrefixedKey(key);
    localStorage.removeItem(prefixedKey);
    return true;
  } catch (error) {
    console.error('Storage removal failed:', error);
    return false;
  }
}

/**
 * Cleans up old cache entries to free space
 */
function cleanupOldCache(): void {
  try {
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(`${STORAGE_PREFIX}offline-cache`)) {
        keysToRemove.push(key);
      }
    }

    // Remove old cache entries
    keysToRemove.forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Failed to remove cache entry:', error);
      }
    });

    console.log(`Cleaned up ${keysToRemove.length} cache entries`);
  } catch (error) {
    console.error('Cache cleanup failed:', error);
  }
}

/**
 * Gets storage usage statistics
 */
export function getStorageStats(): {
  used: number;
  remaining: number;
  items: number;
  percentage: number;
} {
  const used = getStorageSize();
  const remaining = MAX_TOTAL_STORAGE - used;
  const percentage = (used / MAX_TOTAL_STORAGE) * 100;
  
  let items = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(STORAGE_PREFIX)) {
      items++;
    }
  }

  return {
    used,
    remaining,
    items,
    percentage: Math.round(percentage * 100) / 100
  };
}

/**
 * Clears all app-related localStorage entries
 */
export function clearAppStorage(): boolean {
  try {
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach(key => localStorage.removeItem(key));
    
    console.log(`Cleared ${keysToRemove.length} storage entries`);
    return true;
  } catch (error) {
    console.error('Failed to clear app storage:', error);
    return false;
  }
}

/**
 * Validates localStorage availability
 */
export function isStorageAvailable(): boolean {
  try {
    const testKey = `${STORAGE_PREFIX}test`;
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    console.warn('localStorage is not available:', error);
    return false;
  }
}

/**
 * Migration utility for updating storage keys
 */
export function migrateStorageKeys(migrations: Record<string, string>): void {
  try {
    Object.entries(migrations).forEach(([oldKey, newKey]) => {
      const oldPrefixedKey = getPrefixedKey(oldKey);
      const value = localStorage.getItem(oldPrefixedKey);
      
      if (value && validateStorageKey(newKey)) {
        secureSetItem(newKey, JSON.parse(value));
        localStorage.removeItem(oldPrefixedKey);
        console.log(`Migrated storage key: ${oldKey} → ${newKey}`);
      }
    });
  } catch (error) {
    console.error('Storage migration failed:', error);
  }
} 