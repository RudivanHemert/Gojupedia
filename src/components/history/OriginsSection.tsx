
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

const OriginsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="space-y-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-semibold">Origins in Okinawa</h2>
          {isOpen ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 px-4">
          <p className="text-gray-700">
            Goju-Ryu karate was developed in Okinawa, Japan in the early 20th century by Chojun Miyagi. The name "Goju" comes from the "hard-soft" 
            principle of traditional Chinese martial arts, reflecting the system's dual nature - combining hard striking techniques with softer, 
            circular movements for both offense and defense.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1599232288126-22253d9ba3e2?q=80&w=1964&auto=format&fit=crop"
            alt="Historic Okinawa" 
            className="w-full h-48 object-cover rounded-md my-4"
          />
          <p className="text-gray-700">
            Miyagi studied under Kanryo Higaonna, who had trained in Chinese martial arts in Fuzhou, China. After Higaonna's death, 
            Miyagi traveled to China to further his studies, eventually creating a synthesis of Chinese quanfa and traditional Okinawan martial arts.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

export default OriginsSection;
