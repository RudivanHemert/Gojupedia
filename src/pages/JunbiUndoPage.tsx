import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const JunbiUndoPage = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

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

  const exerciseVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('junbiUndo.title')}
        description={t('junbiUndo.description')}
        backUrl="/practice"
      />
      
      <div className="p-4 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Introduction */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('junbiUndo.intro')}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Junbi Undo Section */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">{t('junbiUndo.junbiUndoSection.title')}</Badge>
                  <span>{t('junbiUndo.junbiUndoSection.subtitle')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600">
                  {t('junbiUndo.junbiUndoSection.note')}
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {(t('junbiUndo.exercises.list', { returnObjects: true }) as any[]).map((exercise: any, index: number) => (
                    <motion.div 
                      key={exercise.id} 
                      variants={exerciseVariants}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                    >
                      {/* Image at the top, clickable for lightbox */}
                      {exercise.image && (
                        <div className="w-full flex justify-center mb-4">
                          <img 
                            src={`/Images/JunbiUndo/${exercise.image}`}
                            alt={exercise.name}
                            className="w-48 h-48 object-contain rounded-lg border border-border cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setLightbox({ open: true, src: `/Images/JunbiUndo/${exercise.image}`, alt: exercise.name })}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <h4 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                        {exercise.name}
                      </h4>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {exercise.description}
                      </p>
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-sm text-blue-800 font-medium mb-1">
                          Instructies:
                        </p>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          {exercise.instructions}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Lightbox modal for enlarged image */}
                {lightbox.open && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setLightbox({ open: false, src: '', alt: '' })}>
                    <div className="relative max-w-full max-h-full p-4" onClick={e => e.stopPropagation()}>
                      <img src={lightbox.src} alt={lightbox.alt} className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg" />
                      <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow" onClick={() => setLightbox({ open: false, src: '', alt: '' })}>
                        <span className="text-xl">&times;</span>
                      </button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Hojo Undo Section */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">{t('junbiUndo.hojoUndoSection.title')}</Badge>
                  <span>{t('junbiUndo.hojoUndoSection.subtitle')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  {t('junbiUndo.hojoUndoSection.intro')}
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Notitie:</strong> {t('junbiUndo.hojoUndoSection.note')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Breathing Section */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">{t('junbiUndo.breathingSection.title')}</Badge>
                  <span>{t('junbiUndo.breathingSection.subtitle')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  De ademhalingsoefeningen zijn een essentieel onderdeel van Junbi Undo en helpen bij het ontwikkelen van de juiste ademhalingstechnieken die worden gebruikt in Goju Ryu karate.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default JunbiUndoPage; 