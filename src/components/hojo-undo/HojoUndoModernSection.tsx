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
  sectionKey: 'function' | 'construction' | 'attentionPoints' | 'exercises' | 'information';
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
    // Special handling for Ude Tanren which has a different structure
    if (equipmentKey === 'udeTanren') {
      const sections = ['information', 'exercises'];
      const icons = [Info, Activity];
      
      return sections.map((sec, index) => ({
        path: `/hojo-undo/ude-tanren/${sec}`,
        label: sec === 'information' ? 'Informatie' : 'Oefeningen',
        description: sec === 'information' ? 'Algemene informatie over Ude Tanren' : 'Specifieke oefeningen en routines',
        icon: icons[index],
        isActive: sec === sectionKey
      }));
    }
    
    // Original logic for other equipment
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

    // Special handling for Ude Tanren
    if (equipmentKey === 'udeTanren') {
      switch (sectionKey) {
        case 'information':
          return (
            <div className="space-y-6">
              {/* Wat is Ude Tanren */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Info className="mr-3 h-6 w-6 text-blue-500" />
                    Wat is Ude Tanren?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">
                    Ude Tanren (腕鍛錬) betekent letterlijk "arm smeden" of "arm conditionering". Het zijn partneroefeningen die specifiek gericht zijn op het conditioneren van de armen door middel van gecontroleerde impact en contact.
                  </p>
                </CardContent>
              </Card>

              {/* Hoofddoelen */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Target className="mr-3 h-6 w-6 text-green-500" />
                    Hoofddoelen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Conditionering van armen en lichaam',
                      'Training van impact geven en ontvangen',
                      'Ontwikkeling van \'schok\' vaardigheid',
                      'Versterking van lichaam en geest',
                      'Leren incasseren en slaan'
                    ].map((goal, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{goal}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Veiligheidsrichtlijnen */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Shield className="mr-3 h-6 w-6 text-red-500" />
                    Veiligheidsrichtlijnen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Begin met lichte impact, bouw langzaam op',
                      'Houd de schouders ontspannen en beweeg vloeiend',
                      'Impact moet op het harde deel van de arm, niet op de zachte onderkant',
                      'Luister naar je lichaam en die van je partner'
                    ].map((guideline, index) => (
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

              {/* Partner Training */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="mr-3 h-6 w-6 text-purple-500" />
                    Partner Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed">
                      Regelmatige training met een partner is essentieel om niet alleen te leren slaan, maar ook om te leren incasseren. Deze oefeningen helpen bij het ontwikkelen van wederzijds respect en begrip voor de impact van technieken.
                    </p>
                    <div className="grid gap-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">Wederzijds respect en communicatie</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">Geleidelijke opbouw van intensiteit</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">Constructieve feedback en aanpassing</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        case 'exercises':
          return (
            <div className="space-y-6">
              {/* Introductie */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Activity className="mr-3 h-6 w-6 text-green-500" />
                    Ude Tanren Oefeningen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">
                    Ude Tanren oefeningen zijn partneroefeningen die het lichaam conditioneren voor impact en contact. Deze oefeningen helpen bij het ontwikkelen van kracht, uithoudingsvermogen en het vermogen om impact te geven en te ontvangen.
                  </p>
                </CardContent>
              </Card>

              {/* Basis Oefeningen */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Target className="mr-3 h-6 w-6 text-blue-500" />
                    Basis Oefeningen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold text-lg mb-2">Swinging Arm Drill</h4>
                      <p className="text-base leading-relaxed mb-2">Basis oefening voor arm conditionering met ontspannen zwaaibewegingen</p>
                      <div className="text-sm text-muted-foreground">
                        <strong>Techniek:</strong> Beide partners zwaaien de linkerarm ontspannen tegen elkaar aan (binnenkant van de arm)
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold text-lg mb-2">Stepping & Blocking Drill</h4>
                      <p className="text-base leading-relaxed mb-2">Dynamische oefening met stappen vooruit en achteruit, blokken en slagen</p>
                      <div className="text-sm text-muted-foreground">
                        <strong>Uitvoering:</strong> Partner A stapt naar voren met een stoot, Partner B stapt achteruit en blokt
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Geavanceerde Oefeningen */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Zap className="mr-3 h-6 w-6 text-orange-500" />
                    Geavanceerde Oefeningen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <h4 className="font-semibold text-lg mb-2">Ippon Uke Barai</h4>
                      <p className="text-base leading-relaxed mb-2">One-step blocking practice met jodan, chudan en gedan blokken</p>
                      <div className="text-sm text-muted-foreground">
                        <strong>Focus:</strong> Behoud sanchin dachi positie en synchroniseer bewegingen met partner
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <h4 className="font-semibold text-lg mb-2">Sandan Uke Barai</h4>
                      <p className="text-base leading-relaxed mb-2">Three-step blocking practice met opeenvolgende technieken</p>
                      <div className="text-sm text-muted-foreground">
                        <strong>Belangrijk:</strong> Niet ontwijken, maar contact maken en timing oefenen
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <h4 className="font-semibold text-lg mb-2">Wrist Rotation</h4>
                      <p className="text-base leading-relaxed mb-2">Pols rotatie oefening voor verbetering van verbinding en stabiliteit</p>
                      <div className="text-sm text-muted-foreground">
                        <strong>Voordelen:</strong> Verbetert verbinding (muchimi) en ontwikkelt kracht in het bovenlichaam
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Training Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Brain className="mr-3 h-6 w-6 text-purple-500" />
                    Training Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Begin altijd met lichte impact en bouw geleidelijk op',
                      'Focus op juiste techniek voordat je intensiteit verhoogt',
                      'Communiceer duidelijk met je partner over comfortniveau',
                      'Neem voldoende rust tussen oefeningen',
                      'Integreer ademhaling in alle bewegingen'
                    ].map((tip, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          );
        default:
          return null;
      }
    }

    // Original logic for other equipment
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