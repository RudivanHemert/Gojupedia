import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const UdeTanrenExercises = () => {
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
              <h1 className="text-2xl font-bold">Ude Tanren - Oefeningen</h1>
              <p className="text-muted-foreground">Specifieke oefeningen en routines</p>
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
              <Button variant="outline" className="w-full">
                Aandachtspunten
              </Button>
            </Link>
            <Link to="/hojo-undo/ude-tanren/exercises">
              <Button variant="default" className="w-full">
                <Activity className="h-4 w-4 mr-2" />
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
                  <Activity className="mr-3 h-6 w-6 text-purple-500" />
                  Oefeningen voor Ude Tanren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownRenderer markdownContent={`
# Ude Tanren - Oefeningen

## Basis Oefeningen

### 1. Swinging Arm Drill
Beide partners zwaaien de linkerarm ontspannen tegen elkaar aan (binnenkant van de arm). Bouw op naar buitenwaartse en binnenwaartse blokken, en wissel af van arm tot arm.

**Techniek:**
- Begin met lichte, ontspannen zwaaibewegingen
- Maak contact met de binnenkant van de onderarm
- Bouw geleidelijk op naar meer gecontroleerde bewegingen
- Wissel regelmatig van arm

### 2. Stepping & Blocking Drill
Eén persoon stapt naar voren en stoot, de ander stapt achteruit en blokt met open hand, gevolgd door een openhandige slag. Rollen worden omgedraaid.

**Uitvoering:**
- Partner A stapt naar voren met een stoot
- Partner B stapt achteruit en blokt met open hand
- Partner B volgt op met een openhandige slag
- Wissel rollen en herhaal

## Geavanceerde Oefeningen

### 3. Ippon Uke Barai (One-Step Blocking Practice)
Beide partners stappen naar voren in sanchin dachi en blokkeren met jodan age uke. Stap terug, herhaal met chudan uke en gedan uke.

**Focus Punten:**
- Behoud sanchin dachi positie
- Synchroniseer bewegingen met partner
- Focus op ritme en ademhaling
- Controleer impact en timing

### 4. Sandan Uke Barai (Three-Step Blocking Practice)
Drie opeenvolgende stappen en blokken: jodan, chudan, gedan. Daarna rollen omdraaien.

**Belangrijke Aspecten:**
- Niet ontwijken, maar contact maken
- Oefen timing en ritme
- Behoud juiste vorm en positie
- Bouw intensiteit geleidelijk op

### 5. Wrist Rotation
Sta tegenover elkaar in sanchin dachi, polsen tegen elkaar. Draai de handen naar je toe, dan van je af, houd contact.

**Voordelen:**
- Verbetert verbinding (muchimi)
- Ontwikkelt kracht in het bovenlichaam
- Verbetert polsstabiliteit
- Versterkt partner synchronisatie

## Training Routines

### Beginners Routine
1. Swinging Arm Drill - 5 minuten
2. Stepping & Blocking Drill - 5 minuten
3. Wrist Rotation - 3 minuten

### Gevorderden Routine
1. Ippon Uke Barai - 10 minuten
2. Sandan Uke Barai - 10 minuten
3. Gecombineerde oefeningen - 10 minuten

### Expert Routine
1. Alle oefeningen in volgorde
2. Verhoogde intensiteit en snelheid
3. Langere sessies (20-30 minuten per oefening)
4. Integratie met kata bewegingen

## Progressie Tips

### Fase 1: Basis Contact
- Begin met lichte aanraking
- Focus op juiste positie en houding
- Leer je partner kennen

### Fase 2: Gecontroleerde Impact
- Verhoog geleidelijk de impact
- Behoud juiste techniek
- Synchroniseer met partner

### Fase 3: Dynamische Training
- Verhoog snelheid en intensiteit
- Integreer met andere technieken
- Ontwikkel uithoudingsvermogen
                `} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UdeTanrenExercises; 