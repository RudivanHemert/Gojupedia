import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Swords, User, Dumbbell, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
      id: 'hojo-undo',
      name: t('practice.hojoUndo'),
      description: t('practice.hojoUndoDesc'),
      icon: <Dumbbell className="h-5 w-5 text-karate" />,
      path: '/hojo-undo',
    },
    {
      id: 'kumite',
      name: t('practice.kumite'),
      description: t('practice.kumiteDesc'),
      icon: <Users className="h-5 w-5 text-karate" />,
      path: '/kumite',
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
    <>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop" 
          alt={t('practice.title')} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <h1 className="text-white text-3xl font-bold">{t('practice.title')}</h1>
          <p className="text-white opacity-90">
            {t('practice.description')}
          </p>
        </div>
      </div>

      {/* Practice Sections */}
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
    </>
  );
};

export default PracticePage;
