import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Users, 
  Shield, 
  Swords, 
  Dumbbell, 
  Heart,
  BookOpen,
  Zap,
  Activity,
  Layers
} from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';

const PracticePage = () => {
  const { t } = useTranslation();
  
  const sections = [
    {
      id: 'techniques',
      name: 'Technieken',
      description: 'Basis technieken, stoten, trappen, blokken en stances',
      icon: <Target className="h-8 w-8 text-blue-500" />,
      path: '/techniques',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'kata',
      name: 'Kata',
      description: 'Traditionele vormen en hun betekenis',
      icon: <Users className="h-8 w-8 text-green-500" />,
      path: '/kata',
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'bunkai',
      name: 'Bunkai',
      description: 'Praktische toepassing van kata technieken',
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      path: '/bunkai',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 'kumite',
      name: 'Kumite',
      description: 'Sparring en vechttechnieken',
      icon: <Swords className="h-8 w-8 text-red-500" />,
      path: '/kumite',
      color: 'bg-red-50 border-red-200'
    },
    {
      id: 'hojo-undo',
      name: 'Hojo Undo',
      description: 'Traditionele kracht- en conditietraining',
      icon: <Dumbbell className="h-8 w-8 text-orange-500" />,
      path: '/hojo-undo',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      id: 'newaza',
      name: 'Newaza',
      description: 'Grondtechnieken en grappling',
      icon: <Activity className="h-8 w-8 text-indigo-500" />,
      path: '/newaza',
      color: 'bg-indigo-50 border-indigo-200'
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

          {/* Additional info section */}
          <div className="mt-8 bg-stone-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Over Praktijk Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                  Kihon (基礎)
                </h4>
                <p className="text-sm text-gray-600">
                  Basis technieken vormen de fundering van alle karate training. 
                  Regelmatige beoefening van kihon ontwikkelt kracht, precisie en controle.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <Layers className="h-5 w-5 text-blue-500 mr-2" />
                  Kata (型)
                </h4>
                <p className="text-sm text-gray-600">
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
