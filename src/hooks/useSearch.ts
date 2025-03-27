import { useState, useEffect, useCallback } from 'react';

interface SearchOptions<T> {
  keys: (keyof T)[];
  threshold?: number;
  limit?: number;
  matchAllTerms?: boolean;
}

export function useSearch<T>(
  items: T[],
  options: SearchOptions<T>
) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<T[]>(items);
  const [isSearching, setIsSearching] = useState(false);

  const search = useCallback((term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      setResults(items);
      return;
    }
    
    setIsSearching(true);
    
    // Split search term into words for multi-term search
    const searchTerms = term.toLowerCase().split(/\s+/).filter(Boolean);
    
    if (searchTerms.length === 0) {
      setResults(items);
      setIsSearching(false);
      return;
    }
    
    // Perform the search
    try {
      const filteredItems = items.filter(item => {
        // For each item, check if it matches the search terms
        const matches = searchTerms.map(term => {
          // For each term, check if it matches any of the specified keys
          return options.keys.some(key => {
            const value = item[key];
            
            if (value === null || value === undefined) {
              return false;
            }
            
            const stringValue = String(value).toLowerCase();
            return stringValue.includes(term);
          });
        });
        
        // Determine if we need all terms to match or just any term
        return options.matchAllTerms 
          ? matches.every(match => match) 
          : matches.some(match => match);
      });
      
      // Apply limit if specified
      const limitedResults = options.limit 
        ? filteredItems.slice(0, options.limit) 
        : filteredItems;
      
      setResults(limitedResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [items, options.keys, options.limit, options.matchAllTerms]);
  
  // Reset results when items change
  useEffect(() => {
    if (searchTerm) {
      search(searchTerm);
    } else {
      setResults(items);
    }
  }, [items, search, searchTerm]);
  
  return {
    searchTerm,
    search,
    results,
    isSearching,
    setSearchTerm
  };
}

export default useSearch; 