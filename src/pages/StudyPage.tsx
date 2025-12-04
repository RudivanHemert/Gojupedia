import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Brain,
  Award,
  Users,
  BookOpen,
  Target,
  GraduationCap,
  TrendingUp,
  Clock,
  CheckCircle,
  Lightbulb,
  BookText,
  ListCheck
} from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useTranslation } from 'react-i18next';

const StudyPage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'quiz',
      name: t('study.quizzes.title', t('study.tests', 'Quizzes')),
      description: t('study.quizzes.description', t('study.quizDesc', 'Test your knowledge on various topics.')),
      icon: <Brain className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
      path: '/study/quizzes',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
      type: 'quiz'
    },
    {
      id: 'flashcards',
      name: t('study.flashcards.title', 'Flashcards'),
      description: t('study.flashcards.description', t('study.flashcardDesc', 'Review terms and concepts with flashcards.')),
      icon: <BookText className="h-8 w-8 text-green-500 dark:text-green-400" />,
      path: '/study/flashcards',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800',
      type: 'flashcard'
    },
    {
      id: 'matching',
      name: t('study.matching.title', 'Matching'),
      description: t('study.matching.description', t('study.matchingDesc', 'Match terms and concepts with each other.')),
      icon: <ListCheck className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
      path: '/study/matching',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800',
      type: 'matching'
    },

    {
      id: 'vital-points-quiz',
      name: t('vitalPoints.title', 'Vital Points'),
      description: t('vitalPoints.description', 'Study pressure points and vulnerable areas'),
      icon: <Target className="h-8 w-8 text-red-500 dark:text-red-400" />,
      path: '/study/vital-points-quiz',
      color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800',
      type: 'vital-points-quiz'
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
        title={t('study.pageHeaderTitle', t('title', 'Study'))}
        description={t('study.pageHeaderDescription', t('description', 'Test your knowledge and practice techniques'))}
        backUrl="/"
      />

      <div className="p-4 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Study Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
              >
                <Link to={section.path}>
                  <Card className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 ${section.color}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {section.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {section.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {section.description}
                          </p>
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

export default StudyPage;
