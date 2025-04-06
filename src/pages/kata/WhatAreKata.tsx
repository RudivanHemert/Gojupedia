import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer';

// Import the specific markdown file
import markdownContent from '@/content/kata-theory/what-are-kata.md?raw';

const WhatAreKata = () => {
  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="space-y-4">
        {/* Render the imported Markdown content */}
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </ScrollArea>
  );
};

export default WhatAreKata; 