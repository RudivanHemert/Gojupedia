import React from 'react';
import SectionWrapper from './SectionWrapper';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const AnichiMiyagiSection = () => {
  const markdownContent = useMarkdownContent('history/anichi-miyagi');

  return (
    <SectionWrapper title="An'ichi Miyagi (1931-2009)">
      {/* Render the imported Markdown content */}
      {/* Note: Complex layouts with side images might require custom rendering logic */}
      {/* or adjustments to the Markdown structure/CSS if basic rendering is insufficient. */}
      {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
    </SectionWrapper>
  );
};

export default AnichiMiyagiSection;
