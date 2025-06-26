import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

// Mock data - in a real app, this would come from your content management system
const mockContent = [
  {
    id: '1',
    title: 'Gekisai Dai Ichi',
    type: 'kata',
    description: 'First kata in the Goju-Ryu system',
    tags: ['kata', 'beginner', 'gekisai'],
    path: '/kata/gekisai-dai-ichi'
  },
  {
    id: '2',
    title: 'Sanchin',
    type: 'kata',
    description: 'Core breathing kata of Goju-Ryu',
    tags: ['kata', 'breathing', 'core'],
    path: '/kata/sanchin'
  },
  {
    id: '3',
    title: 'Chi-ishi Training',
    type: 'hojo-undo',
    description: 'Stone weight training for strength development',
    tags: ['hojo-undo', 'strength', 'equipment'],
    path: '/hojo-undo/chi-ishi/exercises'
  },
  {
    id: '4',
    title: 'Age-uke',
    type: 'technique',
    description: 'Rising block technique',
    tags: ['block', 'defense', 'basic'],
    path: '/techniques/age-uke'
  },
  {
    id: '5',
    title: 'Dojo Kun',
    type: 'philosophy',
    description: 'The dojo precepts and principles',
    tags: ['philosophy', 'principles', 'ethics'],
    path: '/philosophy/dojo-kun'
  },
  {
    id: '6',
    title: 'Newaza Ground Positions',
    type: 'newaza',
    description: 'Ground fighting positions and techniques',
    tags: ['newaza', 'ground', 'fighting'],
    path: '/newaza/ground-positions'
  }
];

const contentTypes = [
  { id: 'all', label: 'All', icon: '🔍' },
  { id: 'kata', label: 'Kata', icon: '🥋' },
  { id: 'technique', label: 'Techniques', icon: '👊' },
  { id: 'hojo-undo', label: 'Hojo Undo', icon: '🏋️' },
  { id: 'philosophy', label: 'Philosophy', icon: '🧘' },
  { id: 'newaza', label: 'Newaza', icon: '🤼' }
];

const SearchPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredContent = useMemo(() => {
    return mockContent.filter(item => {
      const matchesQuery = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === 'all' || item.type === selectedType;

      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => item.tags.includes(tag));

      return matchesQuery && matchesType && matchesTags;
    });
  }, [searchQuery, selectedType, selectedTags]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    mockContent.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedTags([]);
  };

  const getTypeIcon = (type: string) => {
    const contentType = contentTypes.find(ct => ct.id === type);
    return contentType?.icon || '📄';
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{t('search.title', 'Search')}</h1>
        <p className="text-muted-foreground">
          {t('search.description', 'Search through kata, techniques, philosophy, and more')}
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

      {/* Filters */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={20} />
          <h3 className="font-semibold">{t('search.filters', 'Filters')}</h3>
          {(searchQuery || selectedType !== 'all' || selectedTags.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="ml-auto"
            >
              <X size={16} className="mr-1" />
              {t('search.clear', 'Clear')}
            </Button>
          )}
        </div>

        {/* Content Type Filter */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">{t('search.contentType', 'Content Type')}</h4>
          <div className="flex flex-wrap gap-2">
            {contentTypes.map(type => (
              <Badge
                key={type.id}
                variant={selectedType === type.id ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => setSelectedType(type.id)}
              >
                <span className="mr-1">{type.icon}</span>
                {type.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tags Filter */}
        <div>
          <h4 className="text-sm font-medium mb-2">{t('search.tags', 'Tags')}</h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            {t('search.results', 'Results')} ({filteredContent.length})
          </h3>
        </div>

        {filteredContent.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Search size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">
                {t('search.noResults', 'No results found')}
              </h3>
              <p className="text-muted-foreground">
                {t('search.noResultsDescription', 'Try adjusting your search terms or filters')}
              </p>
            </CardContent>
          </Card>
        ) : (
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {filteredContent.map(item => (
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
                          <p className="text-sm text-muted-foreground capitalize">
                            {item.type.replace('-', ' ')}
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
                      {item.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 