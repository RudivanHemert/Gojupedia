import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card, CardContent } from '@/components/ui/card';

// Define kata data structure based on available separate files
const kataList = [
  { id: 'gekisai-dai-ichi', category: 'kaishugata' },
  { id: 'gekisai-dai-ni', category: 'kaishugata' },
  { id: 'saifa', category: 'kaishugata' },
  { id: 'sanchin', category: 'heishugata' },
  { id: 'tensho', category: 'heishugata' },
  { id: 'seiyunchin', category: 'kaishugata' },
  { id: 'shisochin', category: 'kaishugata' },
  { id: 'sanseru', category: 'kaishugata' },
  { id: 'sepai', category: 'kaishugata' },
  { id: 'kururunfa', category: 'kaishugata' },
  { id: 'sesan', category: 'kaishugata' },
  { id: 'peichurin', category: 'kaishugata' }
];

const KataTheoryPage = () => {
  const { t } = useTranslation();

  // Group katas by category
  const katasByCategory = kataList.reduce((acc, kata) => {
    if (!acc[kata.category]) {
      acc[kata.category] = [];
    }
    acc[kata.category].push(kata);
    return acc;
  }, {} as Record<string, typeof kataList>);

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
        title={t('kata.theory.title')}
        description={t('kata.theory.description')}
        backUrl="/theory"
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-8"
        >
          {Object.entries(katasByCategory).map(([category, categoryKatas]) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 text-foreground">
                  {getCategoryTitle(category)}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {getCategoryDescription(category)}
                </p>
              </div>
              <div className="grid gap-4">
                {categoryKatas.map((kata) => (
                  <Link
                    key={kata.id}
                    to={`/theory/kata/${kata.id}`}
                    className="block transition-transform hover:scale-[1.02]"
                  >
                    <Card className="overflow-hidden border border-border hover:border-red-500 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {t(`kata.${kata.id}.name`)}
                              </h3>
                            </div>
                            <p className="text-muted-foreground italic">
                              {t(`kata.${kata.id}.meaning`)}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {t(`kata.${kata.id}.description`)}
                            </p>
                            <div className="text-muted-foreground text-xs">
                              <span className="font-medium">Herkomst:</span> {t(`kata.${kata.id}.history`)}
                            </div>
                          </div>
                          <ChevronRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
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

export default KataTheoryPage; 
