import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  BookOpen, 
  Award,
  Brain,
  Target,
  Users,
  Clock,
  TrendingUp
} from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';

const StudyPage = () => {
  const { t } = useTranslation();
  
  const sections = [
    {
      id: 'quizzes',
      name: 'Quizzen',
      description: 'Test je kennis met interactieve quizzen over alle aspecten van Goju Ryu',
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      path: '/study/quizzes',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'flashcards',
      name: 'Flashcards',
      description: 'Leer Japanse termen en technieken met flashcards',
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      path: '/study/flashcards',
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'gradings',
      name: 'Graduaties',
      description: 'Overzicht van kyu en dan graden met vereisten',
      icon: <Award className="h-8 w-8 text-purple-500" />,
      path: '/gradings',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const studyTips = [
    {
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      title: "Regelmatige Studie",
      description: "Korte, regelmatige sessies zijn effectiever dan lange, sporadische sessies."
    },
    {
      icon: <Target className="h-5 w-5 text-green-500" />,
      title: "Specifieke Doelen",
      description: "Stel concrete doelen voor elke studysessie om je voortgang te meten."
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-purple-500" />,
      title: "Progressieve Leermethode",
      description: "Bouw je kennis stap voor stap op, van basis naar geavanceerde concepten."
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
                        <div className="mb-4 bg-white p-3 rounded-full shadow-sm">
                          {section.icon}
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900">{section.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{section.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Study tips section */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6 text-center">Studie Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studyTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center mb-3">
                    {tip.icon}
                    <h4 className="font-medium ml-2">{tip.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress tracking */}
          <div className="mt-8 bg-stone-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Je Studie Voortgang</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  Voltooide Quizzen
                </h4>
                <p className="text-2xl font-bold text-blue-600">0</p>
                <p className="text-sm text-gray-500">Begin je studie reis!</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  Huidige Graad
                </h4>
                <p className="text-2xl font-bold text-green-600">10e Kyu</p>
                <p className="text-sm text-gray-500">Witte band - beginner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyPage;
