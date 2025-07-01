import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Brain, Users, Target } from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';

const PhilosophyPage = () => {
  const { t } = useTranslation();
  

  
  const sections = [
    {
      id: 'dojo-kun',
      name: t('philosophy.sections.dojo-kun.title', 'Dojo Kun'),
      description: t('philosophy.sections.dojo-kun.description', 'De vijf principes van de dojo'),
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      path: '/philosophy/dojo-kun',
    },
    {
      id: 'goju-ryu',
      name: t('philosophy.sections.goju-ryu.title', 'Goju Ryu'),
      description: t('philosophy.sections.goju-ryu.description', 'De filosofie van hard en zacht'),
      icon: <Target className="h-8 w-8 text-green-500" />,
      path: '/philosophy/goju-ryu',
    },
    {
      id: 'karate-do',
      name: t('philosophy.sections.karate-do.title', 'Karate Do'),
      description: t('philosophy.sections.karate-do.description', 'De weg van de lege hand'),
      icon: <Heart className="h-8 w-8 text-red-500" />,
      path: '/philosophy/karate-do',
    },
    {
      id: 'mind-body',
      name: t('philosophy.sections.mind-body.title', 'Geest en Lichaam'),
      description: t('philosophy.sections.mind-body.description', 'De eenheid van geest en lichaam'),
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      path: '/philosophy/mind-body',
    },
    {
      id: 'respect',
      name: t('philosophy.sections.respect.title', 'Respect'),
      description: t('philosophy.sections.respect.description', 'Respect in de martiale kunsten'),
      icon: <Users className="h-8 w-8 text-orange-500" />,
      path: '/philosophy/respect',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('philosophy.title', 'Filosofie')}
        description={t('philosophy.description', 'De filosofische principes en spirituele aspecten van Goju Ryu Karate')}
        backUrl="/theory"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {sections.map((section) => (
              <motion.div key={section.id} variants={itemVariants}>
                <Link to={section.path} className="block">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex h-24">
                        <div className="w-1/4 bg-stone-100 flex items-center justify-center">
                          <div className="bg-stone-200 p-3 rounded-full">
                            {section.icon}
                          </div>
                        </div>
                        <div className="w-3/4 p-4 flex flex-col justify-center">
                          <h3 className="font-semibold text-lg">{section.name}</h3>
                          <p className="text-sm text-gray-600">{section.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhilosophyPage; 