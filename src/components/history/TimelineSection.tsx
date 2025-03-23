
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TimelineSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="space-y-4 mt-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-semibold">Timeline</h2>
          {isOpen ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 px-4">
          <div className="space-y-4">
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1853</h3>
              <p className="text-gray-700">Birth of Kanryo Higaonna in Naha, Okinawa</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1868</h3>
              <p className="text-gray-700">Kanryo Higaonna travels to China to study martial arts</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1881</h3>
              <p className="text-gray-700">Kanryo Higaonna returns to Okinawa from China</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1888</h3>
              <p className="text-gray-700">Birth of Chojun Miyagi in Naha, Okinawa</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1902</h3>
              <p className="text-gray-700">Miyagi begins training under Kanryo Higaonna</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1905</h3>
              <p className="text-gray-700">Kanryo Higaonna begins teaching at Naha Commercial School</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1915</h3>
              <p className="text-gray-700">After Higaonna's death, Miyagi travels to China for further study</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1916</h3>
              <p className="text-gray-700">Death of Kanryo Higaonna</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1921</h3>
              <p className="text-gray-700">Miyagi demonstrates karate to Crown Prince Hirohito</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1925</h3>
              <p className="text-gray-700">Establishment of the Okinawa Karate Research Club</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1930</h3>
              <p className="text-gray-700">The name "Goju-Ryu" is formalized by Miyagi</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1934</h3>
              <p className="text-gray-700">Miyagi travels to Hawaii to teach karate</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1953</h3>
              <p className="text-gray-700">Death of Chojun Miyagi</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
              <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
              <h3 className="font-bold">1979</h3>
              <p className="text-gray-700">Formation of the International Okinawan Goju-Ryu Karate-Do Federation</p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

export default TimelineSection;
