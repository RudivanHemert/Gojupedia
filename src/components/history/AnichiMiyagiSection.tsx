import React from 'react';
import SectionWrapper from './SectionWrapper';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer';

// Import the specific markdown file
import markdownContent from '@/content/history/anichi-miyagi.md?raw';

const AnichiMiyagiSection = () => {
  return (
    <SectionWrapper title="An'ichi Miyagi (1931-2009)">
      {/* Render the imported Markdown content */}
      {/* Note: Complex layouts with side images might require custom rendering logic */}
      {/* or adjustments to the Markdown structure/CSS if basic rendering is insufficient. */}
      <MarkdownRenderer markdownContent={markdownContent} />
    </SectionWrapper>
  );
};

export default AnichiMiyagiSection;
