import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const StrengthExercises = () => {
  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Hojo Undo: Krachtoefeningen (Strength Exercises)</h1>
        <p className="text-muted-foreground mb-4">
          Content for the strength exercises section of Hojo Undo will be added here.
        </p>
        {/* Add more content as needed */}
        
        <Button asChild variant="outline" className="mt-6">
          <Link to="/hojo-undo">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Hojo Undo Overview
          </Link>
        </Button>
      </div>
    </MobileLayout>
  );
};

export default StrengthExercises; 