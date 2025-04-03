import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Hammer, Weight, CircleEllipsis, HandMetal } from 'lucide-react';

const HojoUndoPage = () => {
  const mainSections = [
    {
      title: 'General',
      icon: CircleEllipsis,
      description: 'Introduction, types, and overview.',
      links: [
        { name: 'Inleiding (Introduction)', path: '/hojo-undo/general/intro' },
        { name: 'Krachtoefeningen (Strength)', path: '/hojo-undo/general/strength' },
        { name: 'Hardingsoefeningen (Hardening)', path: '/hojo-undo/general/hardening' },
        { name: 'Overzicht Attributen (Equipment)', path: '/hojo-undo/general/equipment' },
      ],
    },
    {
      title: 'Chi Ishi',
      icon: Weight,
      description: 'Weighted levers for grip and wrist strength.',
      links: [
        { name: 'Functie (Function)', path: '/hojo-undo/chi-ishi/function' },
        { name: 'Constructie (Construction)', path: '/hojo-undo/chi-ishi/construction' },
        { name: 'Aandachtspunten (Attention Points)', path: '/hojo-undo/chi-ishi/attention-points' },
        { name: 'Oefeningen (Exercises)', path: '/hojo-undo/chi-ishi/exercises' },
      ]
    },
    {
      title: 'Nigiri Game (Grijpvazen)',
      icon: HandMetal,
      description: 'Gripping jars for finger and hand strength.',
      links: [
        { name: 'Functie (Function)', path: '/hojo-undo/nigiri-game/function' },
        { name: 'Constructie (Construction)', path: '/hojo-undo/nigiri-game/construction' },
        { name: 'Oefeningen (Exercises)', path: '/hojo-undo/nigiri-game/exercises' },
        { name: 'Aandachtspunten (Attention Points)', path: '/hojo-undo/nigiri-game/attention-points' },
      ]
    },
    {
      title: 'Kongoken',
      icon: Hammer,
      description: 'Heavy oval ring for overall body conditioning.',
      links: [
        { name: 'Klassieke Oefeningen (Classic Exercises)', path: '/hojo-undo/kongoken/classic-exercises' },
        { name: 'Oefeningen (Exercises)', path: '/hojo-undo/kongoken/exercises' },
      ]
    },
    {
      title: 'Ishi Sashi',
      icon: Weight,
      description: 'Hand-held stone padlocks for grip.',
      links: [
        { name: 'Functie (Function)', path: '/hojo-undo/ishi-sashi/function' },
        { name: 'Constructie (Construction)', path: '/hojo-undo/ishi-sashi/construction' },
        { name: 'Oefeningen (Exercises)', path: '/hojo-undo/ishi-sashi/exercises' },
        { name: 'Aandachtspunten (Attention Points)', path: '/hojo-undo/ishi-sashi/attention-points' },
      ]
    },
  ];

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Hojo Undo (補助運動)</h1>
        
        {mainSections.map((section) => (
          <Card key={section.title}>
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
        ))}
      </div>
    </MobileLayout>
  );
};

export default HojoUndoPage;
