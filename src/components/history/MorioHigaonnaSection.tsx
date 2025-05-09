import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const MorioHigaonnaSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const markdownContent = useMarkdownContent('../content/history/morio-higaonna');

  return (
    <section className="space-y-4 mt-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-semibold">Morio Higaonna (1939 - )</h2>
          {isOpen ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 px-4">
          {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

export default MorioHigaonnaSection;
