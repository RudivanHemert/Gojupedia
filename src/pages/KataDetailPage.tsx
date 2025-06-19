import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { katas } from '@/data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollingText } from '@/components/ui/scrolling-text';
import MediaGallery from '@/components/media/MediaGallery';
import InteractiveKataSteps, { KataStep } from '@/components/practice/InteractiveKataSteps';
import { useProgress } from '@/hooks/useProgress';
import { useTranslation } from 'react-i18next';

// Import detailed kata steps for all languages
import { gekisaiDaiIchiSteps as gekisaiDaiIchiStepsEn } from '@/data/gekisai-dai-ichi.en';
import { gekisaiDaiIchiSteps as gekisaiDaiIchiStepsDe } from '@/data/gekisai-dai-ichi.de';
import { gekisaiDaiIchiSteps as gekisaiDaiIchiStepsEs } from '@/data/gekisai-dai-ichi.es';
import { gekisaiDaiIchiSteps as gekisaiDaiIchiStepsFr } from '@/data/gekisai-dai-ichi.fr';
import { gekisaiDaiIchiSteps as gekisaiDaiIchiStepsIt } from '@/data/gekisai-dai-ichi.it';
import { gekisaiDaiIchiSteps as gekisaiDaiIchiStepsNl } from '@/data/gekisai-dai-ichi.nl';

// Import detailed Gekisai Dai Ni steps for all languages
import { gekisaiDaiNiSteps as gekisaiDaiNiStepsEn } from '@/data/gekisai-dai-ni.en';
import { gekisaiDaiNiSteps as gekisaiDaiNiStepsDe } from '@/data/gekisai-dai-ni.de';
import { gekisaiDaiNiSteps as gekisaiDaiNiStepsEs } from '@/data/gekisai-dai-ni.es';
import { gekisaiDaiNiSteps as gekisaiDaiNiStepsFr } from '@/data/gekisai-dai-ni.fr';
import { gekisaiDaiNiSteps as gekisaiDaiNiStepsIt } from '@/data/gekisai-dai-ni.it';
import { gekisaiDaiNiSteps as gekisaiDaiNiStepsNl } from '@/data/gekisai-dai-ni.nl';

// Import detailed Sanchin steps for all languages
import { sanchinSteps as sanchinStepsEn } from '@/data/sanchin.en';
import { sanchinSteps as sanchinStepsDe } from '@/data/sanchin.de';
import { sanchinSteps as sanchinStepsEs } from '@/data/sanchin.es';
import { sanchinSteps as sanchinStepsFr } from '@/data/sanchin.fr';
import { sanchinSteps as sanchinStepsIt } from '@/data/sanchin.it';
import { sanchinSteps as sanchinStepsNl } from '@/data/sanchin.nl';

// Import detailed Shisochin steps for all languages
import { shisochinSteps as shisochinStepsEn } from '@/data/shisochin.en';
import { shisochinSteps as shisochinStepsDe } from '@/data/shisochin.de';
import { shisochinSteps as shisochinStepsEs } from '@/data/shisochin.es';
import { shisochinSteps as shisochinStepsFr } from '@/data/shisochin.fr';
import { shisochinSteps as shisochinStepsIt } from '@/data/shisochin.it';
import { shisochinSteps as shisochinStepsNl } from '@/data/shisochin.nl';

// Import detailed Sanseru steps for all languages
import { sanseruSteps as sanseruStepsEn } from '@/data/sanseru.en';
import { sanseruSteps as sanseruStepsDe } from '@/data/sanseru.de';
import { sanseruSteps as sanseruStepsEs } from '@/data/sanseru.es';
import { sanseruSteps as sanseruStepsFr } from '@/data/sanseru.fr';
import { sanseruSteps as sanseruStepsIt } from '@/data/sanseru.it';
import { sanseruSteps as sanseruStepsNl } from '@/data/sanseru.nl';

// Import detailed Saifa steps for all languages
import { saifaSteps as saifaStepsEn } from '@/data/saifa.en';
import { saifaSteps as saifaStepsDe } from '@/data/saifa.de';
import { saifaSteps as saifaStepsEs } from '@/data/saifa.es';
import { saifaSteps as saifaStepsFr } from '@/data/saifa.fr';
import { saifaSteps as saifaStepsIt } from '@/data/saifa.it';
import { saifaSteps as saifaStepsNl } from '@/data/saifa.nl';

