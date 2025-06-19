import React from 'react';
import SectionWrapper from './SectionWrapper';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const ChojunMiyagiSection = () => {
  const markdownContent = useMarkdownContent('history/chojun-miyagi');

  return (
    <SectionWrapper title="Chojun Miyagi (1888 - 1953)">
      {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
    </SectionWrapper>
  );
};

export default ChojunMiyagiSection;
