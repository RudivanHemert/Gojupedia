
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { techniques } from '@/data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechniquesPage = () => {
  // Group techniques by category
  const techniquesByCategory = techniques.reduce((acc, technique) => {
    if (!acc[technique.category]) {
      acc[technique.category] = [];
    }
    acc[technique.category].push(technique);
    return acc;
  }, {} as Record<string, typeof techniques>);

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

  // Convert categories to array for mapping
  const categories = Object.keys(techniquesByCategory);

  return (
    <MobileLayout>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop" 
          alt="Karate Techniques" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <h1 className="text-white text-3xl font-bold">Techniques</h1>
          <p className="text-white opacity-90">
            Master the fundamental movements
          </p>
        </div>
      </div>

      {/* Techniques List by Category */}
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {categories.map((category) => (
            <motion.div key={category} className="space-y-4" variants={itemVariants}>
              <h2 className="text-2xl font-serif font-semibold capitalize">{category}</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {techniquesByCategory[category].map((technique) => (
                  <Link to={`/techniques/${technique.id}`} key={technique.id}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex h-24">
                          <div 
                            className="w-1/3 h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${technique.images[0]})` }}
                          ></div>
                          <div className="w-2/3 p-3 flex flex-col justify-between">
                            <div>
                              <h3 className="font-semibold">{technique.name}</h3>
                              <p className="text-sm text-gray-500">{technique.japaneseName}</p>
                            </div>
                            <Badge variant="outline" className="w-fit">{category}</Badge>
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

export default TechniquesPage;
