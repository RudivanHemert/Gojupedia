import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { hojoUndoData } from '@/data/hojoUndoData'; // Import the centralized data

const equipmentId = 'chi-ishi';
const sectionKey = 'function';

const ChiIshiFunction = () => {
  const equipment = hojoUndoData[equipmentId];
  const section = equipment?.[sectionKey];

  if (!section) {
    // Handle case where data might be missing
    return (
      <MobileLayout hideHeader={true}>
        <div className="p-4">
          <p>Content not found.</p>
          <Button asChild variant="outline" className="mt-6">
            <Link to={`/hojo-undo`}> 
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Hojo Undo
            </Link>
          </Button>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{equipment.name}: {section.title}</h1>
        
        <div className="prose prose-stone dark:prose-invert max-w-none">
          {section.content.map((item, index) => {
            if (item.startsWith('BULLET: ')) {
              return <p key={index} className="ml-4 before:content-['•'] before:mr-2">{item.substring(8)}</p>;
            } else if (item.startsWith('NUM_LIST: ')) {
              // Basic numbered list item - doesn't reset numbering, just adds prefix
              return <p key={index} className="ml-4">{`${index + 1}. ${item.substring(10)}`}</p>; 
            } else if (item.startsWith('SUB_NUM_LIST: ')) {
              return <p key={index} className="ml-8">{item.substring(14)}</p>; // Simple indent
            }
            return <p key={index}>{item}</p>;
          })}
        </div>
        
        <Button asChild variant="outline" className="mt-6">
          <Link to={`/hojo-undo`}> 
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Hojo Undo Overview
          </Link>
        </Button>
      </div>
    </MobileLayout>
  );
};

export default ChiIshiFunction; 