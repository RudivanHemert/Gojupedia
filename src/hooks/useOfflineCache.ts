import { useState, useEffect, useCallback } from 'react';

interface CacheOptions {
  cacheName?: string;
  expiration?: number; // In milliseconds
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
) {
  const { cacheName = 'offline-data', expiration = 24 * 60 * 60 * 1000 } = options; // Default 24h
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAndCache = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Check cache first
      const cachedData = await getCachedData<T>(url, cacheName, expiration);
      
      if (cachedData) {
        setData(cachedData);
        setIsLoading(false);
        return cachedData;
      }

      // If not in cache or expired, fetch from network
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }

      const freshData = await response.json() as T;
      setData(freshData);

      // Cache the fresh data
      await cacheData(url, freshData, cacheName);
      
      return freshData;
    } catch (err) {
      console.error('Error in fetchAndCache:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [url, cacheName, expiration]);

  const refetch = useCallback(() => {
    return fetchAndCache();
  }, [fetchAndCache]);

  useEffect(() => {
    fetchAndCache();
  }, [url, cacheName, fetchAndCache]);

  return {
    data,
    isLoading,
    error,
    refetch,
    refreshCache: () => refreshCache(url, cacheName)
  };
}

// Helper function to get data from cache
async function getCachedData<T>(url: string, cacheName: string, expiration: number): Promise<T | null> {
  if (!('caches' in window)) {
    return null;
  }

  try {
    const cache = await caches.open(cacheName);
    const response = await cache.match(url);
    
    if (!response) {
      return null;
    }
    
    const data = await response.json();
    
    // Check if cached data is expired
    if (data._timestamp && Date.now() - data._timestamp > expiration) {
      // Data is expired, remove it from cache
      await cache.delete(url);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error getting cached data:', error);
    return null;
  }
}

// Helper function to cache data
async function cacheData<T>(url: string, data: T, cacheName: string): Promise<void> {
  if (!('caches' in window)) {
    return;
  }

  try {
    const cache = await caches.open(cacheName);
    const dataWithTimestamp = { ...data, _timestamp: Date.now() };
    const response = new Response(JSON.stringify(dataWithTimestamp), {
      headers: { 'Content-Type': 'application/json' }
    });
    await cache.put(url, response);
  } catch (error) {
    console.error('Error caching data:', error);
  }
}

// Helper function to refresh cache
async function refreshCache(url: string, cacheName: string): Promise<boolean> {
  if (!('caches' in window)) {
    return false;
  }

  try {
    const cache = await caches.open(cacheName);
    await cache.delete(url);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const freshData = await response.json();
    const dataWithTimestamp = { ...freshData, _timestamp: Date.now() };
    
    await cache.put(url, new Response(JSON.stringify(dataWithTimestamp), {
      headers: { 'Content-Type': 'application/json' }
    }));
    
    return true;
  } catch (error) {
    console.error('Error refreshing cache:', error);
    return false;
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
) {
  const { cacheName = 'offline-images', expiration = 7 * 24 * 60 * 60 * 1000 } = options; // Default 7 days
  const [cachedUrl, setCachedUrl] = useState<string>(imageUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!('caches' in window)) {
      setCachedUrl(imageUrl);
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    async function cacheImage() {
      try {
        // Check if image is in cache
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(imageUrl);

        if (cachedResponse) {
          // Image is already cached
          if (isMounted) {
            setCachedUrl(imageUrl);
            setIsLoading(false);
          }
          return;
        }

        // Cache the image
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }

        await cache.put(imageUrl, response.clone());

        if (isMounted) {
          setCachedUrl(imageUrl);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error caching image:', err);
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setCachedUrl(imageUrl); // Use original URL as fallback
          setIsLoading(false);
        }
      }
    }

    cacheImage();

    return () => {
      isMounted = false;
    };
  }, [imageUrl, cacheName, expiration]);

  return {
    cachedUrl,
    isLoading,
    error
  };
}

export default useOfflineCache; 