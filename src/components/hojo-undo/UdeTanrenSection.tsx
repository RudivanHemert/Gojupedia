import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Dumbbell, Hammer, ChevronRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const UdeTanrenSection: React.FC = () => {
  const { t } = useTranslation();
  const data = t('hojoUndo.equipment.udeTanren', { returnObjects: true }) as any;

  const items = [
    { title: "Functie", path: "/hojo-undo/ude-tanren/function", icon: Target },
    { title: "Constructie", path: "/hojo-undo/ude-tanren/construction", icon: Hammer },
    { title: "Aandachtspunten", path: "/hojo-undo/ude-tanren/attention-points", icon: Eye },
    { title: "Oefeningen", path: "/hojo-undo/ude-tanren/exercises", icon: Dumbbell }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-xl text-muted-foreground">{data.translation}</p>
        <p className="text-muted-foreground max-w-md mx-auto">
          {data.description}
        </p>
      </motion.div>

      {/* Subsections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold flex items-center">
          <Users className="mr-2 h-5 w-5" />
          Subsecties
        </h2>
        <div className="grid gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link to={item.path}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <div className="p-2 rounded-full bg-cyan-500 text-white mr-3">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">{item.title}</div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default UdeTanrenSection; 