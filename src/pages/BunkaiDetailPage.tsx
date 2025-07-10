import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { katas } from '@/data';
import { Kata, BunkaiDetail } from '@/types';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const BunkaiDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [kata, setKata] = useState<Kata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundKata = katas.find(k => k.id === id);
    setKata(foundKata || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <TheoryHeader 
          title={t('common.loading', 'Laden...')}
          description=""
        />
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <p>{t('common.loading', 'Laden...')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!kata) {
    return (
      <div className="min-h-screen bg-background">
        <TheoryHeader 
          title={t('bunkaiDetailPage.kataNotFound', 'Kata niet gevonden')}
          description=""
          backUrl="/bunkai"
        />
        <div className="p-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            </motion.div>
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    }
  };
  
  const renderBunkaiContent = () => {
    if (!kata.bunkai) {
      return <p>{t('bunkaiDetailPage.noBunkaiAvailable', 'Geen Bunkai beschikbaar voor deze kata.')}</p>;
    }

    if (typeof kata.bunkai === 'string') {
      // It's a URL, display a link to the video
      return (
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>{t('bunkaiDetailPage.videoTitle', 'Bunkai Video')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t('bunkaiDetailPage.videoDescription', 'Bekijk de bunkai demonstratie video op YouTube.')}</p>
              <Button asChild>
                <a href={kata.bunkai} target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  {t('bunkaiDetailPage.watchOnYouTube', 'Bekijk op YouTube')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      );
    }

    // It's an array of BunkaiDetail
    const bunkaiList = kata.bunkai as BunkaiDetail[];
    if (bunkaiList.length === 0) {
      return <p>{t('bunkaiDetailPage.noBunkaiDetails', 'Geen gedetailleerde Bunkai informatie beschikbaar.')}</p>;
    }

    return bunkaiList.map((bunkai, index) => (
      <motion.div key={index} variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>{bunkai.title}</CardTitle>
            {/* No description field on BunkaiDetail */}
          </CardHeader>
          <CardContent className="space-y-4">
            {bunkai.attack && (
              <div>
                <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                  {t('bunkai.details.attack', 'Attack')}
                </h4>
                <p>{bunkai.attack}</p>
              </div>
            )}
            {bunkai.defense && (
              <div>
                <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                  {t('bunkai.details.defense', 'Defense')}
                </h4>
                <p>{bunkai.defense}</p>
              </div>
            )}
            {bunkai.counterAttack && (
              <div>
                <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                  {t('bunkai.details.counterAttack', 'Counter Attack')}
                </h4>
                <p>{bunkai.counterAttack}</p>
              </div>
            )}
            {bunkai.footwork && (
              <div>
                <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                  {t('bunkai.details.footwork', 'Footwork')}
                </h4>
                <p>{bunkai.footwork}</p>
              </div>
            )}
            {bunkai.vitalPoints && (
              <div>
                <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                  {t('bunkai.details.vitalPoints', 'Vital Points')}
                </h4>
                <p>{bunkai.vitalPoints}</p>
              </div>
            )}
            {bunkai.notes && (
              <div>
                <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                  {t('bunkai.details.notes', 'Notes')}
                </h4>
                <p>{bunkai.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={kata.name ?? ''}
        description={kata.description ?? ''}
        backUrl="/bunkai"
      />
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {renderBunkaiContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BunkaiDetailPage;