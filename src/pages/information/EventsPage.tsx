import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Clock, DollarSign, Users, Filter, Search } from 'lucide-react';

const EventsPage: React.FC = () => {
  const { t } = useTranslation('information');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const eventTypes = [
    { value: 'all', label: t('events.filters.allTypes') },
    { value: 'tournament', label: t('events.filters.tournament') },
    { value: 'seminar', label: t('events.filters.seminar') },
    { value: 'training', label: t('events.filters.training') },
    { value: 'grading', label: t('events.filters.grading') },
    { value: 'other', label: t('events.filters.other') }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{t('events.pageTitle')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('events.pageDescription')}
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <CardTitle>{t('events.filters.title')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('events.filters.search')}</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={t('events.filters.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('events.filters.type')}</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('events.filters.selectType')} />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Events List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>{t('events.listTitle')}</CardTitle>
            <CardDescription>{t('events.listDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t('events.noEvents.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('events.noEvents.description')}</p>
              <Button variant="outline" disabled>
                {t('events.noEvents.checkBack')}
              </Button>
            </div>
          </CardContent>
        </Card>
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
            <h3 className="text-lg font-semibold mb-2">{t('events.contribute.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('events.contribute.description')}</p>
            <Button variant="outline" disabled>
              {t('events.contribute.submitEvent')}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default EventsPage;
