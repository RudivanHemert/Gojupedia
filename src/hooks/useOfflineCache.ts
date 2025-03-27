import { useState, useEffect } from 'react';

interface CacheOptions {
  cacheName?: string;
  expiration?: number; // in milliseconds
}

/**
 * Hook to cache resources for offline use
 * @param url The URL to cache
 * @param options Caching options
 * @returns Object with cached data and loading/error states
 */
export function useOfflineCache<T>(
  url: string, 
  options: CacheOptions = {}
): { 
  data: T | null; 
  isLoading: boolean; 
  error: Error | null;
  refetch: () => Promise<void>;
} {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const {
    cacheName = 'goju-wiki-offline-cache',
    expiration = 24 * 60 * 60 * 1000 // 24 hours
  } = options;
  
  // Function to fetch and cache data
  const fetchAndCache = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Check if we have a cached version
      const cachedData = await getCachedData<T>(url, cacheName, expiration);
      
      if (cachedData) {
        setData(cachedData);
        setIsLoading(false);
        
        // Refresh cache in background
        refreshCache(url, cacheName).catch(console.error);
        return;
      }
      
      // If no cached data, fetch from network
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network error: ${response.status} ${response.statusText}`);
      }
      
      const freshData = await response.json() as T;
      setData(freshData);
      
      // Cache the data
      await cacheData(url, freshData, cacheName);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Refetch function for manual refresh
  const refetch = async () => {
    await fetchAndCache();
  };
  
  // Initial fetch
  useEffect(() => {
    fetchAndCache();
  }, [url, cacheName]);
  
  return { data, isLoading, error, refetch };
}

// Get data from cache if available and not expired
async function getCachedData<T>(
  url: string, 
  cacheName: string,
  expiration: number
): Promise<T | null> {
  try {
    const cache = await caches.open(cacheName);
    const response = await cache.match(url);
    
    if (!response) return null;
    
    const cachedData = await response.json();
    const timestamp = cachedData._timestamp as number;
    
    // Check if cache has expired
    if (timestamp && Date.now() - timestamp > expiration) {
      return null;
    }
    
    return cachedData.data as T;
  } catch (err) {
    console.error('Error reading from cache:', err);
    return null;
  }
}

// Cache data with timestamp
async function cacheData<T>(
  url: string,
  data: T,
  cacheName: string
): Promise<void> {
  try {
    const cache = await caches.open(cacheName);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=86400' // 24 hours
    });
    
    const wrappedData = {
      data,
      _timestamp: Date.now()
    };
    
    const response = new Response(JSON.stringify(wrappedData), {
      headers
    });
    
    await cache.put(url, response);
  } catch (err) {
    console.error('Error caching data:', err);
  }
}

// Refresh cache in background
async function refreshCache(
  url: string, 
  cacheName: string
): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) return;
    
    const freshData = await response.json();
    await cacheData(url, freshData, cacheName);
  } catch (err) {
    console.error('Error refreshing cache:', err);
  }
}

/**
 * Hook to cache and load image URLs for offline use
 * @param imageUrl The image URL to cache
 * @param options Caching options
 * @returns Object with cached URL and loading/error states
 */
export function useOfflineImage(
  imageUrl: string,
  options: CacheOptions = {}
): {
  cachedUrl: string | null;
  isLoading: boolean;
  error: Error | null;
} {
  const [cachedUrl, setCachedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const {
    cacheName = 'goju-wiki-image-cache',
    expiration = 7 * 24 * 60 * 60 * 1000 // 7 days
  } = options;
  
  useEffect(() => {
    async function cacheImage() {
      if (!imageUrl) {
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      try {
        // Try to get from cache first
        const cache = await caches.open(cacheName);
        let cachedResponse = await cache.match(imageUrl);
        
        // If not in cache or expired, fetch and cache
        if (!cachedResponse) {
          const response = await fetch(imageUrl, { mode: 'no-cors' });
          await cache.put(imageUrl, response.clone());
          cachedResponse = response;
        }
        
        // Create an object URL from the cached image
        const blob = await cachedResponse.blob();
        const objectUrl = URL.createObjectURL(blob);
        
        setCachedUrl(objectUrl);
      } catch (err) {
        console.error('Error caching image:', err);
        setError(err as Error);
        
        // Fall back to original URL
        setCachedUrl(imageUrl);
      } finally {
        setIsLoading(false);
      }
    }
    
    cacheImage();
    
    // Clean up object URL when component unmounts
    return () => {
      if (cachedUrl && cachedUrl.startsWith('blob:')) {
        URL.revokeObjectURL(cachedUrl);
      }
    };
  }, [imageUrl, cacheName]);
  
  return { cachedUrl, isLoading, error };
} 