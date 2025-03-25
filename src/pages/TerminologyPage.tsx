
import React, { useState, useEffect } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface TerminologyData {
  [key: string]: string[];
}

const TerminologyPage = () => {
  const [terminology, setTerminology] = useState<TerminologyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTerminology = async () => {
      try {
        const response = await fetch('/Terminology.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTerminology(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching terminology data:', err);
        setError('Failed to load terminology data. Please try again later.');
        setLoading(false);
      }
    };

    fetchTerminology();
  }, []);

  // Display section names in more readable format
  const formatSectionName = (key: string) => {
    const formattedName = key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
    
    return formattedName;
  };

  return (
    <MobileLayout>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524684009724-bee13ad8305f?q=80&w=2970&auto=format&fit=crop" 
          alt="Japanese Terminology" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Terminology</h1>
        </div>
      </div>

      <div className="p-4">
        {loading && (
          <div className="text-center py-8">
            <p>Loading terminology...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8 text-red-500">
            <p>{error}</p>
          </div>
        )}

        {terminology && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {Object.keys(terminology).map((section, index) => (
                <AccordionItem key={index} value={`section-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {formatSectionName(section)}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-1">
                      {terminology[section].map((term, termIndex) => (
                        <li key={termIndex} className="text-gray-700 text-sm pb-2 border-b border-gray-100 last:border-0">
                          {term}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </div>
    </MobileLayout>
  );
};

export default TerminologyPage;
