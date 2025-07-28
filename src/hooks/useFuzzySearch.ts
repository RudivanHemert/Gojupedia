/**
 * React hook for fuzzy search with debouncing, caching, and error handling
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { searchContent, getSearchSuggestions, FuzzySearchResult } from '@/utils/fuzzySearch';
import { searchRateLimiter } from '@/utils/security';

interface UseFuzzySearchOptions {
  debounceMs?: number;
  searchType?: 'general' | 'precise' | 'fuzzy';
  limit?: number;
  includeAlternativeLanguages?: boolean;
  enableSuggestions?: boolean;
  minQueryLength?: number;
}

interface UseFuzzySearchResult {
  query: string;
  results: FuzzySearchResult[];
  suggestions: string[];
  isSearching: boolean;
  hasError: boolean;
  errorMessage: string;
  search: (query: string) => void;
  clearResults: () => void;
  clearError: () => void;
  searchHistory: string[];
}

// Simple cache for search results
const searchCache = new Map<string, {
  results: FuzzySearchResult[];
  timestamp: number;
}>();

const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes

export default function useFuzzySearch(options: UseFuzzySearchOptions = {}): UseFuzzySearchResult {
  const { i18n } = useTranslation();
  const {
    debounceMs = 300,
    searchType = 'general',
    limit = 20,
    includeAlternativeLanguages = false,
    enableSuggestions = true,
    minQueryLength = 2,
  } = options;

  // State
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuzzySearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  // Memoized cache key generator
  const generateCacheKey = useCallback((searchQuery: string, language: string) => {
    return `${searchQuery.toLowerCase()}-${language}-${searchType}-${limit}-${includeAlternativeLanguages}`;
  }, [searchType, limit, includeAlternativeLanguages]);

  // Clear expired cache entries
  const clearExpiredCache = useCallback(() => {
    const now = Date.now();
    for (const [key, entry] of searchCache.entries()) {
      if (now - entry.timestamp > CACHE_DURATION) {
        searchCache.delete(key);
      }
    }
  }, []);

  // Get cached results
  const getCachedResults = useCallback((cacheKey: string): FuzzySearchResult[] | null => {
    const cached = searchCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.results;
    }
    return null;
  }, []);

  // Cache results
  const cacheResults = useCallback((cacheKey: string, searchResults: FuzzySearchResult[]) => {
    // Clear expired entries before adding new ones
    clearExpiredCache();
    
    // Limit cache size
    if (searchCache.size > 100) {
      const oldestKey = searchCache.keys().next().value;
      if (oldestKey) {
        searchCache.delete(oldestKey);
      }
    }

    searchCache.set(cacheKey, {
      results: searchResults,
      timestamp: Date.now(),
    });
  }, [clearExpiredCache]);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery || searchQuery.length < minQueryLength) {
      setResults([]);
      setSuggestions([]);
      return;
    }

    setIsSearching(true);
    setHasError(false);
    setErrorMessage('');

    try {
      // Rate limiting check
      if (!searchRateLimiter.isAllowed('search')) {
        throw new Error('Too many search requests. Please wait a moment.');
      }

      const cacheKey = generateCacheKey(searchQuery, i18n.language);
      
      // Check cache first
      const cachedResults = getCachedResults(cacheKey);
      if (cachedResults) {
        setResults(cachedResults);
        setIsSearching(false);
        return;
      }

      // Perform actual search
      const searchResults = searchContent(searchQuery, {
        language: i18n.language,
        searchType,
        limit,
        includeAlternativeLanguages,
      });

      setResults(searchResults);
      
      // Cache the results
      cacheResults(cacheKey, searchResults);

      // Get suggestions if enabled
      if (enableSuggestions) {
        const searchSuggestions = getSearchSuggestions(searchQuery, i18n.language);
        setSuggestions(searchSuggestions);
      }

      // Add to search history
      if (searchQuery.length >= minQueryLength) {
        setSearchHistory(prev => {
          const newHistory = [searchQuery, ...prev.filter(item => item !== searchQuery)];
          return newHistory.slice(0, 10); // Keep only last 10 searches
        });
      }

    } catch (error) {
      console.error('Search error:', error);
      setHasError(true);
      setErrorMessage(error instanceof Error ? error.message : 'Search failed');
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [
    minQueryLength,
    generateCacheKey,
    getCachedResults,
    cacheResults,
    i18n.language,
    searchType,
    limit,
    includeAlternativeLanguages,
    enableSuggestions,
  ]);

  // Debounced search function
  const debouncedSearch = useCallback((searchQuery: string) => {
    // Clear existing timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set new timeout
    const timeout = setTimeout(() => {
      performSearch(searchQuery);
    }, debounceMs);

    setDebounceTimeout(timeout);
  }, [debounceTimeout, debounceMs, performSearch]);

  // Main search function
  const search = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    
    if (!searchQuery || searchQuery.length < minQueryLength) {
      setResults([]);
      setSuggestions([]);
      setIsSearching(false);
      return;
    }

    debouncedSearch(searchQuery);
  }, [minQueryLength, debouncedSearch]);

  // Clear functions
  const clearResults = useCallback(() => {
    setQuery('');
    setResults([]);
    setSuggestions([]);
    setIsSearching(false);
    setHasError(false);
    setErrorMessage('');
    
    // Clear debounce timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
      setDebounceTimeout(null);
    }
  }, [debounceTimeout]);

  const clearError = useCallback(() => {
    setHasError(false);
    setErrorMessage('');
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  // Re-search when language changes
  useEffect(() => {
    if (query && query.length >= minQueryLength) {
      performSearch(query);
    }
  }, [i18n.language, performSearch, query, minQueryLength]);

  // Memoized return value to prevent unnecessary re-renders
  const returnValue = useMemo(() => ({
    query,
    results,
    suggestions,
    isSearching,
    hasError,
    errorMessage,
    search,
    clearResults,
    clearError,
    searchHistory,
  }), [
    query,
    results,
    suggestions,
    isSearching,
    hasError,
    errorMessage,
    search,
    clearResults,
    clearError,
    searchHistory,
  ]);

  return returnValue;
} 