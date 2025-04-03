import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { techniqueData } from '@/data/techniques'; // Import from the new data file

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

const TechniquesPage = () => {
  return (
    // Using hideHeader=true as requested for section pages
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6" // Adjusted spacing between categories
        >
          {techniqueData.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="bg-card p-4 rounded-lg shadow-sm border border-muted">
              <h2 className="text-xl font-serif font-semibold capitalize mb-3 text-primary">{category.title}</h2>
              <ul className="space-y-2">
                {category.techniques.map((technique) => (
                  <li key={technique.id}>
                    <Link 
                      to={`/techniques/${technique.id}`} 
                      className="flex justify-between items-center p-2 rounded hover:bg-muted transition-colors group"
                    >
                      <div>
                        <span className="font-medium text-secondary-foreground group-hover:text-primary">{technique.name}</span>
                        <span className="text-sm text-muted-foreground ml-2">({technique.japaneseName})</span>
                        <span className="text-sm text-muted-foreground"> - {technique.englishName}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default TechniquesPage;
