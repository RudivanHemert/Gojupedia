import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, Eye, Dumbbell } from 'lucide-react';

const UdeTanrenSection: React.FC = () => {
  const { t } = useTranslation();
  const data = t('hojoUndo.udeTanren', { returnObjects: true }) as any;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-xl text-muted-foreground">{data.translation}</p>
        {data.description && (
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-2">
            {data.description}
          </p>
        )}
      </motion.div>

      {/* Functie */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Target className="mr-3 h-6 w-6 text-blue-500" />
              {data.function.title}
            </CardTitle>
            <div className="text-muted-foreground text-base mt-1">{data.function.subtitle}</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.function.content.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Aandachtspunten */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Eye className="mr-3 h-6 w-6 text-purple-500" />
              {data.attentionPoints.title}
            </CardTitle>
            <div className="text-muted-foreground text-base mt-1">{data.attentionPoints.subtitle}</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.attentionPoints.content.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Oefeningen */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Dumbbell className="mr-3 h-6 w-6 text-green-500" />
              {data.exercises.title}
            </CardTitle>
            <div className="text-muted-foreground text-base mt-1">{data.exercises.subtitle}</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {data.exercises.list.map((exercise: any, idx: number) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-semibold text-base mb-1">{exercise.title}</span>
                  <span className="text-base text-muted-foreground">{exercise.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default UdeTanrenSection; 