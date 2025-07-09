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
      name: 'Technieken',
      description: 'Basis en geavanceerde technieken van Goju Ryu',
      icon: <Hand className="h-8 w-8 text-red-500 dark:text-red-400" />,
      path: '/techniques',
      color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
    },
    {
      id: 'kata',
      name: 'Kata',
      description: 'Traditionele vormen en hun toepassingen',
      icon: <Users className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
      path: '/kata',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
    },
    {
      id: 'kumite',
      name: 'Kumite',
      description: 'Sparring en gevechtstechnieken',
      icon: <Target className="h-8 w-8 text-green-500 dark:text-green-400" />,
      path: '/kumite',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
    },
    {
      id: 'bunkai',
      name: 'Bunkai',
      description: 'Praktische toepassingen van kata',
      icon: <BookOpen className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
      path: '/bunkai',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800'
    },
    {
      id: 'hojo-undo',
      name: 'Hojo Undo',
      description: 'Traditionele versterkingsoefeningen',
      icon: <Dumbbell className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
      path: '/hojo-undo',
      color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800'
    },
    {
      id: 'newaza',
      name: 'Newaza',
      description: 'Grondtechnieken en grappling',
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
        title="Praktijk"
        description="Technieken, training en toepassing van Goju Ryu Karate"
        backUrl="/"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
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
                          <span className="text-sm font-medium">Bekijk sectie</span>
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
            <h3 className="text-lg font-semibold mb-4 text-center text-foreground">Over Praktijk Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center text-foreground">
                  <Zap className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2" />
                  Kihon (基礎)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Basis technieken vormen de fundering van alle karate training. 
                  Regelmatige beoefening van kihon ontwikkelt kracht, precisie en controle.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center text-foreground">
                  <Layers className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
                  Kata (型)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Kata zijn vooraf bepaalde sequenties van technieken die 
                  traditionele vechtprincipes en -strategieën bevatten.
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
