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
import MobileLayout from '@/components/layout/MobileLayout';
import { useTranslation } from 'react-i18next';

const HojoUndoPage = () => {
  const { t } = useTranslation();

  const getEquipmentData = () => {
    const equipment = ['chiIshi', 'nigiriGame', 'kongoken', 'ishiSashi'];
    return equipment.map(key => {
      const data = t(`hojoUndo.equipment.${key}`, { returnObjects: true }) as any;
      return {
        key,
        data: data || {
          name: key,
          translation: '',
          description: '',
          function: { title: 'Function' },
          construction: { title: 'Construction' },
          attentionPoints: { title: 'Attention Points' },
          exercises: { title: 'Exercises' }
        }
      };
    });
  };

  const equipment = getEquipmentData();

  const getEquipmentIcon = (key: string) => {
    const icons = {
      chiIshi: Weight,
      nigiriGame: HandMetal,
      kongoken: Target,
      ishiSashi: Shield
    };
    return icons[key as keyof typeof icons] || Info;
  };

  const getEquipmentColor = (key: string) => {
    const colors = {
      chiIshi: 'bg-blue-500',
      nigiriGame: 'bg-green-500',
      kongoken: 'bg-orange-500',
      ishiSashi: 'bg-purple-500'
    };
    return colors[key as keyof typeof colors] || 'bg-gray-500';
  };

  const getEquipmentTextColor = (key: string) => {
    const colors = {
      chiIshi: 'text-blue-500',
      nigiriGame: 'text-green-500',
      kongoken: 'text-orange-500',
      ishiSashi: 'text-purple-500'
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
        ]
      };
    })
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
            {t('hojoUndo.description')}
          </Badge>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('hojoUndo.introduction.content.description')}
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

        {/* Quick Access to Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold flex items-center justify-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              {t('hojoUndo.common.quickAccess')}
            </h3>
          </div>
          <Button asChild variant="outline" className="w-full">
            <Link to="/hojo-undo/general/intro">
              <BookOpen className="mr-2 h-4 w-4" />
              {t('hojoUndo.common.viewCompleteOverview')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default HojoUndoPage;
