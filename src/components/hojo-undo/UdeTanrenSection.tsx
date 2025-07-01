import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Dumbbell, Hammer, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UdeTanrenSection: React.FC = () => {
  const { t } = useTranslation();
  const data = t('hojoUndo.udeTanren', { returnObjects: true }) as any;

  const sections = [
    {
      key: 'function',
      title: data.function.title,
      subtitle: data.function.subtitle,
      icon: Target,
      color: 'text-blue-500',
      path: '/hojo-undo/ude-tanren/function',
      description: 'Begrijp doel en functie van Ude Tanren oefeningen'
    },
    {
      key: 'construction',
      title: 'Constructie',
      subtitle: 'Opzet en structuur van arm conditionering',
      icon: Hammer,
      color: 'text-orange-500',
      path: '/hojo-undo/ude-tanren/construction',
      description: 'Leer over de constructie en opzet van Ude Tanren'
    },
    {
      key: 'attentionPoints',
      title: data.attentionPoints.title,
      subtitle: data.attentionPoints.subtitle,
      icon: Eye,
      color: 'text-purple-500',
      path: '/hojo-undo/ude-tanren/attention-points',
      description: 'Veiligheidsrichtlijnen en technische focus'
    },
    {
      key: 'exercises',
      title: data.exercises.title,
      subtitle: data.exercises.subtitle,
      icon: Dumbbell,
      color: 'text-green-500',
      path: '/hojo-undo/ude-tanren/exercises',
      description: 'Specifieke oefeningen en routines'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Navigation Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {sections.map((section) => (
          <Link key={section.key} to={section.path}>
            <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-start">
              <div className="flex items-center w-full mb-2">
                <section.icon className={`mr-2 h-4 w-4 ${section.color}`} />
                <span className="font-medium text-sm">{section.title}</span>
                <ChevronRight className="h-3 w-3 ml-auto text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground text-left">{section.description}</p>
            </Button>
          </Link>
        ))}
      </div>

      {/* Preview Content */}
      <div className="space-y-4">
        {/* Functie Preview */}
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
                {data.function.content.slice(0, 2).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link to="/hojo-undo/ude-tanren/function">
                  <Button variant="outline" size="sm">
                    Lees meer over functie
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Aandachtspunten Preview */}
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
                {data.attentionPoints.content.slice(0, 2).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link to="/hojo-undo/ude-tanren/attention-points">
                  <Button variant="outline" size="sm">
                    Lees meer over aandachtspunten
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Oefeningen Preview */}
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
                {data.exercises.list.slice(0, 2).map((exercise: any, idx: number) => (
                  <li key={idx} className="flex flex-col">
                    <span className="font-semibold text-base mb-1">{exercise.title}</span>
                    <span className="text-base text-muted-foreground">{exercise.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link to="/hojo-undo/ude-tanren/exercises">
                  <Button variant="outline" size="sm">
                    Bekijk alle oefeningen
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default UdeTanrenSection; 