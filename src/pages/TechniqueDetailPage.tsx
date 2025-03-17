
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { techniques } from '@/data';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TechniqueDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const technique = techniques.find(t => t.id === id);
  
  if (!technique) {
    return (
      <MobileLayout>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Technique not found</h1>
          <p className="mb-4">The technique you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/techniques">Back to Techniques</Link>
          </Button>
        </div>
      </MobileLayout>
    );
  }
  
  const relatedTechniqueItems = technique.relatedTechniques
    .map(relId => techniques.find(t => t.id === relId))
    .filter(Boolean);

  return (
    <MobileLayout>
      {/* Hero Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={technique.images[0]} 
          alt={technique.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <Badge className="mb-2 capitalize">{technique.category}</Badge>
          <h1 className="text-white text-3xl font-bold mb-1">{technique.name}</h1>
          <p className="text-white/80 font-serif">{technique.japaneseName}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">{technique.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-3">Steps</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {technique.steps.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </motion.div>

        {technique.video && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-6"
          >
            <h2 className="text-2xl font-serif font-semibold mb-3">Video Demonstration</h2>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-karate opacity-90" />
              <p className="absolute bottom-4 text-sm text-center text-gray-500 w-full">
                Video available in the full version
              </p>
            </div>
          </motion.div>
        )}

        {relatedTechniqueItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-serif font-semibold mb-3">Related Techniques</h2>
            <div className="space-y-3">
              {relatedTechniqueItems.map((relTechnique) => 
                relTechnique ? (
                  <Link to={`/techniques/${relTechnique.id}`} key={relTechnique.id}>
                    <Card className="p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div>
                        <h3 className="font-medium">{relTechnique.name}</h3>
                        <p className="text-sm text-gray-500">{relTechnique.japaneseName}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Card>
                  </Link>
                ) : null
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Button */}
      <div className="sticky bottom-20 px-5 pb-4 pt-2 bg-gradient-to-t from-white to-transparent">
        <Button asChild variant="outline" className="w-full">
          <Link to="/techniques">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Techniques
          </Link>
        </Button>
      </div>
    </MobileLayout>
  );
};

export default TechniqueDetailPage;
