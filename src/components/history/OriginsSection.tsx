import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useTranslation } from 'react-i18next';
import { useMarkdownContent } from '@/utils/markdown';

const OriginsSection = () => {
  const { t } = useTranslation();
  const markdownContent = useMarkdownContent('history/origins');

  return (
    <SectionWrapper title={t('history.origins')}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
      </motion.div>
    </SectionWrapper>
  );
};

export default OriginsSection;
