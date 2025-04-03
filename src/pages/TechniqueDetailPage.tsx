import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, Image as ImageIcon, Video as VideoIcon, AlertCircle } from 'lucide-react';
import { techniqueData } from '@/data/techniques'; // Import from the new data file
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const TechniqueDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the technique from the imported data
  let technique = null;
  let categoryTitle = '';
  for (const category of techniqueData) {
    const found = category.techniques.find(t => t.id === id);
    if (found) {
      technique = found;
      categoryTitle = category.title;
      break;
    }
  }

  if (!technique) {
    return (
      <MobileLayout hideHeader={true}>
        <div className="p-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Technique not found. The technique you're looking for doesn't exist.
            </AlertDescription>
          </Alert>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/techniques">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Techniques
            </Link>
          </Button>
        </div>
      </MobileLayout>
    );
  }

  return (
    // Ensure hideHeader is true
    <MobileLayout hideHeader={true}>
      {/* Content Area */}
      <div className="p-5 space-y-6">
        {/* Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-1">{technique.name}</h1>
          <p className="text-lg text-muted-foreground font-serif mb-1">{technique.japaneseName}</p>
          <p className="text-md text-muted-foreground italic mb-4">({technique.englishName})</p>
          <p className="text-sm text-primary font-medium">Category: {categoryTitle}</p>
        </motion.div>
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card p-4 rounded-lg shadow-sm border border-muted"
        >
          <h2 className="text-xl font-serif font-semibold mb-3">Description</h2>
          {technique.description ? (
            <p className="text-secondary-foreground leading-relaxed">{technique.description}</p>
          ) : (
            <p className="text-muted-foreground italic">
              Detailed description for {technique.name} will be added here.
            </p>
          )}
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-4 rounded-lg shadow-sm border border-muted"
        >
          <h2 className="text-xl font-serif font-semibold mb-3">Execution & Key Points</h2>
          {technique.execution && technique.execution.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {technique.execution.map((step, index) => (
                <li key={index} className="text-secondary-foreground">{step}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground italic">
              Step-by-step instructions for {technique.name} will be added here.
            </p>
          )}
        </motion.div>

        {/* Images Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card p-4 rounded-lg shadow-sm border border-muted"
        >
          <h2 className="text-xl font-serif font-semibold mb-3 flex items-center">
            <ImageIcon className="mr-2 h-5 w-5" /> Images
          </h2>
          <p className="text-muted-foreground italic">
            Images demonstrating {technique.name} will be added here.
          </p>
          {/* Add image display logic here */}
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card p-4 rounded-lg shadow-sm border border-muted"
        >
          <h2 className="text-xl font-serif font-semibold mb-3 flex items-center">
            <VideoIcon className="mr-2 h-5 w-5" /> Video Demonstration
          </h2>
          {technique.youtubeVideoId ? (
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${technique.youtubeVideoId}`}
                title={`YouTube video player for ${technique.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          ) : (
            <p className="text-muted-foreground italic">
              Video demonstration for {technique.name} will be added here.
            </p>
          )}
        </motion.div>

      </div>

      {/* Navigation Button */}
      <div className="sticky bottom-20 px-5 pb-4 pt-2 bg-gradient-to-t from-background to-transparent">
        <Button asChild variant="outline" className="w-full">
          <Link to="/techniques">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Techniques List
          </Link>
        </Button>
      </div>
    </MobileLayout>
  );
};

export default TechniqueDetailPage;
