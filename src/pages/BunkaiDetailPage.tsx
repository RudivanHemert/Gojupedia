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
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <p>{t('common.loading', 'Laden...')}</p>
        </div>
      </div>
    );
  }

  if (!kata) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-destructive mb-4">{t('bunkaiDetailPage.kataNotFound', 'Kata niet gevonden')}</p>
          <Link to="/bunkai">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.backToBunkai', 'Terug naar Bunkai Overzicht')}
            </Button>
          </Link>
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

    return (
      <Accordion type="single" collapsible className="w-full">
        {bunkaiList.map((detail, index) => (
          <motion.div key={detail.id || index} variants={itemVariants}>
            <AccordionItem value={detail.id || `bunkai-${index}`}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {detail.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-3 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div><strong>{t('bunkaiDetailPage.attack', 'Aanval')}:</strong> {detail.attack}</div>
                  <div><strong>{t('bunkaiDetailPage.defense', 'Verdediging')}:</strong> {detail.defense}</div>
                  <div><strong>{t('bunkaiDetailPage.counterAttack', 'Tegenaanval')}:</strong> {detail.counterAttack}</div>
                  <div><strong>{t('bunkaiDetailPage.footwork', 'Voetenwerk')}:</strong> {detail.footwork}</div>
                </div>
                <p><strong>{t('bunkaiDetailPage.vitalPoints', 'Vitale Punten')}:</strong> {detail.vitalPoints}</p>
                {detail.notes && <p><strong>{t('bunkaiDetailPage.notes', 'Aandachtspunten')}:</strong> {detail.notes}</p>}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    );
  };

  return (
    <div className="p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-6"
      >
        <Button asChild variant="outline" className="mb-4">
          <Link to="/bunkai">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.backToBunkai', 'Terug naar Bunkai Overzicht')}
          </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{t(`kata.${kata.id}.name`, kata.name || kata.id)} - {t('bunkai.title', 'Bunkai')}</CardTitle>
            <CardDescription className="text-lg">{t(`kata.${kata.id}.description`, kata.description || '')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="text-sm">
              {t(`kata.levels.${kata.level.toLowerCase()}`, kata.level)}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-4"
      >
        {renderBunkaiContent()}
      </motion.div>
    </div>
  );
};

export default BunkaiDetailPage; 