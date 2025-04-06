import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer';

// Import the specific markdown file
import markdownContent from '@/content/history/origins.md?raw';

const OriginsSection = () => {
  return (
    <SectionWrapper title="Origins in Okinawa">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Render the imported Markdown content */}
        <MarkdownRenderer markdownContent={markdownContent} />
      </motion.div>
    </SectionWrapper>
  );
};

export default OriginsSection;
