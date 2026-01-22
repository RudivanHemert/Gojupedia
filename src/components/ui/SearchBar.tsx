import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { sanitizeInput, validateSearchQuery, searchRateLimiter } from '@/utils/security';
import useFuzzySearch from '@/hooks/useFuzzySearch';

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  fullWidth?: boolean;
  className?: string;
  showClear?: boolean;
  onClear?: () => void;
  isLoading?: boolean;
  showSuggestions?: boolean;
  searchType?: 'general' | 'precise' | 'fuzzy';
  onResultSelect?: (result: any) => void;
  showHistory?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder,
  value,
  onChange,
  autoFocus = false,
  fullWidth = false,
  className = '',
  showClear = true,
  onClear,
  isLoading = false,
  showSuggestions = true,
  searchType = 'general',
  onResultSelect,
  showHistory = false
}) => {
  const { t } = useLanguage();
  const [localValue, setLocalValue] = useState(value || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;

  // Use fuzzy search hook
  const {
    results,
    suggestions,
    isSearching,
    search: fuzzySearch,
    searchHistory,
    clearResults
  } = useFuzzySearch({
    searchType,
    limit: 8,
    enableSuggestions: showSuggestions,
    minQueryLength: 1
  });

  // Sync with controlled value
  useEffect(() => {
    if (isControlled && value !== localValue) {
      setLocalValue(value);
    }
  }, [value, isControlled, localValue]);

  // Auto focus if needed
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    // Don't sanitize immediately during typing to allow spaces and special characters.
    // sanitization of HTML happens in validateSearchQuery or display logic.
    const queryValue = rawValue;

    setLocalValue(queryValue);
    setSelectedIndex(-1);

    if (onChange) {
      onChange(queryValue);
    }

    // Perform fuzzy search if value is not empty
    if (queryValue.trim()) {
      fuzzySearch(queryValue);
      setShowDropdown(true);
    } else {
      clearResults();
      setShowDropdown(false);
    }

    // If the input is empty and onClear is provided, call it
    if (queryValue === '' && onClear) {
      onClear();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate search query
    if (!validateSearchQuery(localValue)) {
      console.warn('Invalid search query');
      return;
    }

    // Rate limiting
    if (!searchRateLimiter.isAllowed('search')) {
      console.warn('Search rate limit exceeded');
      return;
    }

    onSearch(localValue);
    // Close dropdown and blur to hide mobile keyboard
    setShowDropdown(false);
    setSelectedIndex(-1);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleClear = () => {
    setLocalValue('');
    setShowDropdown(false);
    setSelectedIndex(-1);
    clearResults();

    if (onChange) {
      onChange('');
    }

    if (onClear) {
      onClear();
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;

    const historyCount = showHistory ? searchHistory.length : 0;
    const totalItems = results.length + suggestions.length + historyCount;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, totalItems - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleItemSelect(selectedIndex);
        } else {
          handleSubmit(e);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Handle item selection from dropdown
  const handleItemSelect = (index: number) => {
    const resultCount = results.length;
    const suggestionCount = suggestions.length;

    if (index < resultCount) {
      // Selected a search result
      const result = results[index];
      // Blur before navigation/search to close mobile keyboard
      if (inputRef.current) {
        inputRef.current.blur();
      }
      if (onResultSelect) {
        onResultSelect(result);
      } else {
        onSearch(result.title);
      }
      setLocalValue(result.title);
    } else if (index < resultCount + suggestionCount) {
      // Selected a suggestion
      const suggestion = suggestions[index - resultCount];
      setLocalValue(suggestion);
      // Blur as we will likely navigate/search soon
      if (inputRef.current) {
        inputRef.current.blur();
      }
      fuzzySearch(suggestion);
    } else if (showHistory) {
      // Selected from search history
      const historyItem = searchHistory[index - resultCount - suggestionCount];
      setLocalValue(historyItem);
      if (inputRef.current) {
        inputRef.current.blur();
      }
      fuzzySearch(historyItem);
    } else {
      // No-op when history is hidden
      return;
    }

    setShowDropdown(false);
    setSelectedIndex(-1);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle input focus
  const handleFocus = () => {
    if (localValue.trim() && (results.length > 0 || suggestions.length > 0 || (showHistory && searchHistory.length > 0))) {
      setShowDropdown(true);
    }
  };

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'max-w-md'} ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center"
      >
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            size={18}
          />

          <input
            ref={inputRef}
            type="text"
            value={localValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            placeholder={placeholder || t('common.search')}
            className="w-full py-2 pl-10 pr-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white transition-colors"
            aria-label={placeholder || t('common.search')}
            autoComplete="off"
          />

          <AnimatePresence>
            {showClear && localValue && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                aria-label="Clear search"
              >
                <X size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {(isLoading || isSearching) && (
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
            />
          </div>
        )}
      </form>

      {/* Search Dropdown */}
      <AnimatePresence>
        {showDropdown && showSuggestions && (results.length > 0 || suggestions.length > 0 || (showHistory && searchHistory.length > 0)) && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {/* Search Results */}
            {results.length > 0 && (
              <div className="border-b border-gray-100 dark:border-gray-700">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Resultaten
                </div>
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    type="button"
                    onClick={() => handleItemSelect(index)}
                    className={`w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${selectedIndex === index ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">
                        {result.type}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white"
                          dangerouslySetInnerHTML={{ __html: result.highlights?.title || result.title }} />
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {result.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="border-b border-gray-100 dark:border-gray-700">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Suggesties
                </div>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleItemSelect(results.length + index)}
                    className={`w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${selectedIndex === results.length + index ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Search History */}
            {showHistory && searchHistory.length > 0 && (
              <div>
                <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Recente zoekopdrachten
                </div>
                {searchHistory.slice(0, 3).map((historyItem, index) => (
                  <button
                    key={historyItem}
                    type="button"
                    onClick={() => handleItemSelect(results.length + suggestions.length + index)}
                    className={`w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${selectedIndex === results.length + suggestions.length + index ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{historyItem}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar; 