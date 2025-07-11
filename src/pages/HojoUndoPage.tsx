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
  Brain,
  ArrowRight,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const HojoUndoPage = () => {
  const { t } = useTranslation();

  const getEquipmentData = () => {
    const equipment = ['chiIshi', 'nigiriGame', 'kongoken', 'ishiSashi', 'udeTanren'];
    return equipment.map(key => {
      const data = t(`hojoUndo.equipment.${key}`, { returnObjects: true }) as any;
      return {
        key,
        data: data || {
          name: key,
          translation: '',
          description: '',
          origin: '',
          weight: ''
        }
      };
    });
  };

  const equipment = getEquipmentData();

  const getEquipmentIcon = (key: string) => {
    const icons = {
      chiIshi: Weight,
      nigiriGame: Dumbbell,
      kongoken: Target,
      ishiSashi: Shield,
      udeTanren: Dumbbell
    };
    return icons[key as keyof typeof icons] || BookOpen;
  };

  const getEquipmentColor = (key: string) => {
    const colors = {
      chiIshi: 'bg-blue-500',
      nigiriGame: 'bg-green-500',
      kongoken: 'bg-orange-500',
      ishiSashi: 'bg-purple-500',
      udeTanren: 'bg-red-500'
    };
    return colors[key as keyof typeof colors] || 'bg-gray-500';
  };

  const getEquipmentTextColor = (key: string) => {
    const colors = {
      chiIshi: 'text-blue-500',
      nigiriGame: 'text-green-500',
      kongoken: 'text-orange-500',
      ishiSashi: 'text-purple-500',
      udeTanren: 'text-red-500'
    };
    return colors[key as keyof typeof colors] || 'text-gray-500';
  };

  const mainSections: Array<{
    title: string;
    translation?: string;
    description: string;
    icon: React.ComponentType<any>;
    color: string;
    textColor: string;
    category: string;
    links: Array<{
      name: string;
      path: string;
      icon: React.ComponentType<any>;
      description: string;
    }>;
    exercises?: Array<{ title: string; text: string }>;
  }> = [
    {
      title: t('hojoUndo.introduction.title'),
      description: t('hojoUndo.introduction.content.description'),
      icon: BookOpen,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-500',
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
    ...equipment.map(item => {
      const Icon = getEquipmentIcon(item.key);
      const color = getEquipmentColor(item.key);
      const textColor = getEquipmentTextColor(item.key);
      
      // Special handling for Ude Tanren which has a different structure
      if (item.key === 'udeTanren') {
        return {
          title: item.data.name,
          translation: item.data.translation,
          description: item.data.description,
          icon: Icon,
          color,
          textColor,
          category: t('hojoUndo.categories.primaryEquipment'),
          links: [
            { 
              name: 'Informatie', 
              path: '/hojo-undo/ude-tanren/information',
              icon: Info,
              description: 'Algemene informatie over Ude Tanren'
            },
            { 
              name: 'Oefeningen', 
              path: '/hojo-undo/ude-tanren/exercises',
              icon: Dumbbell,
              description: 'Specifieke oefeningen en routines'
            },
          ],
          exercises: item.data.exercises
        };
      }
      
      // Original logic for other equipment
      return {
        title: item.data.name,
        translation: item.data.translation,
        description: item.data.description,
        icon: Icon,
        color,
        textColor,
        category: t('hojoUndo.categories.primaryEquipment'),
        links: [
          { 
            name: item.data.function?.title || 'Function', 
            path: `/hojo-undo/${item.key}/function`,
            icon: Target,
            description: t('hojoUndo.common.understandingPurpose')
          },
          { 
            name: item.data.construction?.title || 'Construction', 
            path: `/hojo-undo/${item.key}/construction`,
            icon: Hammer,
            description: t('hojoUndo.common.buildMaintain')
          },
          { 
            name: item.data.attentionPoints?.title || 'Attention Points', 
            path: `/hojo-undo/${item.key}/attentionPoints`,
            icon: Shield,
            description: t('hojoUndo.common.safetyTechnique')
          },
          { 
            name: item.data.exercises?.title || 'Exercises', 
            path: `/hojo-undo/${item.key}/exercises`,
            icon: Dumbbell,
            description: t('hojoUndo.common.specificExercises')
          },
        ],
        exercises: item.data.exercises
      };
    })
  ];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('hojoUndo.title')}
        description={t('hojoUndo.description')}
        backUrl="/practice"
      />
      <div className="p-4 space-y-6">

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
                        {section.translation && (
                          <div className="text-sm text-muted-foreground font-normal">
                            {section.translation}
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {section.category}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{section.description}</p>
                  
                  {Array.isArray(section.exercises) && (
                    <ul className="mt-2 space-y-2">
                      {section.exercises.map((ex, i) => (
                        <li key={i} className="border-l-4 border-red-500 pl-3">
                          <div className="font-semibold">{ex.title}</div>
                          <div className="text-sm text-muted-foreground whitespace-pre-line">{ex.text}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                  
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
    </div>
  );
};

export default HojoUndoPage;
