import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ChevronLeft, 
  Target, 
  Brain, 
  Shield, 
  Clock, 
  Users, 
  Info, 
  ArrowRight,
  Weight,
  Zap,
  Dumbbell,
  AlertTriangle,
  BookOpen,
  Hammer,
  Eye,
  Activity,
  History,
  Heart,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HojoUndoModernOverview: React.FC = () => {
  const { t } = useTranslation();

  const getIntroductionData = () => {
    return t('hojoUndo.introduction.content', { returnObjects: true }) as any;
  };

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
          origin: '',
          weight: ''
        }
      };
    });
  };

  const introduction = getIntroductionData();
  const equipment = getEquipmentData();

  const getEquipmentIcon = (key: string) => {
    const icons = {
      chiIshi: Weight,
      nigiriGame: Dumbbell,
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

  return (
    <div className="p-4 space-y-8">
      {/* Back Button */}
      <Button asChild variant="outline" className="mb-6">
        <Link to="/hojo-undo">
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t('hojoUndo.common.back')}
        </Link>
      </Button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">{t('hojoUndo.title')}</h1>
        <Badge variant="secondary" className="text-xl px-6 py-3">
          {t('hojoUndo.description')}
        </Badge>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {introduction.description}
        </p>
      </motion.div>

      {/* Two Main Components */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <Users className="mr-3 h-6 w-6" />
            {introduction.twoMainComponents.title}
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Strength Exercises */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Weight className="mr-3 h-6 w-6 text-blue-500" />
                {introduction.twoMainComponents.strengthExercises.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {introduction.twoMainComponents.strengthExercises.tools.map((tool: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{tool}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Hardening Exercises */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Shield className="mr-3 h-6 w-6 text-green-500" />
                {introduction.twoMainComponents.hardeningExercises.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {introduction.twoMainComponents.hardeningExercises.tools.map((tool: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{tool}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Central Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <Brain className="mr-3 h-6 w-6" />
            {introduction.centralPrinciples.title}
          </h2>
        </div>
        <Card className="p-6 border-l-4 border-l-blue-500">
          <CardContent className="p-0">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {introduction.centralPrinciples.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Training Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <TrendingUp className="mr-3 h-6 w-6" />
            {introduction.trainingEffects.title}
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {/* Physical Benefits */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Dumbbell className="mr-3 h-6 w-6 text-blue-500" />
                {t('hojoUndo.benefits.physical')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {introduction.trainingEffects.physical.map((effect: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0" />
                    <span className="leading-relaxed">{effect}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technical Benefits */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Target className="mr-3 h-6 w-6 text-green-500" />
                {t('hojoUndo.benefits.technical')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {introduction.trainingEffects.technical.map((effect: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0" />
                    <span className="leading-relaxed">{effect}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Mental Benefits */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Brain className="mr-3 h-6 w-6 text-purple-500" />
                {t('hojoUndo.benefits.mental')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {introduction.trainingEffects.mental.map((effect: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0" />
                    <span className="leading-relaxed">{effect}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Equipment Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <Weight className="mr-3 h-7 w-7" />
            {t('hojoUndo.equipment.title')}
          </h2>
        </div>
        
        <div className="grid gap-4">
          {equipment.map((item, index) => {
            const Icon = getEquipmentIcon(item.key);
            const color = getEquipmentColor(item.key);
            
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full ${color} text-white mr-3`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-lg">{item.data.name}</div>
                          <div className="text-sm text-muted-foreground font-normal">
                            {item.data.translation}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.data.weight}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">{item.data.description}</p>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">{t('hojoUndo.common.origin')}:</span>
                      <span className="text-muted-foreground">{item.data.origin}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {['function', 'construction', 'attentionPoints', 'exercises'].map(section => (
                        <Button
                          key={section}
                          asChild
                          variant="ghost"
                          className="w-full justify-start h-auto p-2 text-left"
                        >
                          <Link to={`/hojo-undo/${item.key}/${section}`}>
                            <Icon className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">{t(`equipment.${item.key}.${section}.title`)}</span>
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Safety Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <AlertTriangle className="mr-3 h-6 w-6 text-red-500" />
            {introduction.safetyGuidelines.title}
          </h2>
        </div>
        <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/20">
          <CardContent className="p-6">
            <ul className="space-y-3">
              {introduction.safetyGuidelines.points.map((point: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-base leading-relaxed text-red-700 dark:text-red-300">{point}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Historical Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <History className="mr-3 h-6 w-6 text-amber-600" />
            {introduction.historicalBackground.title}
          </h2>
        </div>
        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-6">
            <p className="text-base text-muted-foreground italic leading-relaxed">
              {introduction.historicalBackground.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HojoUndoModernOverview; 