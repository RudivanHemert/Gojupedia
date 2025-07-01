import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const UdeTanrenFunction = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Link to="/hojo-undo">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Terug naar Hojo Undo
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Ude Tanren - Functie</h1>
              <p className="text-muted-foreground">Doel en functie van arm conditionering</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <Link to="/hojo-undo/ude-tanren/function">
              <Button variant="default" className="w-full">
                <Target className="h-4 w-4 mr-2" />
                Functie
              </Button>
            </Link>
            <Link to="/hojo-undo/ude-tanren/construction">
              <Button variant="outline" className="w-full">
                Constructie
              </Button>
            </Link>
            <Link to="/hojo-undo/ude-tanren/attention-points">
              <Button variant="outline" className="w-full">
                Aandachtspunten
              </Button>
            </Link>
            <Link to="/hojo-undo/ude-tanren/exercises">
              <Button variant="outline" className="w-full">
                Oefeningen
              </Button>
            </Link>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="mr-3 h-6 w-6 text-blue-500" />
                  Functie van Ude Tanren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownRenderer markdownContent={`
# Ude Tanren - Functie

## Doel en Functie

Ude Tanren zijn partneroefeningen voor het conditioneren van de armen en het trainen van impact. Het doel is het lichaam te laten wennen aan contact, het ontwikkelen van de vaardigheid om 'schok' te geven en te ontvangen, en het versterken van zowel lichaam als geest.

## Belangrijke Aspecten

### Lichamelijke Conditionering
- Het lichaam laten wennen aan impact en contact
- Versterking van de armen en schouders
- Ontwikkeling van uithoudingsvermogen

### Technische Vaardigheden
- Leren om impact te geven en te ontvangen
- Verbetering van timing en ritme
- Ontwikkeling van controle en precisie

### Mentale Training
- Versterking van de geest door regelmatige training
- Ontwikkeling van doorzettingsvermogen
- Verbetering van focus en concentratie

## Partner Training

Regelmatige training met een partner is essentieel om niet alleen te leren slaan, maar ook om te leren incasseren. Deze oefeningen helpen bij het ontwikkelen van wederzijds respect en begrip voor de impact van technieken.

## Integratie met Karate

Ude Tanren oefeningen zijn een integraal onderdeel van traditionele karate training en helpen bij het voorbereiden van het lichaam op meer geavanceerde technieken en sparring.
                `} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UdeTanrenFunction; 