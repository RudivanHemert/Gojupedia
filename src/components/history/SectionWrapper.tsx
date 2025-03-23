
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  initialOpen?: boolean;
}

const SectionWrapper = ({ title, children, initialOpen = false }: SectionWrapperProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-serif font-semibold">{title}</h2>
        {isOpen ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4 px-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SectionWrapper;
