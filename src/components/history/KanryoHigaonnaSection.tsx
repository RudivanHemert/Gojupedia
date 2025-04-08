import React from 'react';
import SectionWrapper from './SectionWrapper';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

// Import the specific markdown file
import markdownContent from '@/content/history/kanryo-higaonna.md?raw';

const KanryoHigaonnaSection = () => {
  return (
    <SectionWrapper title="Kanryo Higaonna (1853 - 1916)">
       {/* Render the imported Markdown content */}
       {/* Note: Image floating might need adjustments in Markdown/CSS if default rendering isn't satisfactory */}
      <MarkdownRenderer markdownContent={markdownContent} />
    </SectionWrapper>
  );
};

export default KanryoHigaonnaSection;
