import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const WhatAreKata = () => {
  const markdownContent = useMarkdownContent('kata-theory/what-are-kata');

  if (!markdownContent) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="space-y-4">
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </ScrollArea>
  );
};

export default WhatAreKata; 