// Import detailed Seiyunchin steps for all languages
import { seiyunchinSteps as seiyunchinStepsEn } from '@/data/seiyunchin.en';
import { seiyunchinSteps as seiyunchinStepsDe } from '@/data/seiyunchin.de';
import { seiyunchinSteps as seiyunchinStepsEs } from '@/data/seiyunchin.es';
import { seiyunchinSteps as seiyunchinStepsFr } from '@/data/seiyunchin.fr';
import { seiyunchinSteps as seiyunchinStepsIt } from '@/data/seiyunchin.it';
import { seiyunchinSteps as seiyunchinStepsNl } from '@/data/seiyunchin.nl';

const KataDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { markAccessed } = useProgress();
  
  // Get kata data based on ID
  const kata = id ? katas.find(k => k.id === id) : null;
  
  useEffect(() => {
    if (kata) {
      // Mark this kata as accessed for progress tracking
      markAccessed(kata.id, 'kata');
    }
  }, [kata, markAccessed]);
  
  // Get detailed kata steps based on current language
  const getDetailedSteps = (kataId: string): KataStep[] => {
    const currentLang = i18n.language;
    
    switch (kataId) {
      case 'gekisai-dai-ichi':
        switch (currentLang) {
          case 'de':
            return gekisaiDaiIchiStepsDe;
          case 'es':
            return gekisaiDaiIchiStepsEs;
          case 'fr':
            return gekisaiDaiIchiStepsFr;
          case 'it':
            return gekisaiDaiIchiStepsIt;
          case 'nl':
            return gekisaiDaiIchiStepsNl;
          default:
            return gekisaiDaiIchiStepsEn;
        }
      case 'gekisai-dai-ni':
        switch (currentLang) {
          case 'de':
            return gekisaiDaiNiStepsDe;
          case 'es':
            return gekisaiDaiNiStepsEs;
          case 'fr':
            return gekisaiDaiNiStepsFr;
          case 'it':
            return gekisaiDaiNiStepsIt;
          case 'nl':
            return gekisaiDaiNiStepsNl;
          default:
            return gekisaiDaiNiStepsEn;
        }
      case 'sanchin':
        switch (currentLang) {
          case 'de':
            return sanchinStepsDe;
          case 'es':
            return sanchinStepsEs;
          case 'fr':
            return sanchinStepsFr;
          case 'it':
            return sanchinStepsIt;
          case 'nl':
            return sanchinStepsNl;
          default:
            return sanchinStepsEn;
        }
      case 'shisochin':
        switch (currentLang) {
          case 'de':
            return shisochinStepsDe;
          case 'es':
            return shisochinStepsEs;
          case 'fr':
            return shisochinStepsFr;
          case 'it':
            return shisochinStepsIt;
          case 'nl':
            return shisochinStepsNl;
          default:
            return shisochinStepsEn;
        }
      case 'sanseru':
        switch (currentLang) {
          case 'de':
            return sanseruStepsDe;
          case 'es':
            return sanseruStepsEs;
          case 'fr':
            return sanseruStepsFr;
          case 'it':
            return sanseruStepsIt;
          case 'nl':
            return sanseruStepsNl;
          default:
            return sanseruStepsEn;
        }
      case 'saifa':
        switch (currentLang) {
          case 'de':
            return saifaStepsDe;
          case 'es':
            return saifaStepsEs;
          case 'fr':
            return saifaStepsFr;
          case 'it':
            return saifaStepsIt;
          case 'nl':
            return saifaStepsNl;
          default:
            return saifaStepsEn;
        }
      case 'seiyunchin':
        switch (currentLang) {
          case 'de':
            return seiyunchinStepsDe;
          case 'es':
            return seiyunchinStepsEs;
          case 'fr':
            return seiyunchinStepsFr;
          case 'it':
            return seiyunchinStepsIt;
          case 'nl':
            return seiyunchinStepsNl;
          default:
            return seiyunchinStepsEn;
        }
      // Add other kata cases here as needed
      default:
        return [];
    }
  };

  // Format kata steps for the interactive component
  const formattedSteps = useMemo(() => {
    if (!kata) {
      return [];
    }

    // First try to get detailed steps
    const detailedSteps = getDetailedSteps(kata.id);
    if (detailedSteps.length > 0) {
      return detailedSteps;
    }

    // Fallback to translation-based steps
    const stepsCountKey = `kata.${kata.id}.stepsCount`;
    const rawStepsCount = t(stepsCountKey);
    let stepsCount = 0;
    if (rawStepsCount && !isNaN(parseInt(rawStepsCount, 10))) {
      stepsCount = parseInt(rawStepsCount, 10);
    } else {
      if (Array.isArray(kata.steps) && kata.steps.length > 0) {
        return kata.steps.map((stepContent, index) => {
          const step = {
            id: `${kata.id}-step-${index + 1}`,
            number: index + 1,
            title: t(`kata.${kata.id}.steps.step${index + 1}.title`, `Stap ${index + 1} (fallback)`),
            description: t(`kata.${kata.id}.steps.step${index + 1}.description`, typeof stepContent === 'string' ? stepContent : t('common.descriptionNotAvailable'))
          };
          return step;
        });
      }
      return [];
    }

    if (stepsCount <= 0) {
        return [];
    }
    
    const translatedSteps: KataStep[] = [];
    for (let i = 0; i < stepsCount; i++) {
      const stepNum = i + 1;
      const titleKey = `kata.${kata.id}.steps.step${stepNum}.title`;
      const descriptionKey = `kata.${kata.id}.steps.step${stepNum}.description`;

      const title = t(titleKey);
      const description = t(descriptionKey);

      const finalTitle = title === titleKey ? `Step ${stepNum} Title Missing (Key: ${titleKey})` : title;
      const finalDescription = description === descriptionKey ? `Step ${stepNum} Description Missing (Key: ${descriptionKey})` : description;

      const step: KataStep = {
        id: `${kata.id}-step-${stepNum}`,
        number: stepNum,
        title: finalTitle,
        description: finalDescription
      };
      translatedSteps.push(step);
    }
    return translatedSteps;
  }, [kata, t]);
  
  if (!kata) {
    return (
      <div className="p-4 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-2xl font-bold mb-2 text-destructive">{t('kataDetailPage.notFound.title')}</h1>
          <p className="mb-6 text-muted-foreground">{t('kataDetailPage.notFound.message')}</p>
          <Button onClick={() => navigate('/kata')} variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> {t('kataDetailPage.notFound.backButton')}
          </Button>
        </motion.div>
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url: string | undefined | null) => {
    if (!url || typeof url !== 'string') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const kataVideoId = getYouTubeId(kata.videoUrl);
  // Handle bunkai which can be either a string (URL) or array of BunkaiDetail objects
  const bunkaiVideoId = typeof kata.bunkai === 'string' ? getYouTubeId(kata.bunkai) : null;
  const shimeVideoId = kata.shime ? getYouTubeId(kata.shime) : null;

  return (
    <>
      {/* Header with Navigation */}
      {/* <div className="relative">
        <div className="h-64 overflow-hidden">
          <img 
            src={kata.images[0]} 
            alt={t(`kata.${kata.id}.name`)}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/Images/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-white text-3xl font-bold">{t(`kata.${kata.id}.name`)}</h1>
              <p className="text-white opacity-90">{t(`kata.${kata.id}.japaneseName`)}</p>
              <p className="text-white/70 text-sm italic">{t(`kata.${kata.id}.meaning`)}</p>
            </div>
            <Badge>{t(`kata.levels.${kata.level.toLowerCase()}`)}</Badge>
          </div>
        </div>
      </div> */}
      
      {/* {dataLoadError && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 m-4 rounded-md flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold">Warning: Data Loading Issue</p>
            <p className="text-sm">{dataLoadError}</p>
          </div>
        </div>
      )} */}
      
      {/* Content Area */}
      <div className="p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="overview">{t('kataDetailPage.tabs.overview')}</TabsTrigger>
              <TabsTrigger value="steps">{t('kataDetailPage.tabs.steps')}</TabsTrigger>
              <TabsTrigger value="bunkai">{t('kataDetailPage.tabs.bunkai')}</TabsTrigger>
              <TabsTrigger value="shime">{t('kataDetailPage.tabs.shime')}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <motion.div variants={fadeIn} initial="hidden" animate="visible" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">{t('kataDetailPage.overview.descriptionTitle')}</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {t(`kata.${kata.id}.description`)}
                    </p>
                  </CardContent>
                </Card>

                {kata.history && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-3 text-gray-800">{t('kataDetailPage.overview.historyTitle')}</h2>
                      <p className="text-gray-700 leading-relaxed">
                        {t(`kata.${kata.id}.history`)}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {kata.culturalSignificance && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-3 text-gray-800">{t('kataDetailPage.overview.culturalSignificanceTitle')}</h2>
                      <p className="text-gray-700 leading-relaxed">
                        {t(`kata.${kata.id}.culturalSignificance`)}
                      </p>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-serif font-semibold mb-2">{t('kataDetailPage.overview.atAGlanceTitle')}</h2>
                    <div className="grid grid-cols-2 gap-y-2">
                      <div className="text-gray-500 dark:text-gray-400">{t('kataDetailPage.overview.movementsLabel')}</div>
                      <div className="font-medium">{kata.movements}</div>
                      
                      <div className="text-gray-500 dark:text-gray-400">{t('kataDetailPage.overview.durationLabel')}</div>
                      <div className="font-medium">{kata.duration}</div>
                      
                      <div className="text-gray-500 dark:text-gray-400">{t('kataDetailPage.overview.originLabel')}</div>
                      <div className="font-medium">{kata.origin}</div>
                      
                      <div className="text-gray-500 dark:text-gray-400">{t('kataDetailPage.overview.levelLabel')}</div>
                      <div className="font-medium">{t(`kata.levels.${kata.level.toLowerCase()}`)}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="steps">
              <motion.div variants={fadeIn} initial="hidden" animate="visible" className="space-y-6">
                <h2 className="text-xl font-serif font-semibold mb-2">{t('kataDetailPage.steps.sequenceTitle')}</h2>
                
                {formattedSteps.length === 0 ? (
                  <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-md">
                    <p className="text-sm font-medium">{t('kataDetailPage.steps.noSteps')}</p>
                    <p className="text-xs mt-1">{t('kataDetailPage.steps.stepsDataMissing')}</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-2">
                      <p className="text-sm text-gray-500">
                        {t('kataDetailPage.steps.totalSteps', { count: formattedSteps.length })}
                      </p>
                    </div>
                    <InteractiveKataSteps 
                      kataId={kata.id}
                      kataName={kata.name}
                      steps={formattedSteps}
                      showImages={false} // Explicitly set showImages to false for kata steps
                    />
                  </>
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="bunkai" className="p-4 bg-card rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{t('bunkai.title')}</h3>
                <Link 
                  to={`/bunkai/${kata.id}`}
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                >
                  {t('bunkaiDetailPage.viewAllBunkai')}
                </Link>
              </div>
              <p className="text-muted-foreground mb-4">
                {t(`bunkai.kata.${kata.id}.description`)}
              </p>
              {/* Bunkai video display will go here */}
              {bunkaiVideoId && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">{t('kataDetailPage.bunkai.videoTitle')}</h2>
                    <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${bunkaiVideoId}`}
                        title={t('kataDetailPage.bunkai.videoTitle')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      >
                      </iframe>
                    </div>
                  </CardContent>
                </Card>
              )}
              {/* Placeholder for detailed bunkai steps */}
              <div className="mt-6 space-y-4">
                {kata && Array.from({ length: 10 }).map((_, index) => {
                  const bunkaiNum = index + 1;
                  const nameKey = `bunkai.kata.${kata.id}.bunkai${bunkaiNum}.name`;
                  const attackKey = `bunkai.kata.${kata.id}.bunkai${bunkaiNum}.attack`;
                  const defenseKey = `bunkai.kata.${kata.id}.bunkai${bunkaiNum}.defense`;
                  const counterAttackKey = `bunkai.kata.${kata.id}.bunkai${bunkaiNum}.counterAttack`;
                  const footworkKey = `bunkai.kata.${kata.id}.bunkai${bunkaiNum}.footwork`;
                  const vitalPointsKey = `bunkai.kata.${kata.id}.bunkai${bunkaiNum}.vitalPoints`;
                  const notesKey = `bunkai.kata.${kata.id}.bunkai${bunkaiNum}.notes`;

                  const name = t(nameKey);
                  // If the name translation is the key itself, it means the bunkai item doesn't exist
                  if (name === nameKey) {
                    return null;
                  }

                  return (
                    <Card key={bunkaiNum}>
                      <CardHeader>
                        <CardTitle>{name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {t(attackKey) !== attackKey && <p><strong>{t('bunkai.details.attack')}:</strong> {t(attackKey)}</p>}
                        {t(defenseKey) !== defenseKey && <p><strong>{t('bunkai.details.defense')}:</strong> {t(defenseKey)}</p>}
                        {t(counterAttackKey) !== counterAttackKey && <p><strong>{t('bunkai.details.counterAttack')}:</strong> {t(counterAttackKey)}</p>}
                        {t(footworkKey) !== footworkKey && <p><strong>{t('bunkai.details.footwork')}:</strong> {t(footworkKey)}</p>}
                        {t(vitalPointsKey) !== vitalPointsKey && <p><strong>{t('bunkai.details.vitalPoints')}:</strong> {t(vitalPointsKey)}</p>}
                        {t(notesKey) !== notesKey && <p><strong>{t('bunkai.details.notes')}:</strong> {t(notesKey)}</p>}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="shime">
              <motion.div variants={fadeIn} initial="hidden" animate="visible" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">{t('kataDetailPage.shime.title')}</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {t('kataDetailPage.shime.description')}
                    </p>
                  </CardContent>
                </Card>
                {shimeVideoId && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-3 text-gray-800">{t('kataDetailPage.shime.videoTitle')}</h2>
                      <div className="relative pt-[56.25%] bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <iframe 
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${shimeVideoId}`}
                          title={`${kata.name} Shime Demonstration`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </>
  );
};

export default KataDetailPage;
