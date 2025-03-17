
import React, { useState, useEffect } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { categories } from '@/data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swords, User, Scroll, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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
      {/* Traditional Header */}
      <div className="relative h-60 overflow-hidden bg-stone-100 border-b-2 border-gray-300">
        <div className="absolute inset-0 bg-paper-texture opacity-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="mb-4">
            <img 
              src="https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop" 
              alt="Karate symbol" 
              className="w-16 h-16 object-cover rounded-full border-2 border-karate shadow-md"
            />
          </div>
          <h1 className="text-karate text-3xl font-serif font-bold mb-1">
            剛柔流空手道
          </h1>
          <p className="text-gray-700 text-lg italic">
            Goju Ryu Karate-Do
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            The Hard and Soft Way of the Empty Hand
          </p>
        </div>
      </div>

      {/* Scroll Ornament */}
      <div className="flex justify-center -mt-3">
        <div className="bg-stone-200 h-1 w-32 rounded-full"></div>
      </div>

      {/* Introduction */}
      <div className="px-6 py-8 bg-stone-50 border-b border-gray-200">
        <motion.h2 
          className="text-2xl font-serif font-semibold mb-4 text-center text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          The Way of Goju Ryu
        </motion.h2>
        <motion.p 
          className="text-gray-700 leading-relaxed text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Goju Ryu (剛柔流) is one of the main traditional Okinawan styles of karate, 
          featuring a combination of hard and soft techniques. Developed by Chojun Miyagi 
          in the early 20th century, this martial art emphasizes both strength and fluidity
          in movement.
        </motion.p>
      </div>

      {/* Categories */}
      <div className="px-6 py-8">
        <motion.h2 
          className="text-2xl font-serif font-semibold mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Study Areas
        </motion.h2>

        {mounted && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {categories.map((category) => (
              <motion.div 
                key={category.id} 
                variants={itemVariants}
              >
                <Link to={`/${category.slug}`} className="block">
                  <Card className="overflow-hidden border border-gray-300 hover:border-karate transition-all shadow-sm hover:shadow-md">
                    <div className="flex items-center p-0">
                      <div className="w-1/3 h-24 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50"></div>
                        <img 
                          src={category.image} 
                          alt={category.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 w-2/3">
                        <div className="flex items-center mb-2">
                          <div className="bg-stone-100 p-1.5 rounded-full mr-2 border border-gray-200">
                            {categoryIcons[category.id]}
                          </div>
                          <h3 className="text-gray-800 font-serif font-medium">{category.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-8 text-center border-t border-gray-300 bg-stone-100">
        <p className="text-gray-700 text-sm">
          "In karate, striking, thrusting, and kicking are not the only methods. 
          Throwing techniques and pressure against joints are included." - Chojun Miyagi
        </p>
        <div className="mt-4 flex justify-center">
          <div className="w-12 h-1 bg-karate/50 rounded-full"></div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Index;
