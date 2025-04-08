import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

// Import the specific markdown file
import markdownContent from '@/content/kata-theory/okinawan-concepts.md?raw';

const OkinawanConcepts = () => {
  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="space-y-4">
         {/* Render the imported Markdown content */}
         {/* Note: The original Accordion layout is lost. Consider splitting into separate MD files */}
         {/* or using custom components within MarkdownRenderer if Accordion is essential. */}
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </ScrollArea>
  );
};

export default OkinawanConcepts; 