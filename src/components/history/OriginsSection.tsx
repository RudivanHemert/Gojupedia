import React from 'react';
import { motion } from 'framer-motion';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useTranslation } from 'react-i18next';
import { useMarkdownContent } from '@/utils/markdown';
import TheoryHeader from '@/components/theory/TheoryHeader';

const OriginsSection = () => {
  const { t } = useTranslation();
  const markdownContent = useMarkdownContent('history/origins');

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('history.origins')}
        description={t('history.origins-desc')}
        backUrl="/history"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OriginsSection;
