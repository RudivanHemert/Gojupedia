import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useKataData } from '@/utils/kataDataLoader';

// Define available kata IDs based on separate files
const availableKatas = [
  'saifa',
  'gekisai-dai-ichi',
  'gekisai-dai-ni',
  'sanchin',
  'tensho',
  'seiyunchin',
  'shisochin',
  'sanseru',
  'sepai',
  'kururunfa',
  'sesan',
  'peichurin'
];

const KataTheoryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Debug logging
  console.log('Translation keys test:');
  console.log('kataTheoryDetailPage.tabs.origin:', t('kataTheoryDetailPage.tabs.origin'));
  console.log('kataTheoryDetailPage.tabs.meaning:', t('kataTheoryDetailPage.tabs.meaning'));
  console.log('kataTheoryDetailPage.tabs.significance:', t('kataTheoryDetailPage.tabs.significance'));
  console.log('kataTheoryDetailPage.tabs.details:', t('kataTheoryDetailPage.tabs.details'));
  console.log('kataTheoryDetailPage.sections.originTitle:', t('kataTheoryDetailPage.sections.originTitle'));

  const kataExists = availableKatas.includes(id || '');
  const kataData = useKataData(id || '');

  if (!kataExists) {
    return (
      <div className="min-h-screen bg-background">
        <TheoryHeader 
          title={t('kataTheoryDetailPage.notFound.title')}
          description={t('kataTheoryDetailPage.notFound.message')}
          backUrl="/theory/kata"
        />
        <div className="p-4">
          <div className="w-full text-center">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t('kataTheoryDetailPage.notFound.title')}</h2>
            <p className="text-muted-foreground mb-6">
              {t('kataTheoryDetailPage.notFound.message')}
            </p>
            <Button onClick={() => navigate('/theory/kata')}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              {t('kataTheoryDetailPage.notFound.backButton')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={kataData?.name || t(`kata.${id}.name`)}
        description={kataData?.meaning || t(`kata.${id}.meaning`)}
        backUrl="/theory/kata"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-6"
        >
          {/* Kata Overview Card */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">{kataData?.name || t(`kata.${id}.name`)}</h2>
                </div>
                <p className="text-xl text-muted-foreground italic">
                  {kataData?.meaning || t(`kata.${id}.meaning`)}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {kataData?.description || t(`kata.${id}.description`)}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs for different sections */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="origin" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="origin">{t('kataTheoryDetailPage.tabs.origin')}</TabsTrigger>
                <TabsTrigger value="meaning">{t('kataTheoryDetailPage.tabs.meaning')}</TabsTrigger>
                <TabsTrigger value="significance">{t('kataTheoryDetailPage.tabs.significance')}</TabsTrigger>
                <TabsTrigger value="details">{t('kataTheoryDetailPage.tabs.details')}</TabsTrigger>
              </TabsList>

              <TabsContent value="origin" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('kataTheoryDetailPage.sections.originTitle', { kataName: kataData?.name || t(`kata.${id}.name`) })}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {kataData?.history || t(`kata.${id}.history`)}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="meaning" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('kataTheoryDetailPage.sections.meaningTitle', { kataName: kataData?.name || t(`kata.${id}.name`) })}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('kataTheoryDetailPage.labels.translation')}</h4>
                        <p className="text-muted-foreground">{kataData?.meaning || t(`kata.${id}.meaning`)}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('kataTheoryDetailPage.labels.description')}</h4>
                        <p className="text-muted-foreground">{kataData?.description || t(`kata.${id}.description`)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="significance" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('kataTheoryDetailPage.sections.significanceTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {kataData?.culturalSignificance || t(`kata.${id}.culturalSignificance`)}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <div className="space-y-6">
                  {/* Detailed sections for kata with individual data files */}
                  {kataData && (
                    <>
                      {/* Detailed Meaning */}
                      {kataData.detailedMeaning && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.detailedMeaning.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.detailedMeaning.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Origin */}
                      {kataData.origin && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.origin.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.origin.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Transmission */}
                      {kataData.transmission && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.transmission.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.transmission.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Historical Development */}
                      {kataData.historicalDevelopment && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.historicalDevelopment.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.historicalDevelopment.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Technical Features */}
                      {kataData.technicalFeatures && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.technicalFeatures.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.technicalFeatures.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Controversy */}
                      {kataData.controversy && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.controversy.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.controversy.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Relationships */}
                      {kataData.relationships && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.relationships.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.relationships.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Modern Practice */}
                      {kataData.modernPractice && (
                        <Card>
                          <CardHeader>
                            <CardTitle>{kataData.modernPractice.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {kataData.modernPractice.content}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KataTheoryDetailPage; 
