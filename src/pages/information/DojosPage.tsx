import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Mail, Clock, Star, Search, Filter, Users, Award, Globe } from 'lucide-react';

interface Dojo {
  id: string;
  name: string;
  city: string;
  region: string;
  description?: string;
  website?: string;
  contact?: string;
}

const DojosPage: React.FC = () => {
  const { t } = useTranslation('information');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('netherlands');

  // Real dojo data from IOGKF-Nederland website
  const netherlandsDojos: Dojo[] = [
    {
      id: '1',
      name: 'Makoto Amsterdam',
      city: 'Amsterdam',
      region: 'Noord-Holland',
      description: 'IOGKF dojo in Amsterdam',
      website: 'https://www.makoto-amsterdam.nl'
    },
    {
      id: '2',
      name: 'Bubishi',
      city: 'Brunssum',
      region: 'Limburg',
      description: 'IOGKF dojo in Brunssum',
      website: 'https://www.bubishi.nl'
    },
    {
      id: '3',
      name: 'BVL fighting',
      city: 'Geldermalsen',
      region: 'Gelderland',
      description: 'IOGKF dojo in Geldermalsen',
      website: 'https://www.bvlfighting.nl'
    },
    {
      id: '4',
      name: 'Sportschool Bushido',
      city: 'Tiel',
      region: 'Gelderland',
      description: 'IOGKF dojo in Tiel',
      website: 'https://www.sportschoolbushido.nl'
    },
    {
      id: '5',
      name: 'Chikara',
      city: 'Nijmegen',
      region: 'Gelderland',
      description: 'IOGKF dojo in Nijmegen',
      website: 'https://www.chikara.nl'
    },
    {
      id: '6',
      name: 'KenKon ILTC',
      city: 'Wageningen',
      region: 'Gelderland',
      description: 'IOGKF dojo in Wageningen',
      website: 'https://www.kenkon.nl'
    },
    {
      id: '7',
      name: 'Sportschool van Laar – Elst (Utrecht)',
      city: 'Elst',
      region: 'Utrecht',
      description: 'IOGKF dojo in Elst',
      website: 'https://www.sportschoolvanlaar.nl'
    },
    {
      id: '8',
      name: 'Sportschool van Laar – Rhenen',
      city: 'Rhenen',
      region: 'Utrecht',
      description: 'IOGKF dojo in Rhenen',
      website: 'https://www.sportschoolvanlaar.nl'
    },
    {
      id: '9',
      name: 'Trainingscentrum Michi',
      city: 'Nijmegen',
      region: 'Gelderland',
      description: 'IOGKF dojo in Nijmegen',
      website: 'https://www.trainingscentrum-michi.nl'
    },
    {
      id: '10',
      name: 'SJOK',
      city: 'Groningen',
      region: 'Groningen',
      description: 'IOGKF dojo in Groningen',
      website: 'https://www.sjok.nl'
    },
    {
      id: '11',
      name: 'Tomoda Jeugdkarate',
      city: 'Nijmegen',
      region: 'Gelderland',
      description: 'IOGKF dojo in Nijmegen',
      website: 'https://www.tomoda.nl'
    }
  ];

  const cities = [
    { value: 'all', label: t('dojos.filters.allCities') },
    { value: 'amsterdam', label: t('dojos.filters.amsterdam') },
    { value: 'nijmegen', label: 'Nijmegen' },
    { value: 'groningen', label: 'Groningen' },
    { value: 'elst', label: 'Elst' },
    { value: 'rhenen', label: 'Rhenen' },
    { value: 'wageningen', label: 'Wageningen' },
    { value: 'tiel', label: 'Tiel' },
    { value: 'geldermalsen', label: 'Geldermalsen' },
    { value: 'brunssum', label: 'Brunssum' },
    { value: 'other', label: t('dojos.filters.other') }
  ];

  const styles = [
    { value: 'all', label: t('dojos.filters.allStyles') },
    { value: 'traditional', label: t('dojos.filters.traditional') },
    { value: 'modern', label: t('dojos.filters.modern') },
    { value: 'competition', label: t('dojos.filters.competition') },
    { value: 'mixed', label: t('dojos.filters.mixed') }
  ];

  const filteredDojos = netherlandsDojos.filter(dojo => {
    const matchesSearch = dojo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dojo.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dojo.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || dojo.city.toLowerCase().includes(selectedCity.toLowerCase());
    return matchesSearch && matchesCity;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">({rating}/5)</span>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{t('dojos.pageTitle')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('dojos.pageDescription')}
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="netherlands">{t('information.dojos.tabs.netherlands')}</TabsTrigger>
            <TabsTrigger value="international">{t('information.dojos.tabs.international')}</TabsTrigger>
          </TabsList>

          {/* Netherlands Tab */}
          <TabsContent value="netherlands" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <CardTitle>{t('information.dojos.search.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('information.dojos.search.searchLabel')}</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder={t('information.dojos.search.searchPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('information.dojos.search.cityLabel')}</label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('information.dojos.search.cityPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.value} value={city.value}>
                            {city.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dojos List */}
            <Card>
              <CardHeader>
                <CardTitle>{t('information.dojos.list.title')}</CardTitle>
                <CardDescription>
                  {filteredDojos.length} {t('information.dojos.list.found')} {netherlandsDojos.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredDojos.length === 0 ? (
                  <div className="text-center py-12">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{t('information.dojos.list.noResults.title')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('information.dojos.list.noResults.description')}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCity('all');
                      }}
                    >
                      {t('information.dojos.list.noResults.showAll')}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredDojos.map((dojo) => (
                      <Card key={dojo.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                  {t('information.dojos.badges.iogkf')}
                                </Badge>
                                <Badge variant="secondary">
                                  {t('information.dojos.badges.region')}: {dojo.region}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl">{dojo.name}</CardTitle>
                              <p className="text-muted-foreground text-sm mt-1">
                                {dojo.city}, {dojo.region}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {dojo.description || 'Gecertificeerde IOGKF dojo'}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="outline" asChild>
                              <a href={dojo.website} target="_blank" rel="noopener noreferrer">
                                <Globe className="h-4 w-4 mr-2" />
                                {t('information.dojos.links.website')}
                              </a>
                            </Button>
                            <Button variant="ghost" size="sm">
                              {t('information.dojos.links.moreInfo')}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Source Information */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      {t('information.dojos.info.source')}
                    </h3>
                    <p className="text-blue-800 text-sm mb-3">
                      {t('information.dojos.info.description')}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.iogkf.nl/locaties/" target="_blank" rel="noopener noreferrer">
                        {t('information.dojos.info.officialWebsite')}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* International Tab */}
          <TabsContent value="international" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('information.dojos.international.title')}</CardTitle>
                <CardDescription>
                  {t('information.dojos.international.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('information.dojos.international.noDojos.title')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('information.dojos.international.noDojos.description')}
                  </p>
                  <Button variant="outline" disabled>
                    {t('information.dojos.international.noDojos.availableSoon')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">{t('dojos.contribute.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('dojos.contribute.description')}</p>
            <Button variant="outline" disabled>
              {t('dojos.contribute.submitDojo')}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DojosPage;
