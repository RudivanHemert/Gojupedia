import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface TheoryHeaderProps {
  title: string;
  description: string;
  backUrl?: string;
}

const TheoryHeader: React.FC<TheoryHeaderProps> = ({ title, description, backUrl }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backUrl) {
      navigate(backUrl);
    } else {
      navigate(-1);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-12 bg-gradient-to-b from-muted to-white border-b border-border"
    >
      <div className="container mx-auto px-4">
        {backUrl && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <Button
              variant="ghost"
              onClick={handleBack}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug
            </Button>
          </motion.div>
        )}
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-serif font-bold text-stone-800 mb-3"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-stone-600"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default TheoryHeader;
