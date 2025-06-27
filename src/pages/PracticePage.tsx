import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Swords, User, Dumbbell, Users, ListChecks, Zap, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const PracticePage = () => {
  const { t } = useTranslation();
  const sections = [
    {
      id: 'techniques',
      name: t('practice.techniques'),
      description: t('practice.techniquesDesc'),
      icon: <Swords className="h-5 w-5 text-karate" />,
      path: '/techniques',
    },
    {
      id: 'kata',
      name: t('practice.kata'),
      description: t('practice.kataDesc'),
      icon: <User className="h-5 w-5 text-karate" />,
      path: '/kata',
    },
    {
      id: 'bunkai',
      name: t('bunkai.title'),
      description: t('bunkai.description'),
      icon: <ListChecks className="h-5 w-5 text-karate" />,
      path: '/bunkai',
    },
    {
      id: 'hojo-undo',
      name: t('practice.hojoUndo'),
      description: t('practice.hojoUndoDesc'),
      icon: <Dumbbell className="h-5 w-5 text-karate" />,
      path: '/hojo-undo',
    },
    {
      id: 'junbi-undo',
      name: t('practice.junbiUndo'),
      description: t('practice.junbiUndoDesc'),
      icon: <Activity className="h-5 w-5 text-karate" />,
      path: '/junbi-undo',
    },
    {
      id: 'newaza',
      name: t('practice.newaza'),
      description: t('practice.newazaDesc'),
      icon: <Zap className="h-5 w-5 text-karate" />,
      path: '/newaza',
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
        title={t('practice.title')}
        description={t('practice.description')}
        backUrl="/"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default PracticePage;
