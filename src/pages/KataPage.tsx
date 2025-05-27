import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { katas } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const KataPage = () => {
  const { t } = useTranslation();

  // Group katas by level
  const katasByLevel = katas.reduce((acc, kata) => {
    if (!acc[kata.level]) {
      acc[kata.level] = [];
    }
    acc[kata.level].push(kata);
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

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kata.theory.title')}
        description={t('kata.theory.description')}
      />
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {Object.entries(katasByLevel).map(([level, levelKatas]) => (
            <motion.div key={level} variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {t(`kata.levels.${level.toLowerCase()}`)}
              </h2>
              <div className="grid gap-4">
                {levelKatas.map((kata) => (
                  <Link 
                    key={kata.id} 
                    to={`/kata/${kata.id}`}
                    className="block transition-transform hover:scale-[1.02]"
                  >
                    <Card className="overflow-hidden border border-gray-200 hover:border-red-500 transition-colors">
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

export default KataPage;
