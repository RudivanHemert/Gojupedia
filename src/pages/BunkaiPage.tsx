import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Card, CardContent } from '@/components/ui/card';
import { katas } from '@/data';

const BunkaiPage = () => {
  return (
    <MobileLayout>
      <div className="px-4 py-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-2">Bunkai</h1>
        <p className="text-stone-600 mb-6">
          Explore the practical applications of kata movements in real combat situations.
        </p>

        <div className="space-y-4">
          {katas.map((kata) => (
            <Card key={kata.id} className="overflow-hidden">
              <CardContent className="p-0">
                <Link to={`/bunkai/${kata.id}`} className="flex items-center">
                  <div className="w-20 h-20 bg-stone-100 overflow-hidden">
                    {kata.images && kata.images.length > 0 && (
                      <img 
                        src={kata.images[0]} 
                        alt={kata.name} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="font-medium">{kata.name}</h3>
                    <p className="text-xs text-stone-500 mb-2">{kata.japaneseName}</p>
                    <span className="text-xs text-stone-600">Explore applications</span>
                  </div>
                  <div className="mr-4">
                    <ArrowRight size={16} className="text-stone-400" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default BunkaiPage; 