import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  Hammer, 
  Weight, 
  CircleEllipsis, 
  HandMetal, 
  Eye, 
  BookOpen, 
  Dumbbell,
  Target,
  Shield,
  Users,
  Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { useTranslation } from 'react-i18next';

const HojoUndoPage = () => {
  const { t } = useTranslation();

  const mainSections = [
    {
      title: t('hojoUndo.introduction.title'),
      translation: t('hojoUndo.introduction.translation'),
      description: t('hojoUndo.description'),
      icon: BookOpen,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      category: t('hojoUndo.categories.introduction'),
      links: [
        { 
          name: t('hojoUndo.introduction.title'), 
          path: '/hojo-undo/general/intro',
          icon: BookOpen,
          description: t('hojoUndo.common.learnFundamentals')
        },
      ],
    },
    {
      title: t('hojoUndo.equipment.chiIshi.name'),
      translation: t('hojoUndo.equipment.chiIshi.translation'),
      description: t('hojoUndo.equipment.chiIshi.description'),
      icon: Weight,
      color: 'bg-green-500',
      textColor: 'text-green-500',
      category: t('hojoUndo.categories.primaryEquipment'),
      links: [
        { 
          name: t('hojoUndo.equipment.chiIshi.function'), 
          path: '/hojo-undo/chi-ishi/function',
          icon: Target,
          description: t('hojoUndo.common.understandingPurpose')
        },
        { 
          name: t('hojoUndo.equipment.chiIshi.construction'), 
          path: '/hojo-undo/chi-ishi/construction',
          icon: Hammer,
          description: t('hojoUndo.common.buildMaintain')
        },
        { 
          name: t('hojoUndo.equipment.chiIshi.attentionPoints'), 
          path: '/hojo-undo/chi-ishi/attention-points',
          icon: Shield,
          description: t('hojoUndo.common.safetyTechnique')
        },
        { 
          name: t('hojoUndo.equipment.chiIshi.exercises'), 
          path: '/hojo-undo/chi-ishi/exercises',
          icon: Dumbbell,
          description: t('hojoUndo.common.specificExercises')
        },
      ]
    },
    {
      title: t('hojoUndo.equipment.nigiriGame.name'),
      translation: t('hojoUndo.equipment.nigiriGame.translation'),
      description: t('hojoUndo.equipment.nigiriGame.description'),
      icon: HandMetal,
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      category: t('hojoUndo.categories.primaryEquipment'),
      links: [
        { 
          name: t('hojoUndo.equipment.nigiriGame.function'), 
          path: '/hojo-undo/nigiri-game/function',
          icon: Target,
          description: t('hojoUndo.common.understandingPurpose')
        },
        { 
          name: t('hojoUndo.equipment.nigiriGame.construction'), 
          path: '/hojo-undo/nigiri-game/construction',
          icon: Hammer,
          description: t('hojoUndo.common.buildMaintain')
        },
        { 
          name: t('hojoUndo.equipment.nigiriGame.exercises'), 
          path: '/hojo-undo/nigiri-game/exercises',
          icon: Dumbbell,
          description: t('hojoUndo.common.specificExercises')
        },
        { 
          name: t('hojoUndo.equipment.nigiriGame.attentionPoints'), 
          path: '/hojo-undo/nigiri-game/attention-points',
          icon: Shield,
          description: t('hojoUndo.common.safetyTechnique')
        },
      ]
    },
    {
      title: t('hojoUndo.equipment.kongoken.name'),
      translation: t('hojoUndo.equipment.kongoken.translation'),
      description: t('hojoUndo.equipment.kongoken.description'),
      icon: Hammer,
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      category: t('hojoUndo.categories.primaryEquipment'),
      links: [
        { 
          name: t('hojoUndo.equipment.kongoken.classicExercises'), 
          path: '/hojo-undo/kongoken/classic-exercises',
          icon: BookOpen,
          description: t('hojoUndo.common.traditionalMethods')
        },
        { 
          name: t('hojoUndo.equipment.kongoken.exercises'), 
          path: '/hojo-undo/kongoken/exercises',
          icon: Dumbbell,
          description: t('hojoUndo.common.modernRoutines')
        },
      ]
    },
    {
      title: t('hojoUndo.equipment.ishiSashi.name'),
      translation: t('hojoUndo.equipment.ishiSashi.translation'),
      description: t('hojoUndo.equipment.ishiSashi.description'),
      icon: Weight,
      color: 'bg-pink-500',
      textColor: 'text-pink-500',
      category: t('hojoUndo.categories.primaryEquipment'),
      links: [
        { 
          name: t('hojoUndo.equipment.ishiSashi.function'), 
          path: '/hojo-undo/ishi-sashi/function',
          icon: Target,
          description: t('hojoUndo.common.understandingPurpose')
        },
        { 
          name: t('hojoUndo.equipment.ishiSashi.construction'), 
          path: '/hojo-undo/ishi-sashi/construction',
          icon: Hammer,
          description: t('hojoUndo.common.buildMaintain')
        },
        { 
          name: t('hojoUndo.equipment.ishiSashi.exercises'), 
          path: '/hojo-undo/ishi-sashi/exercises',
          icon: Dumbbell,
          description: t('hojoUndo.common.specificExercises')
        },
        { 
          name: t('hojoUndo.equipment.ishiSashi.attentionPoints'), 
          path: '/hojo-undo/ishi-sashi/attention-points',
          icon: Shield,
          description: t('hojoUndo.common.safetyTechnique')
        },
      ]
    },
  ];

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <h1 className="text-3xl font-bold">{t('hojoUndo.title')}</h1>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {t('hojoUndo.common.traditionalStrengthTraining')}
          </Badge>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('hojoUndo.description')}
          </p>
        </motion.div>

        {/* Main Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold flex items-center">
            <Weight className="mr-2 h-5 w-5" />
            {t('hojoUndo.sections.trainingSections')}
          </h2>
          <div className="space-y-4">
            {mainSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full ${section.color} text-white mr-3`}>
                          <section.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-lg">{section.title}</div>
                          <div className="text-sm text-muted-foreground font-normal">
                            {section.translation}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {section.category}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">{section.description}</p>
                    
                    <div className="space-y-2">
                      {section.links?.map(link => (
                        <Link 
                          key={link.path} 
                          to={link.path} 
                          className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted transition-colors group"
                        >
                          <div className="flex items-center">
                            <link.icon className={`mr-3 h-4 w-4 ${section.textColor}`} />
                            <div>
                              <div className="font-medium">{link.name}</div>
                              <div className="text-xs text-muted-foreground">{link.description}</div>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default HojoUndoPage;
