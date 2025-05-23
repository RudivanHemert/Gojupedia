import React, { useState, useEffect } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { categories } from '@/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swords, User, Scroll, Brain, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Map category IDs to their corresponding icons
const categoryIcons: Record<string, React.ReactNode> = {
  techniques: <Swords className="h-6 w-6 text-karate" />,
  kata: <User className="h-6 w-6 text-karate" />,
  history: <Scroll className="h-6 w-6 text-karate" />,
  philosophy: <Brain className="h-6 w-6 text-karate" />,
};

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.95]);

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
      {/* Enhanced Traditional Header */}
      <motion.div 
        className="relative h-72 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50 border-b-2 border-gray-300"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <div className="absolute inset-0 bg-paper-texture opacity-10"></div>
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Miyagi_Chojun.jpg" 
              alt="Chojun Miyagi" 
              className="w-24 h-24 object-cover rounded-full border-2 border-karate shadow-lg"
            />
          </motion.div>
          <motion.h1 
            className="text-karate text-4xl font-serif font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            剛柔流
          </motion.h1>
          <motion.p 
            className="text-gray-700 text-xl italic mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Goju Ryu Karate-Do
          </motion.p>
          <motion.p 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The Hard and Soft Way of the Empty Hand
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Decorative Scroll Indicator */}
      <motion.div 
        className="flex justify-center -mt-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="bg-karate/20 h-1 w-24 rounded-full"></div>
      </motion.div>

      {/* Enhanced Introduction */}
      <div className="px-6 py-12 bg-gradient-to-b from-stone-50 to-white border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 
            className="text-3xl font-serif font-semibold mb-6 text-center text-gray-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            The Way of Goju Ryu
          </motion.h2>
          <motion.p 
            className="text-gray-700 leading-relaxed text-center text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Goju Ryu (剛柔流) is one of the main traditional Okinawan styles of karate, 
            featuring a combination of hard and soft techniques. Developed by Chojun Miyagi 
            in the early 20th century, this martial art emphasizes both strength and fluidity
            in movement.
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Categories Section */}
      <div className="px-6 py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 
            className="text-3xl font-serif font-semibold mb-8 text-center text-gray-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Study Areas
          </motion.h2>

          {mounted && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {categories.map((category) => (
                <motion.div 
                  key={category.id} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={`/${category.slug}`} className="block">
                    <Card className="overflow-hidden border border-gray-200 hover:border-karate transition-all shadow-sm hover:shadow-lg bg-gradient-to-r from-white to-stone-50">
                      <div className="flex items-center p-6">
                        <motion.div 
                          className="bg-stone-100 p-4 rounded-full mr-6 border border-gray-200 shadow-sm"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {categoryIcons[category.id]}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl text-gray-800 font-serif font-medium mb-2">{category.name}</h3>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Enhanced Footer */}
      <div className="px-6 py-12 text-center bg-gradient-to-b from-white to-stone-100 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-700 text-lg italic mb-4">
            "In karate, striking, thrusting, and kicking are not the only methods. 
            Throwing techniques and pressure against joints are included."
          </p>
          <p className="text-karate font-serif">- Chojun Miyagi</p>
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="w-16 h-1 bg-karate/30 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default Index;
