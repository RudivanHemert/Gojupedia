import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, PlayCircle } from 'lucide-react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { katas } from '@/data';
import { Kata } from '@/types';

const BunkaiDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [kata, setKata] = useState<Kata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundKata = katas.find(k => k.id === id);
    setKata(foundKata || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <MobileLayout>
        <div className="px-4 py-6 max-w-md mx-auto">
          <p>Loading...</p>
        </div>
      </MobileLayout>
    );
  }

  if (!kata) {
    return (
      <MobileLayout>
        <div className="px-4 py-6 max-w-md mx-auto">
          <p>Kata not found</p>
          <Link to="/bunkai">
            <Button variant="outline" className="mt-4">
              Back to Bunkai
            </Button>
          </Link>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout hideHeader={true}>
      <div className="px-4 py-6 max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/bunkai" className="mr-2">
            <ArrowLeft size={18} className="text-stone-600" />
          </Link>
        </div>

        <div className="mb-6">
          <div className="aspect-video bg-stone-100 rounded overflow-hidden mb-4">
            {kata.images && kata.images.length > 0 && (
              <img
                src={kata.images[0]}
                alt={kata.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <h2 className="text-lg font-semibold mb-1">{kata.name} ({kata.japaneseName})</h2>
          <p className="text-sm text-stone-600 mb-4">{kata.meaning}</p>
          <p className="text-stone-700 mb-4">{kata.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Bunkai Applications</h2>
          
          {kata.bunkai ? (
            <div className="bg-stone-50 p-4 rounded border border-stone-200 mb-4">
              <h3 className="text-md font-medium mb-2">Video Demonstration</h3>
              <a 
                href={kata.bunkai} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <PlayCircle size={18} />
                <span>Watch Bunkai Video</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ) : (
            <p className="text-stone-500 italic">No bunkai demonstration available for this kata.</p>
          )}
          
          <div className="space-y-4 mt-6">
            <h3 className="text-md font-medium">Key Applications</h3>
            <ul className="list-disc list-inside text-stone-700 space-y-2">
              {kata.keyFeatures && kata.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link to={`/kata/${kata.id}`}>
            <Button variant="outline" className="w-full">
              View Full Kata Details
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default BunkaiDetailPage; 