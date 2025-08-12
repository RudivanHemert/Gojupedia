import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, X, ArrowRight, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TheoryHeader from '@/components/theory/TheoryHeader';
import SearchBar from '@/components/ui/SearchBar';
import useFuzzySearch from '@/hooks/useFuzzySearch';
import { FuzzySearchResult } from '@/utils/fuzzySearch';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'general' | 'precise' | 'fuzzy'>('fuzzy');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Use fuzzy search hook
  const { 
    results: searchResults, 
    suggestions,
    isSearching, 
    hasError,
    errorMessage,
    search: performSearch,
    clearResults
  } = useFuzzySearch({
    searchType,
    limit: 50,
    includeAlternativeLanguages: false,
    enableSuggestions: true,
    minQueryLength: 1
  });

  const clearSearch = () => {
    setSearchQuery('');
    clearResults();
  };

  // Filter results by category if needed
  const filteredResults = useMemo(() => {
    if (selectedCategory === 'all') return searchResults;
    return searchResults.filter(result => result.type === selectedCategory);
  }, [searchResults, selectedCategory]);

  // Get unique categories from results for filtering
  const availableCategories = useMemo(() => {
    const categories = new Set(searchResults.map(result => result.type));
    return Array.from(categories);
  }, [searchResults]);

  const handleResultClick = (result: FuzzySearchResult) => {
    navigate(result.path);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      performSearch(query);
    } else {
      clearResults();
    }
  };

  const handleResultSelect = (result: FuzzySearchResult) => {
    navigate(result.path);
  };

  const getTypeLabel = (type: string) => {
    const typeMap: Record<string, string> = {
      'kata': t('common.kata', 'Kata'),
      'technique': t('common.technique', 'Technique'),
      'philosophy': t('common.philosophy', 'Philosophy'),
      'history': t('common.history', 'History'),
      'terminology': t('common.terminology', 'Terminology'),
      'bunkai': t('common.bunkai', 'Bunkai'),
      'hojo-undo': t('common.hojoUndo', 'Hojo Undo'),
      'theory': t('common.theory', 'Theory'),
      'newaza': t('common.newaza', 'Newaza'),
      'kumite': t('common.kumite', 'Kumite'),
      'person': t('common.person', 'Person'),
      'principle': t('common.principle', 'Principle'),
      'article': t('common.article', 'Article')
    };
    return typeMap[type] || type;
  };

  return (
    <div className="min-h-screen bg-background">
              <TheoryHeader 
          title={t('search.welcome', 'Zoeken')}
          description={t('search.description', 'Geavanceerd zoeken met fuzzy matching en suggesties')}
          backUrl="/"
        />
      
      <div className="p-4 w-full">
        {/* Enhanced Search Input */}
        <div className="mb-6">
                      <SearchBar
              onSearch={handleSearch}
              onResultSelect={handleResultSelect}
              placeholder={t('search.placeholder', 'Zoek naar kata, technieken, geschiedenis, filosofie...')}
              value={searchQuery}
              onChange={setSearchQuery}
              fullWidth
              showSuggestions
              searchType={searchType}
              className="max-w-none"
              showHistory={false}
            />

          {/* Search Options (category filter only) */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {availableCategories.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('search.category', 'Categorie:')}
                </span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
                >
                  <option value="all">{t('search.all', 'Alle')}</option>
                  {availableCategories.map(category => (
                    <option key={category} value={category}>
                      {getTypeLabel(category)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Error Display */}
          {hasError && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
            </div>
          )}
        </div>

        {/* Search Results */}
        {searchQuery ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {isSearching ? (
                  t('search.searching', 'Zoeken...')
                ) : (
                  t('search.results', {
                    count: filteredResults.length,
                    query: searchQuery,
                    defaultValue: `${filteredResults.length} resultaten voor "${searchQuery}"`
                  })
                )}
              </h2>
              
              {filteredResults.length > 0 && (
                <Badge variant="outline" className="text-xs">
                  {searchType} search
                </Badge>
              )}
            </div>

            {isSearching ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="space-y-4">
                {filteredResults.map((result) => (
                  <Card 
                    key={result.id} 
                    className="hover:shadow-md transition-all cursor-pointer hover:scale-[1.01]"
                    onClick={() => handleResultClick(result)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {getTypeLabel(result.type)}
                            </Badge>
                            {result.score !== undefined && result.score < 0.3 && (
                              <div className="flex items-center gap-1">
                                <Star size={12} className="text-yellow-500" />
                                <span className="text-xs text-gray-500">{t('search.bestMatch', 'Beste match')}</span>
                              </div>
                            )}
                            {result.language && result.language !== i18n.language && (
                              <Badge variant="outline" className="text-xs">
                                {result.language.toUpperCase()}
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            <span 
                              dangerouslySetInnerHTML={{ 
                                __html: result.highlights?.title || result.title 
                              }} 
                            />
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                            <span 
                              dangerouslySetInnerHTML={{ 
                                __html: result.highlights?.description || result.description 
                              }} 
                            />
                          </p>
                          {result.tags && result.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {result.tags.slice(0, 3).map((tag, index) => (
                                <span 
                                  key={index}
                                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300"
                                >
                                  {tag}
                                </span>
                              ))}
                              {result.tags.length > 3 && (
                                <span className="text-xs text-gray-500">
                                  +{result.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t('search.noResults', 'No results found')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('search.noResultsDescription', 'Try different keywords, enable fuzzy search, or check your spelling')}
                </p>
                
                {/* Suggestions */}
                {suggestions.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('search.didYouMean', 'Bedoelde je:')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {suggestions.slice(0, 5).map((suggestion) => (
                        <Button
                          key={suggestion}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSearch(suggestion)}
                          className="text-xs"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('search.welcome', 'Geavanceerd Zoeken')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('search.welcomeDescription', 'Vind kata, technieken, geschiedenis, filosofie en meer met intelligente fuzzy search')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 