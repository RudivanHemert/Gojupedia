import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, ChevronLeft, Users, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const SwingingArmDrill = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/hojo-undo/ude-tanren/exercises" className="inline-flex items-center mb-4 text-sm text-blue-600 hover:underline">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Terug naar oefeningen
          </Link>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Link to="/hojo-undo/ude-tanren/exercises">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Terug naar Oefeningen
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Swinging Arm Drill</h1>
              <p className="text-muted-foreground">Basis oefening voor arm conditionering</p>
            </div>
          </div>

          {/* Exercise Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Partner Oefening</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">5-10 minuten</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium">Beginner</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Target className="mr-3 h-6 w-6 text-red-500" />
                    Oefening Beschrijving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MarkdownRenderer markdownContent={`
# Swinging Arm Drill

## Wat is het?

De Swinging Arm Drill is een basis oefening voor arm conditionering waarbij beide partners ontspannen zwaaibewegingen maken met hun armen tegen elkaar aan. Deze oefening vormt de basis voor meer geavanceerde Ude Tanren technieken.

## Uitvoering

### Startpositie
- Beide partners staan tegenover elkaar
- Afstand van ongeveer één armlengte
- Begin in sanchin dachi positie
- Schouders ontspannen en laag

### Basis Beweging
1. **Begin met linkerarm**: Beide partners zwaaien hun linkerarm ontspannen tegen elkaar aan
2. **Contact oppervlak**: Impact moet op de binnenkant van de armen zijn, niet op de zachte onderkant
3. **Ontspannen beweging**: Houd de schouders ontspannen en beweeg vloeiend
4. **Geleidelijke opbouw**: Start met lichte contact en bouw langzaam op

### Progressie
- **Fase 1**: Enkele impact oefening met binnenkant gedan barai
- **Fase 2**: Voeg buitenkant gedan barai toe
- **Fase 3**: Combineer binnenkant en buitenkant chudan uke
- **Fase 4**: Wissel af van arm tot arm in een vloeiende beweging

## Belangrijke Punten

### Techniek
- **Contact oppervlak**: Gebruik altijd de binnenkant van de onderarm
- **Vermijd**: De zachte onderkant waar aderen en slagaders dicht aan de oppervlakte liggen
- **Houding**: Behoud stabiele sanchin dachi positie
- **Beweging**: Vloeiende zwaaibewegingen, niet stotend

### Veiligheid
- **Geleidelijke opbouw**: Zware contact in een vroeg stadium kan contraproductief zijn
- **Luister naar je lichaam**: Stop bij ongemak of pijn
- **Partner communicatie**: Let op elkaars comfortniveau
- **Juiste oppervlakken**: Gebruik alleen de harde delen van de arm

### Ademhaling
- **Regelmatige ademhaling**: Adem gecontroleerd en regelmatig
- **Synchronisatie**: Probeer je ademhaling te synchroniseren met je partner
- **Ritme**: Ontwikkel een consistent ritme in de bewegingen

## Voordelen

### Fysieke Voordelen
- **Arm conditionering**: Versterking van de onderarmen
- **Impact weerstand**: Het lichaam leert omgaan met contact
- **Coördinatie**: Verbetering van motorische vaardigheden
- **Flexibiliteit**: Ontwikkeling van bewegingsbereik

### Mentale Voordelen
- **Focus**: Verbetering van concentratie en aandacht
- **Discipline**: Ontwikkeling van doorzettingsvermogen
- **Partner vertrouwen**: Bouwen van vertrouwen met trainingspartner
- **Confidence**: Verhoogd zelfvertrouwen in contact situaties

## Training Tips

### Voor Beginners
- Begin met zeer lichte contact
- Focus op juiste positie en houding
- Neem de tijd om de beweging te leren
- Communiceer duidelijk met je partner

### Voor Gevorderden
- Verhoog geleidelijk de intensiteit
- Experimenteer met verschillende ritmes
- Integreer met andere technieken
- Focus op vloeiende overgangen

### Veiligheidschecklist
- [ ] Schouders ontspannen
- [ ] Juiste contact oppervlakken
- [ ] Geleidelijke opbouw
- [ ] Partner communicatie
- [ ] Comfortniveau bewaking
- [ ] Juiste houding behouden
                  `} />
                </CardContent>
              </Card>
            </motion.div>

            {/* Safety Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-orange-800">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Veiligheidsherinnering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-orange-700 space-y-2">
                    <p>• Begin altijd met lichte contact en bouw geleidelijk op</p>
                    <p>• Gebruik alleen de harde delen van de arm voor contact</p>
                    <p>• Stop onmiddellijk bij ongemak of pijn</p>
                    <p>• Communiceer duidelijk met je partner over intensiteit</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwingingArmDrill; 