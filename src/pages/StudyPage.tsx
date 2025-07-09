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
  Lightbulb
} from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';

const StudyPage = () => {
  const sections = [
    {
      id: 'quiz',
      name: 'Quizzen',
      description: 'Test je kennis met interactieve quizzen over verschillende onderwerpen',
      icon: <Brain className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
      path: '/study/quiz',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
    },
    {
      id: 'flashcards',
      name: 'Flashcards',
      description: 'Leer termen en technieken met flashcards',
      icon: <BookOpen className="h-8 w-8 text-green-500 dark:text-green-400" />,
      path: '/study/flashcards',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
    },
    {
      id: 'graduations',
      name: 'Graduaties',
      description: 'Bekijk de vereisten voor elke graad en band',
      icon: <Award className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
      path: '/graduations',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800'
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
        title="Studie"
        description="Quizzen, flashcards en graduaties voor je karate reis"
        backUrl="/"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
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
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Study tips section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Studie Tips</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Consistente Oefening</h4>
                      <p className="text-sm text-muted-foreground">Oefen regelmatig, zelfs 15 minuten per dag helpt.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-green-500 dark:text-green-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Focus op Basis</h4>
                      <p className="text-sm text-muted-foreground">Bouw een sterke basis voordat je verder gaat.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 dark:text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Herhaling</h4>
                      <p className="text-sm text-muted-foreground">Herhaal wat je leert om het te versterken.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-orange-500 dark:text-orange-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Progressie</h4>
                      <p className="text-sm text-muted-foreground">Track je voortgang en vier kleine overwinningen.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Progress section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Card className="bg-muted/30 dark:bg-muted/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center text-foreground">Je Studie Voortgang</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card dark:bg-card rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center text-foreground">
                      <Users className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
                      Voltooide Quizzen
                    </h4>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</p>
                    <p className="text-sm text-muted-foreground">Begin je studie reis!</p>
                  </div>
                  <div className="bg-card dark:bg-card rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center text-foreground">
                      <Award className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                      Huidige Graad
                    </h4>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">10e Kyu</p>
                    <p className="text-sm text-muted-foreground">Witte band - beginner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyPage;
