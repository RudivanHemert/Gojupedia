import React from 'react';
import SectionWrapper from './SectionWrapper';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const KanryoHigaonnaSection = () => {
  const markdownContent = useMarkdownContent('../content/history/kanryo-higaonna');

  return (
    <SectionWrapper title="Kanryo Higaonna (1853 - 1916)">
      {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
    </SectionWrapper>
  );
};

export default KanryoHigaonnaSection;
