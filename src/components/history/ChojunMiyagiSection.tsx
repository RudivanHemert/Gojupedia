import React from 'react';
import SectionWrapper from './SectionWrapper';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer';

// Import the specific markdown file
import markdownContent from '@/content/history/chojun-miyagi.md?raw';

const ChojunMiyagiSection = () => {
  return (
    <SectionWrapper title="Chojun Miyagi (1888 - 1953)">
      {/* Render the imported Markdown content */}
      <MarkdownRenderer markdownContent={markdownContent} />
    </SectionWrapper>
  );
};

export default ChojunMiyagiSection;
