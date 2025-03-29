import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { katas } from '@/data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book } from 'lucide-react';

const KataPage = () => {
  // Group katas by level
  const katasByLevel = katas.reduce((acc, kata) => {
    if (!acc[kata.level]) {
      acc[kata.level] = [];
    }
    acc[kata.level].push(kata);
    return acc;
  }, {} as Record<string, typeof katas>);

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
        duration: 0.4,
      }
    }
  };

  // Convert levels to array for mapping
  const levels = Object.keys(katasByLevel);

  return (
    <MobileLayout hideHeader={true}>
      {/* Theory Card */}
      <div className="p-4 mb-2">
        <Link to="/theory/kata">
          <Card className="bg-stone-50 hover:bg-stone-100 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-stone-200 p-2 rounded-full">
                <Book size={20} className="text-stone-700" />
              </div>
              <div>
                <h3 className="font-semibold">Kata Theory</h3>
                <p className="text-sm text-stone-600">Learn about the principles and practice of kata</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Kata List by Level */}
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {levels.map((level) => (
            <motion.div key={level} className="space-y-4" variants={itemVariants}>
              <h2 className="text-2xl font-serif font-semibold">{level}</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {katasByLevel[level].map((kata) => (
                  <Link to={`/kata/${kata.id}`} key={kata.id}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex h-24">
                          <div 
                            className="w-1/3 h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${kata.images[0]})` }}
                          ></div>
                          <div className="w-2/3 p-3 flex flex-col justify-between">
                            <div>
                              <h3 className="font-semibold">{kata.name}</h3>
                              <p className="text-sm text-gray-500">{kata.japaneseName}</p>
                              <p className="text-xs italic text-gray-500 mt-1">{kata.meaning}</p>
                            </div>
                            <Badge variant="outline" className="w-fit">{level}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default KataPage;
