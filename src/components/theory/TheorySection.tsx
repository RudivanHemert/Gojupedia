
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface TheorySectionProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

interface TheorySectionsProps {
  sections: TheorySectionProps[];
}

export const TheorySection: React.FC<TheorySectionProps> = ({ id, name, description, icon, path }) => {
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

  return (
    <motion.div key={id} variants={itemVariants}>
      <Link to={path} className="block">
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="flex h-24">
              <div className="w-1/4 bg-stone-100 flex items-center justify-center">
                <div className="bg-stone-200 p-3 rounded-full">
                  {icon}
                </div>
              </div>
              <div className="w-3/4 p-4 flex flex-col justify-center">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export const TheorySectionList: React.FC<TheorySectionsProps> = ({ sections }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {sections.map((section) => (
        <TheorySection
          key={section.id}
          id={section.id}
          name={section.name}
          description={section.description}
          icon={section.icon}
          path={section.path}
        />
      ))}
    </motion.div>
  );
};
