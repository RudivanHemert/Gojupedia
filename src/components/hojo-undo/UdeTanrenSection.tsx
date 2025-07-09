import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Info, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UdeTanrenSection: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'information',
      title: 'Informatie',
      description: 'Algemene informatie over Ude Tanren',
      icon: Info,
      path: '/hojo-undo/ude-tanren/information'
    },
    {
      key: 'exercises',
      title: 'Oefeningen',
      description: 'Specifieke oefeningen en routines',
      icon: Dumbbell,
      path: '/hojo-undo/ude-tanren/exercises'
    }
  ];

  return (
    <div className="space-y-2">
      {sections.map((section, index) => (
        <motion.div
          key={section.key}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link 
            to={section.path} 
            className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted transition-colors group"
          >
            <div className="flex items-center">
              <section.icon className="mr-3 h-4 w-4 text-red-500" />
              <div>
                <div className="font-medium">{section.title}</div>
                <div className="text-xs text-muted-foreground">{section.description}</div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default UdeTanrenSection; 