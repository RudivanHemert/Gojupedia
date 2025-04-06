import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import MarkdownRenderer from '@/components/MarkdownRenderer';

// Import the specific markdown file
import markdownContent from '@/content/kata-theory/sources-of-power.md?raw';

const SourcesOfPower = () => {
  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="space-y-4">
        {/* Render the imported Markdown content */}
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </ScrollArea>
  );
};

export default SourcesOfPower; 