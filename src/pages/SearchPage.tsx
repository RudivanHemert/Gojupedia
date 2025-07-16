import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, X, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { createSearchIndex, searchContent, SearchResult } from '@/data/searchIndex';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Create search index once
  const searchIndex = useMemo(() => createSearchIndex(), []);

  const clearSearch = () => {
    setSearchQuery('');
  };

  // Get search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const results = searchContent(searchQuery, i18n.language);
    
    return results;
  }, [searchQuery, i18n.language]);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
  };

  const getTypeLabel = (type: string) => {
    const typeMap: Record<string, string> = {
      'kata': 'Kata',
      'technique': 'Techniek',
      'philosophy': 'Filosofie',
      'history': 'Geschiedenis',
      'terminology': 'Terminologie',
      'bunkai': 'Bunkai',
      'hojo-undo': 'Hojo Undo',
      'theory': 'Theorie',
      'newaza': 'Newaza',
      'kumite': 'Kumite',
      'person': 'Persoon',
      'principle': 'Principe',
      'article': 'Artikel'
    };
    return typeMap[type] || type;
  };

  const getTypeColor = (type: string) => {
    const colorMap: Record<string, string> = {
      'kata': 'bg-blue-100 text-blue-800',
      'technique': 'bg-green-100 text-green-800',
      'philosophy': 'bg-purple-100 text-purple-800',
      'history': 'bg-orange-100 text-orange-800',
      'terminology': 'bg-red-100 text-red-800',
      'bunkai': 'bg-indigo-100 text-indigo-800',
      'hojo-undo': 'bg-yellow-100 text-yellow-800',
      'theory': 'bg-pink-100 text-pink-800',
      'newaza': 'bg-teal-100 text-teal-800',
      'kumite': 'bg-cyan-100 text-cyan-800',
      'person': 'bg-gray-100 text-gray-800',
      'principle': 'bg-emerald-100 text-emerald-800',
      'article': 'bg-slate-100 text-slate-800'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title="Zoeken"
        description="Zoek door alle content en termen in Gojupedia"
        backUrl="/"
      />
      
      <div className="p-4 max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Zoek naar kata, technieken, filosofie, terminologie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 h-12 text-lg"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          {searchQuery ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Zoekresultaten voor "{searchQuery}" ({searchResults.length} resultaten)
              </h3>
              
              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((result) => (
                    <Card 
                      key={result.id} 
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleResultClick(result)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-foreground">{result.title}</h4>
                              <Badge className={getTypeColor(result.type)}>
                                {getTypeLabel(result.type)}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">
                              {result.description}
                            </p>
                            {result.tags && result.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {result.tags.slice(0, 3).map((tag, index) => (
                                  <span 
                                    key={index} 
                                    className="text-xs bg-muted px-2 py-1 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Geen resultaten gevonden voor "{searchQuery}"</p>
                  <p className="text-sm mt-2">
                    Probeer andere zoektermen
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold mb-2">Begin met zoeken</h3>
              <p className="text-muted-foreground">
                Voer een zoekterm in om door alle content te zoeken
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage; 