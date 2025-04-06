import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer';

// Import the specific markdown file
import markdownContent from '@/content/kata-theory/power-transfer.md?raw';

const PowerTransfer = () => {
  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="space-y-4">
         {/* Render the imported Markdown content */}
         {/* Note: The original Tabs layout is lost. Consider splitting into separate MD files */}
         {/* or using custom components within MarkdownRenderer if Tabs are essential. */}
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </ScrollArea>
  );
};

export default PowerTransfer; 