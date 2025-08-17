import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const InformationPage: React.FC = () => {
  const { t } = useTranslation('information');

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('description')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-primary" />
                <CardTitle>{t('events.title')}</CardTitle>
              </div>
              <CardDescription>{t('events.description')}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">
                {t('events.emptyMessage')}
              </p>
              <Button asChild className="w-full">
                <Link to="/information/events">
                  {t('events.viewAll')}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dojos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle>{t('dojos.title')}</CardTitle>
              </div>
              <CardDescription>{t('dojos.description')}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">
                {t('information.dojos.description')}
              </p>
              <Button asChild className="w-full">
                <Link to="/information/dojos">
                  {t('dojos.viewAll')}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>{t('resources.title')}</CardTitle>
              </div>
              <CardDescription>{t('resources.description')}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">
                {t('resources.emptyMessage')}
              </p>
              <Button variant="outline" className="w-full" disabled>
                {t('resources.comingSoon')}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <p className="text-muted-foreground mb-4">
          {t('contribute.message')}
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" disabled>
            <ExternalLink className="h-4 w-4 mr-2" />
            {t('contribute.submitEvent')}
          </Button>
          <Button variant="outline" disabled>
            <ExternalLink className="h-4 w-4 mr-2" />
            {t('contribute.submitDojo')}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default InformationPage;
