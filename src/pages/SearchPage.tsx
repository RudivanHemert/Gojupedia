import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { searchContent, SearchResult } from '@/data/searchIndex';

const SearchPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    return searchContent(searchQuery);
  }, [searchQuery]);

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  const getTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
      'kata': '🥋',
      'technique': '👊',
      'hojo-undo': '🏋️',
      'philosophy': '🧘',
      'theory': '📚',
      'newaza': '🤼',
      'kumite': '🥊',
      'terminology': '📖',
      'history': '📜',
      'person': '👤',
      'principle': '⚖️',
      'article': '📄'
    };
    return icons[type] || '📄';
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'kata': t('search.types.kata', 'Kata'),
      'technique': t('search.types.technique', 'Technique'),
      'hojo-undo': t('search.types.hojoUndo', 'Hojo Undo'),
      'philosophy': t('search.types.philosophy', 'Philosophy'),
      'theory': t('search.types.theory', 'Theory'),
      'newaza': t('search.types.newaza', 'Newaza'),
      'kumite': t('search.types.kumite', 'Kumite'),
      'terminology': t('search.types.terminology', 'Terminology'),
      'history': t('search.types.history', 'History'),
      'person': t('search.types.person', 'Person'),
      'principle': t('search.types.principle', 'Principle'),
      'article': t('search.types.article', 'Article')
    };
    return labels[type] || type;
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{t('search.title', 'Search')}</h1>
        <p className="text-muted-foreground">
          {t('search.description', 'Search through all GojuPedia content')}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
        <Input
          type="text"
          placeholder={t('search.placeholder', 'Search for kata, techniques, philosophy...')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 h-12 text-lg"
        />
      </div>

      {/* Results */}
      <div>
        {searchQuery && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              {t('search.results', 'Results')} ({searchResults.length})
            </h3>
          </div>
        )}

        {searchQuery && searchResults.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Search size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">
                {t('search.noResults', 'No results found')}
              </h3>
              <p className="text-muted-foreground">
                {t('search.noResultsDescription', 'Try different search terms')}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {searchResults.map(item => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleItemClick(item.path)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {getTypeLabel(item.type)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={`${item.id}-tag-${index}`} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!searchQuery && (
          <Card>
            <CardContent className="p-8 text-center">
              <Search size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">
                {t('search.startSearching', 'Start searching')}
              </h3>
              <p className="text-muted-foreground">
                {t('search.startSearchingDescription', 'Enter a search term to find content')}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 