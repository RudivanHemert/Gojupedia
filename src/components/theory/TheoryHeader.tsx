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
      className="relative py-8 bg-gradient-to-b from-muted to-background border-b border-border"
    >
      <div className="w-full px-4">
        {/* Global back button exists in SidebarLayout header; avoid duplicate back button here */}
        <div className="w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-foreground mb-3"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default TheoryHeader;
