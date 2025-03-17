
import React, { useState, useEffect } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { categories } from '@/data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swords, User, Scroll, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Map category IDs to their corresponding icons
const categoryIcons: Record<string, React.ReactNode> = {
  techniques: <Swords className="h-5 w-5 text-karate" />,
  kata: <User className="h-5 w-5 text-karate" />,
  history: <Scroll className="h-5 w-5 text-karate" />,
  philosophy: <Brain className="h-5 w-5 text-karate" />,
};

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <MobileLayout>
      {/* Hero Section */}
      <div className="relative h-60 overflow-hidden rounded-b-2xl shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop" 
          alt="Karate master performing kata" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <Badge variant="destructive" className="mb-2">
            Martial Arts Encyclopedia
          </Badge>
          <h1 className="text-white text-3xl font-bold mb-1">
            Goju Ryu Karate
          </h1>
          <p className="text-white opacity-90">
            Hard and soft way of the empty hand
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="px-4 py-6">
        <motion.h2 
          className="text-2xl font-serif font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Discover the Art
        </motion.h2>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Goju Ryu (剛柔流) is one of the main traditional Okinawan styles of karate, 
          featuring a combination of hard and soft techniques. Explore our comprehensive 
          guide to master this ancient martial art.
        </motion.p>
      </div>

      {/* Categories */}
      <div className="px-4 py-2">
        <motion.div 
          className="flex items-center justify-between mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif font-semibold">Categories</h2>
        </motion.div>

        {mounted && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4"
          >
            {categories.map((category, index) => (
              <motion.div 
                key={category.id} 
                variants={itemVariants}
              >
                <Link to={`/${category.slug}`} className="block">
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-24">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-3 flex items-center">
                        <div className="bg-white/90 p-1.5 rounded-full mr-2">
                          {categoryIcons[category.id]}
                        </div>
                        <h3 className="text-white font-medium">{category.name}</h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Featured Articles Carousel */}
      <div className="px-4 py-6">
        <motion.h2 
          className="text-2xl font-serif font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Featured Articles
        </motion.h2>

        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2041&auto=format&fit=crop" 
                      alt="Breathing techniques" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <Badge className="mb-2">Techniques</Badge>
                      <h3 className="text-white text-lg font-semibold">The Art of Proper Breathing</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop" 
                      alt="History of Goju Ryu" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <Badge className="mb-2">History</Badge>
                      <h3 className="text-white text-lg font-semibold">Origins of Goju Ryu</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      {/* Recent Updates */}
      <div className="px-4 py-6">
        <motion.h2 
          className="text-2xl font-serif font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Recent Updates
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <Card className="border-l-4 border-l-karate">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">New Kata Video: Sanchin</h3>
                <Badge variant="outline">New</Badge>
              </div>
              <p className="text-sm text-gray-500 mt-1">Step-by-step video demonstration added</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-karate">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Updated Article: Breathing Techniques</h3>
                <Badge variant="outline">Updated</Badge>
              </div>
              <p className="text-sm text-gray-500 mt-1">New insights on proper breathing added</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default Index;
