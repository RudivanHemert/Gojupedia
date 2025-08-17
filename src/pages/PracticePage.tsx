import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Hand, 
  Users, 
  Target, 
  BookOpen, 
  Dumbbell, 
  Activity,
  ArrowRight,
  Zap,
  Layers
} from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';

const PracticePage = () => {
  const { t } = useTranslation();
  
  const sections = [
    {
      id: 'techniques',
      name: t('practice.sections.techniques.name'),
      description: t('practice.sections.techniques.description'),
      icon: <Hand className="h-8 w-8 text-red-500 dark:text-red-400" />,
      path: '/techniques',
      color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
    },
    {
      id: 'kata',
      name: t('practice.sections.kata.name'),
      description: t('practice.sections.kata.description'),
      icon: <Users className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
      path: '/kata',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-red-800'
    },
    {
      id: 'kumite',
      name: t('practice.sections.kumite.name'),
      description: t('practice.sections.kumite.description'),
      icon: <Target className="h-8 w-8 text-green-500 dark:text-green-400" />,
      path: '/kumite',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
    },
    {
      id: 'bunkai',
      name: t('practice.sections.bunkai.name'),
      description: t('practice.sections.bunkai.description'),
      icon: <BookOpen className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
      path: '/bunkai',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800'
    },
    {
      id: 'hojo-undo',
      name: t('practice.sections.hojoUndo.name'),
      description: t('practice.sections.hojoUndo.description'),
      icon: <Dumbbell className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
      path: '/hojo-undo',
      color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800'
    },
    {
      id: 'newaza',
      name: t('practice.sections.newaza.name'),
      description: t('practice.sections.newaza.description'),
      icon: <Activity className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      path: '/newaza',
      color: 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800'
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
        title={t('practice.pageTitle')}
        description={t('practice.pageDescription')}
        backUrl="/"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {sections.map((section) => (
              <motion.div key={section.id} variants={itemVariants}>
                <Link to={section.path} className="block">
                  <Card className={`overflow-hidden hover:shadow-lg transition-all duration-200 border-2 ${section.color}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 bg-card dark:bg-card p-3 rounded-full shadow-sm">
                          {section.icon}
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-foreground">{section.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                        <div className="flex items-center text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium">{t('practice.viewSection')}</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional info section */}
          <div className="mt-8 bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-center text-foreground">{t('practice.aboutTrainingTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center text-foreground">
                  <Zap className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2" />
                  {t('practice.training.kihon.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('practice.training.kihon.description')}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center text-foreground">
                  <Layers className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
                  {t('practice.training.kata.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('practice.training.kata.description')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PracticePage;
