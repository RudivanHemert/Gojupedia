import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';

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
  isLoading = false
}) => {
  const { t } = useLanguage();
  const [localValue, setLocalValue] = useState(value || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;

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
    const newValue = e.target.value;
    setLocalValue(newValue);
    
    if (onChange) {
      onChange(newValue);
    }

    // If the input is empty and onClear is provided, call it
    if (newValue === '' && onClear) {
      onClear();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localValue);
  };

  const handleClear = () => {
    setLocalValue('');
    
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

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative flex items-center ${fullWidth ? 'w-full' : 'max-w-md'} ${className}`}
    >
      <div className="relative w-full">
        <FiSearch 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" 
          size={18} 
        />
        
        <input
          ref={inputRef}
          type="text"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder || t('common.search')}
          className="w-full py-2 pl-10 pr-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white transition-colors"
          aria-label={placeholder || t('common.search')}
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
              <FiX size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      {isLoading && (
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      )}
    </form>
  );
};

export default SearchBar; 