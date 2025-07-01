import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const UdeTanrenAttentionPoints = () => {
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
              <h1 className="text-2xl font-bold">Ude Tanren - Aandachtspunten</h1>
              <p className="text-muted-foreground">Veiligheidsrichtlijnen en technische focus</p>
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
              <Button variant="outline" className="w-full">
                Constructie
              </Button>
            </Link>
            <Link to="/hojo-undo/ude-tanren/attention-points">
              <Button variant="default" className="w-full">
                <Eye className="h-4 w-4 mr-2" />
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
                  <Eye className="mr-3 h-6 w-6 text-green-500" />
                  Aandachtspunten voor Ude Tanren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownRenderer markdownContent={`
# Ude Tanren - Aandachtspunten

## Veiligheidsrichtlijnen

### Basis Veiligheid
- Begin met lichte impact, bouw langzaam op
- Houd de schouders ontspannen en beweeg vloeiend
- Impact moet op het harde deel van de arm, niet op de zachte onderkant
- Probeer niet te ontwijken, maar beweeg met de partner mee

### Geleidelijke Opbouw
- Start altijd met lichte contact en lage snelheid
- Verhoog intensiteit en snelheid geleidelijk
- Luister naar je lichaam en die van je partner
- Stop bij tekenen van ongemak of pijn

## Technische Aandachtspunten

### Houding en Positie
- Behoud een stabiele sanchin dachi positie
- Houd de schouders ontspannen en laag
- Focus op het centrum van je lichaam
- Beweeg vanuit de heupen, niet alleen de armen

### Contact en Impact
- Maak contact met het harde deel van de onderarm
- Vermijd contact op de zachte onderkant van de arm
- Gebruik de juiste oppervlakken voor blokken
- Houd de polsen recht en stabiel

### Ademhaling en Ritme
- Adem regelmatig en gecontroleerd
- Synchroniseer je ademhaling met je partner
- Behoud een consistent ritme
- Gebruik kiai op de juiste momenten

## Partner Communicatie

### Wederzijds Respect
- Let op elkaars grenzen en comfortniveau
- Communiceer duidelijk over intensiteit
- Respecteer wanneer je partner een pauze nodig heeft
- Bouw samen op naar hogere niveaus

### Feedback en Aanpassing
- Geef en ontvang constructieve feedback
- Pas je niveau aan aan dat van je partner
- Wees geduldig en ondersteunend
- Vier samen vooruitgang en verbetering
                `} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UdeTanrenAttentionPoints; 