import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TheoryHeader from '@/components/theory/TheoryHeader';

const SearchPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const contentTypes = [
    { id: 'kata', label: 'Kata', color: 'bg-blue-100 text-blue-800' },
    { id: 'techniques', label: 'Technieken', color: 'bg-green-100 text-green-800' },
    { id: 'philosophy', label: 'Filosofie', color: 'bg-purple-100 text-purple-800' },
    { id: 'history', label: 'Geschiedenis', color: 'bg-orange-100 text-orange-800' },
    { id: 'terminology', label: 'Terminologie', color: 'bg-red-100 text-red-800' },
    { id: 'bunkai', label: 'Bunkai', color: 'bg-indigo-100 text-indigo-800' }
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title="Zoeken"
        description="Zoek door alle content en termen in Gojupedia"
        backUrl="/"
      />
      
      <div className="p-4 max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
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

        {/* Filters */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </h3>
            {selectedFilters.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="text-sm"
              >
                Alles wissen
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {contentTypes.map((type) => (
              <Badge
                key={type.id}
                variant={selectedFilters.includes(type.id) ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedFilters.includes(type.id) ? type.color : 'hover:bg-gray-100'
                }`}
                onClick={() => toggleFilter(type.id)}
              >
                {type.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          {searchQuery ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Zoekresultaten voor "{searchQuery}"
              </h3>
              <div className="text-center py-12 text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Zoekfunctionaliteit wordt binnenkort geïmplementeerd</p>
                <p className="text-sm mt-2">
                  Je kunt nu door de hoofdsecties navigeren om content te vinden
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold mb-2">Begin met zoeken</h3>
              <p className="text-gray-500 mb-6">
                Voer een zoekterm in om door alle content te zoeken
              </p>
              
              {/* Quick Access Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Populaire Zoektermen</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>• Gekisai Dai Ichi</p>
                      <p>• Sanchin</p>
                      <p>• Tensho</p>
                      <p>• Seiyunchin</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Technieken</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>• Age Uke</p>
                      <p>• Gedan Barai</p>
                      <p>• Soto Uke</p>
                      <p>• Mae Geri</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Terminologie</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>• Dojo Kun</p>
                      <p>• Kihon</p>
                      <p>• Kumite</p>
                      <p>• Bunkai</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage; 