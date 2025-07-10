import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Dumbbell, Users, Zap, Target, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const NewazaPage = () => {
  const { t } = useTranslation();
  
  // Debug: Log available translations
  console.log('Newaza translations:', {
    title: t('newaza.title'),
    description: t('newaza.description'),
    sections: t('newaza.sections', { returnObjects: true })
  });

  const sections = [
    {
      id: 'introduction',
      name: t('newaza.sections.introduction.title'),
      description: t('newaza.sections.introduction.description'),
      icon: <BookOpen className="h-5 w-5 text-karate" />,
      path: '/newaza/introduction',
    },
    {
      id: 'training-elements',
      name: t('newaza.sections.training-elements.title'),
      description: t('newaza.sections.training-elements.description'),
      icon: <Dumbbell className="h-5 w-5 text-karate" />,
      path: '/newaza/training-elements',
    },
    {
      id: 'ground-positions',
      name: t('newaza.sections.ground-positions.title'),
      description: t('newaza.sections.ground-positions.description'),
      icon: <Target className="h-5 w-5 text-karate" />,
      path: '/newaza/ground-positions',
    },
    {
      id: 'kakie',
      name: t('newaza.sections.kakie.title'),
      description: t('newaza.sections.kakie.description'),
      icon: <Zap className="h-5 w-5 text-karate" />,
      path: '/newaza/kakie',
    },
    {
      id: 'techniques',
      name: t('newaza.sections.techniques.title'),
      description: t('newaza.sections.techniques.description'),
      icon: <Play className="h-5 w-5 text-karate" />,
      path: '/newaza/techniques',
    },
    {
      id: 'drills',
      name: t('newaza.sections.drills.title'),
      description: t('newaza.sections.drills.description'),
      icon: <Users className="h-5 w-5 text-karate" />,
      path: '/newaza/drills',
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
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('newaza.title')}
        description={t('newaza.description')}
        backUrl="/practice"
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
                      <div className="w-1/4 bg-muted flex items-center justify-center">
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

export default NewazaPage; 