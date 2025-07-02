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
  Ruler
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HojoUndoModernSectionProps {
  equipmentKey: 'chiIshi' | 'nigiriGame' | 'kongoken' | 'ishiSashi' | 'makiwara' | 'tan' | 'tetsuGeta' | 'jariBako' | 'ton' | 'makiage' | 'udeTanren';
  sectionKey: 'function' | 'construction' | 'attentionPoints' | 'exercises';
  backPath: string;
}

const HojoUndoModernSection: React.FC<HojoUndoModernSectionProps> = ({
  equipmentKey,
  sectionKey,
  backPath
}) => {
  const { t } = useTranslation();

  const getEquipmentData = () => {
    return t(`hojoUndo.equipment.${equipmentKey}`, { returnObjects: true }) as any;
  };

  const getSectionData = () => {
    const equipment = getEquipmentData();
    return equipment[sectionKey];
  };

  const equipment = getEquipmentData();
  const section = getSectionData();

  const getNavigationLinks = () => {
    const sections = ['function', 'construction', 'attentionPoints', 'exercises'];
    const icons = [Target, Hammer, Eye, Activity];
    
    // Map equipment keys to URL slugs
    const equipmentUrlMap: Record<string, string> = {
      'chiIshi': 'chi-ishi',
      'nigiriGame': 'nigiri-game',
      'kongoken': 'kongoken',
      'ishiSashi': 'ishi-sashi',
      'makiwara': 'makiwara',
      'tan': 'tan',
      'tetsuGeta': 'tetsu-geta',
      'jariBako': 'jari-bako',
      'ton': 'ton',
      'makiage': 'makiage',
      'udeTanren': 'ude-tanren',
    };
    
    const equipmentSlug = equipmentUrlMap[equipmentKey] || equipmentKey;
    
    return sections.map((sec, index) => ({
      path: `/hojo-undo/${equipmentSlug}/${sec}`,
      label: t(`hojoUndo.equipment.${equipmentKey}.${sec}.title`),
      description: t(`hojoUndo.equipment.${equipmentKey}.${sec}.description`, { defaultValue: '' }),
      icon: icons[index],
      isActive: sec === sectionKey
    }));
  };

  const renderContent = () => {
    if (!section) return null;

    switch (sectionKey) {
      case 'function':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="mr-3 h-6 w-6 text-blue-500" />
                  {t('hojoUndo.common.mainFunctions')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.mainFunctions?.map((func: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-base leading-relaxed">{func}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {section.trainingEffects && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Zap className="mr-3 h-6 w-6 text-green-500" />
                    {t('hojoUndo.common.trainingEffects')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.trainingEffects.map((effect: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{effect}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 'construction':
        return (
          <div className="space-y-6">
            {section.dimensions && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Ruler className="mr-3 h-6 w-6 text-blue-500" />
                    {t('hojoUndo.common.dimensions')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {Object.entries(section.dimensions).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">{(value as any).label || key}</span>
                        <span className="text-muted-foreground">{(value as any).value || value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {section.materials && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Hammer className="mr-3 h-6 w-6 text-orange-500" />
                    {t('hojoUndo.common.materials')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {Array.isArray(section.materials) ? (
                    <ul className="space-y-3">
                      {section.materials.map((material: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{material}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-4">
                      {Object.entries(section.materials).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                          <h4 className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                          <p className="text-muted-foreground">{value as string}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {section.weight && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Weight className="mr-3 h-6 w-6 text-purple-500" />
                    {t('hojoUndo.common.weightRecommendations')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {typeof section.weight === 'string' ? (
                    <p className="text-base leading-relaxed">{section.weight}</p>
                  ) : (
                    <div className="space-y-4">
                      {Object.entries(section.weight).map(([key, item]: [string, any]) => (
                        <div key={key} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-muted-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 'attentionPoints':
        return (
          <div className="space-y-6">
            {section.importantPoints && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <AlertTriangle className="mr-3 h-6 w-6 text-red-500" />
                    {t('hojoUndo.common.importantPoints')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.importantPoints.map((point: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed font-medium">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {section.breathingTechniques && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Activity className="mr-3 h-6 w-6 text-green-500" />
                    {t('hojoUndo.common.breathingTechniques')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(section.breathingTechniques).map(([key, value]) => (
                      <div key={key} className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                        <p className="text-muted-foreground">{value as string}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {section.safetyGuidelines && (
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-red-700 dark:text-red-400">
                    <Shield className="mr-3 h-6 w-6" />
                    {t('hojoUndo.common.safetyGuidelines')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.safetyGuidelines.map((guideline: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{guideline}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 'exercises':
        return (
          <div className="space-y-6">
            {section.chiIshiKata && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BookOpen className="mr-3 h-6 w-6 text-blue-500" />
                    {section.chiIshiKata.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{section.chiIshiKata.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-medium">{t('hojoUndo.common.basicSeries')}</h4>
                    <ul className="space-y-3">
                      {section.chiIshiKata.basicSeries.map((exercise: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{exercise}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {section.advancedExercises && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Zap className="mr-3 h-6 w-6 text-orange-500" />
                    {t('hojoUndo.common.advancedExercises')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.advancedExercises.map((exercise: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{exercise}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {section.practicalTips && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Info className="mr-3 h-6 w-6 text-green-500" />
                    {t('hojoUndo.common.practicalTips')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.practicalTips.map((tip: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {Array.isArray(section) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Dumbbell className="mr-3 h-6 w-6 text-purple-500" />
                    {t('hojoUndo.common.exercises')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.map((exercise: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{exercise}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl font-bold">{equipment.name}</h1>
        <p className="text-xl text-muted-foreground">{equipment.translation}</p>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {section.title}
        </Badge>
        {section.description && (
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {section.description}
          </p>
        )}
      </motion.div>

      {/* Equipment Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{t('hojoUndo.common.origin')}:</span>
                  <span className="text-muted-foreground">{equipment.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{t('hojoUndo.common.weight')}:</span>
                  <span className="text-muted-foreground">{equipment.weight}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {renderContent()}
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <Separator />
        <h3 className="text-lg font-semibold flex items-center">
          <BookOpen className="mr-2 h-5 w-5" />
          {t('hojoUndo.common.relatedSections')}
        </h3>
        <div className="flex flex-wrap gap-3">
          {getNavigationLinks().map((link, index) => (
            <Button
              key={index}
              asChild
              variant={link.isActive ? "default" : "outline"}
              className="flex-1 min-w-[calc(50%-0.375rem)] justify-start h-auto p-4 text-left"
            >
              <Link to={link.path} className="flex items-start">
                <link.icon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">{link.label}</div>
                  {link.isActive && link.description && !link.path.endsWith('/function') && (
                    <div className="text-sm text-muted-foreground mt-1 whitespace-normal">
                      {link.description}
                    </div>
                  )}
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HojoUndoModernSection;