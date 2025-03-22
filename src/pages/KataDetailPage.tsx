
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { katas } from '@/data';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const KataDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const kata = katas.find(k => k.id === id);

  if (!kata) {
    return (
      <MobileLayout>
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Kata Not Found</h1>
          <p className="mb-4">The kata you're looking for doesn't exist in our database.</p>
          <Button onClick={() => navigate('/kata')}>
            Back to Kata List
          </Button>
        </div>
      </MobileLayout>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const kataVideoId = getYouTubeId(kata.videoUrl);
  const bunkaiVideoId = getYouTubeId(kata.bunkai);
  const shimeVideoId = kata.shime ? getYouTubeId(kata.shime) : null;

  return (
    <MobileLayout>
      {/* Header with Navigation */}
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <img 
            src={kata.images[0]} 
            alt={kata.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 left-4 bg-black/30 text-white hover:bg-black/50"
          onClick={() => navigate('/kata')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-white text-3xl font-bold">{kata.name}</h1>
              <p className="text-white opacity-90">{kata.japaneseName}</p>
              <p className="text-white/70 text-sm italic">{kata.meaning}</p>
            </div>
            <Badge>{kata.level}</Badge>
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start px-4 pt-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <div>
              <h2 className="text-xl font-serif font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{kata.description}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-serif font-semibold mb-2">Key Features</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {kata.keyFeatures && kata.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-serif font-semibold mb-2">At a Glance</h2>
                <div className="grid grid-cols-2 gap-y-2">
                  <div className="text-gray-500">Movements</div>
                  <div className="font-medium">{kata.movements}</div>
                  
                  <div className="text-gray-500">Duration</div>
                  <div className="font-medium">{kata.duration}</div>
                  
                  <div className="text-gray-500">Origin</div>
                  <div className="font-medium">{kata.origin}</div>
                  
                  <div className="text-gray-500">Level</div>
                  <div className="font-medium">{kata.level}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="steps" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-xl font-serif font-semibold mb-2">Sequence of Movements</h2>
            <div className="space-y-3">
              {kata.steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="bg-gray-100 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-medium mr-3">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="media" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-xl font-serif font-semibold mb-2">Images</h2>
            <div className="grid grid-cols-2 gap-2">
              {kata.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${kata.name} technique ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
            
            {kataVideoId && (
              <div className="mt-6">
                <h2 className="text-xl font-serif font-semibold mb-2">Kata Demonstration</h2>
                <div className="relative pt-[56.25%] bg-gray-100 rounded overflow-hidden">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${kataVideoId}`}
                    title={`${kata.name} Kata Demonstration`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {bunkaiVideoId && (
              <div className="mt-6">
                <h2 className="text-xl font-serif font-semibold mb-2">Bunkai Demonstration</h2>
                <div className="relative pt-[56.25%] bg-gray-100 rounded overflow-hidden">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${bunkaiVideoId}`}
                    title={`${kata.name} Bunkai Demonstration`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            
            {shimeVideoId && (
              <div className="mt-6">
                <h2 className="text-xl font-serif font-semibold mb-2">Shime Demonstration</h2>
                <div className="relative pt-[56.25%] bg-gray-100 rounded overflow-hidden">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${shimeVideoId}`}
                    title={`${kata.name} Shime Demonstration`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="history" className="p-4 pt-2">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-xl font-serif font-semibold mb-2">Historical Background</h2>
            <p className="text-gray-700">{kata.history || "Historical information about this kata is currently being researched."}</p>
            
            <div className="mt-4">
              <h2 className="text-xl font-serif font-semibold mb-2">Cultural Significance</h2>
              <p className="text-gray-700">{kata.culturalSignificance || "Information about cultural significance is being compiled."}</p>
            </div>
            
            {kata.masters && kata.masters.length > 0 && (
              <div className="mt-4">
                <h2 className="text-xl font-serif font-semibold mb-2">Notable Masters</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {kata.masters.map((master, index) => (
                    <li key={index}>{master}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </MobileLayout>
  );
};

export default KataDetailPage;
