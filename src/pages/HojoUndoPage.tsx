import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Hammer, Weight, CircleEllipsis, HandMetal } from 'lucide-react';

const HojoUndoPage = () => {
  const mainSections = [
    {
      title: 'Inleiding',
      icon: CircleEllipsis,
      description: 'Traditionele krachttraining van het Goju-ryu Karate-do',
      links: [
        { name: 'Inleiding', path: '/hojo-undo/general/intro' },
        { name: 'Overzicht Hulpmiddelen', path: '/hojo-undo/general/equipment' },
      ],
    },
    {
      title: 'Chi Ishi',
      icon: Weight,
      description: 'Stenen hefboom gewicht - Voor pols- en grijpkracht',
      links: [
        { name: 'Functie', path: '/hojo-undo/chi-ishi/function' },
        { name: 'Constructie', path: '/hojo-undo/chi-ishi/construction' },
        { name: 'Aandachtspunten', path: '/hojo-undo/chi-ishi/attention-points' },
        { name: 'Oefeningen', path: '/hojo-undo/chi-ishi/exercises' },
      ]
    },
    {
      title: 'Nigiri Game',
      icon: HandMetal,
      description: 'Grijpvazen - Voor vinger- en handkracht',
      links: [
        { name: 'Functie', path: '/hojo-undo/nigiri-game/function' },
        { name: 'Constructie', path: '/hojo-undo/nigiri-game/construction' },
        { name: 'Oefeningen', path: '/hojo-undo/nigiri-game/exercises' },
        { name: 'Aandachtspunten', path: '/hojo-undo/nigiri-game/attention-points' },
      ]
    },
    {
      title: 'Kongoken',
      icon: Hammer,
      description: 'Ijzeren ovaal - Voor totale lichaamsconditionering',
      links: [
        { name: 'Klassieke Oefeningen', path: '/hojo-undo/kongoken/classic-exercises' },
        { name: 'Oefeningen', path: '/hojo-undo/kongoken/exercises' },
      ]
    },
    {
      title: 'Ishi Sashi',
      icon: Weight,
      description: 'Stenen hangsloten - Voor grijpkracht en techniek',
      links: [
        { name: 'Functie', path: '/hojo-undo/ishi-sashi/function' },
        { name: 'Constructie', path: '/hojo-undo/ishi-sashi/construction' },
        { name: 'Oefeningen', path: '/hojo-undo/ishi-sashi/exercises' },
        { name: 'Aandachtspunten', path: '/hojo-undo/ishi-sashi/attention-points' },
      ]
    },
  ];

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-center">Hojo Undo (補助運動)</h1>
          <p className="text-center text-muted-foreground mb-6">Traditionele krachttraining van het Goju-ryu Karate-do</p>
        </motion.div>
        
        {mainSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <section.icon className="mr-2 h-5 w-5 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.links?.map(link => (
                    <li key={link.path}>
                      <Link to={link.path} className="flex justify-between items-center p-2 rounded hover:bg-muted transition-colors group">
                        <span>{link.name}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default HojoUndoPage;
