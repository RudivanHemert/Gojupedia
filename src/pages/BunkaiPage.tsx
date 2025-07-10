import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { katas } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const BunkaiPage = () => {
  const { t } = useTranslation();

  // Filter katas that have bunkai and group them by category
  const bunkaiByCategory = katas
    .filter(kata => kata.bunkai && (typeof kata.bunkai === 'string' || kata.bunkai.length > 0))
    .reduce((acc, kata) => {
      if (!acc[kata.category]) {
        acc[kata.category] = [];
      }
      acc[kata.category].push(kata);
      return acc;
    }, {} as Record<string, typeof katas>);

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

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'kaishugata':
        return t('kata.categories.kaishugata');
      case 'heishugata':
        return t('kata.categories.heishugata');
      default:
        return category;
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'kaishugata':
        return t('kata.categories.kaishugataDescription');
      case 'heishugata':
        return t('kata.categories.heishugataDescription');
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('bunkai.title')}
        description={t('bunkai.description')}
        backUrl="/practice"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {Object.entries(bunkaiByCategory).map(([category, categoryKatas]) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                  {getCategoryTitle(category)}
                </h2>
                <p className="text-gray-600 text-lg">
                  {getCategoryDescription(category)}
                </p>
              </div>
              <div className="grid gap-4">
                {categoryKatas.map((kata) => (
                  <Link 
                    key={kata.id} 
                    to={`/bunkai/${kata.id}`}
                    className="block transition-transform hover:scale-[1.02]"
                  >
                    <Card className="overflow-hidden border border-border hover:border-red-500 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {t(`kata.${kata.id}.name`)}
                              </h3>
                              <Badge variant="secondary" className="bg-red-100 text-red-800">
                                {t(`kata.${kata.id}.japaneseName`)}
                              </Badge>
                            </div>
                            <p className="text-gray-600 italic">
                              {t(`kata.${kata.id}.meaning`)}
                            </p>
                          </div>
                          <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BunkaiPage; 