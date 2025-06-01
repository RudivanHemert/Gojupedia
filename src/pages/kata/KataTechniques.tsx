import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const KataTechniques = () => {
  const markdownContent = useMarkdownContent('kata-theory/kata-techniques');

  if (!markdownContent) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="prose dark:prose-invert max-w-none">
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </ScrollArea>
  );
};

export default KataTechniques; 