import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hammer, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const UdeTanrenConstruction = () => {
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
              <h1 className="text-2xl font-bold">Ude Tanren - Constructie</h1>
              <p className="text-muted-foreground">Opzet en structuur van arm conditionering</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <Link to="/hojo-undo/ude-tanren/function">
              <Button variant="outline" className="w-full">
                Functie
              </Button>
            </Link>
            <Link to="/hojo-undo/ude-tanren/construction">
              <Button variant="default" className="w-full">
                <Hammer className="h-4 w-4 mr-2" />
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
                  <Hammer className="mr-3 h-6 w-6 text-orange-500" />
                  Constructie van Ude Tanren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownRenderer markdownContent={`
# Ude Tanren - Constructie

## Wat is Ude Tanren?

Ude Tanren (腕鍛錬) betekent letterlijk "arm smeden" of "arm conditionering". Het zijn partneroefeningen die specifiek gericht zijn op het conditioneren van de armen door middel van gecontroleerde impact en contact.

## Basis Constructie

### Partner Opstelling
- Twee karateka's staan tegenover elkaar
- Begin in sanchin dachi positie
- Afstand van ongeveer één armlengte
- Beide partners zijn gelijkwaardig in de oefening

### Fysieke Positie
- Stabiele sanchin dachi houding
- Schouders ontspannen en laag
- Armen in de juiste positie voor de oefening
- Focus op het centrum van het lichaam

## Oefening Structuur

### 1. Basis Contact
- Begin met lichte aanraking
- Geleidelijke opbouw van intensiteit
- Focus op juiste positie en houding
- Synchronisatie tussen partners

### 2. Gecontroleerde Impact
- Verhoog geleidelijk de impact
- Behoud juiste techniek en vorm
- Timing en ritme synchroniseren
- Wederzijds respect en communicatie

### 3. Dynamische Beweging
- Integratie van stappen en beweging
- Combinatie van verschillende technieken
- Verhoogde snelheid en intensiteit
- Uithoudingsvermogen ontwikkeling

## Technische Elementen

### Arm Posities
- **Binnenkant van de arm**: Voor basis contact en conditionering
- **Buitenkant van de arm**: Voor blokken en verdediging
- **Onderarm**: Voor impact en krachtontwikkeling
- **Polsen**: Voor stabiliteit en controle

### Bewegingspatronen
- **Zwaaibewegingen**: Voor basis conditionering
- **Blokbewegingen**: Voor technische ontwikkeling
- **Stapbewegingen**: Voor dynamische training
- **Rotatiebewegingen**: Voor flexibiliteit en controle

## Veiligheidsconstructie

### Geleidelijke Opbouw
- Start altijd met lichte contact
- Verhoog intensiteit stap voor stap
- Luister naar lichaamssignalen
- Stop bij ongemak of pijn

### Partner Communicatie
- Duidelijke afspraken over intensiteit
- Wederzijds respect voor grenzen
- Constructieve feedback
- Gezamenlijke vooruitgang

## Integratie met Training

### Warming-up
- Ude Tanren kan dienen als warming-up
- Voorbereiding van armen en schouders
- Mentale voorbereiding op training
- Partner synchronisatie

### Hoofdtraining
- Intensieve conditionering sessies
- Technische verfijning
- Uithoudingsvermogen ontwikkeling
- Geestelijke versterking

### Cooling-down
- Lichte stretching na training
- Reflectie op techniek en vooruitgang
- Partner feedback en discussie
- Voorbereiding op volgende sessie
                `} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UdeTanrenConstruction; 