import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const UdeTanrenInformation = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/hojo-undo" className="inline-flex items-center mb-4 text-sm text-blue-600 hover:underline">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Terug naar Hojo Undo
          </Link>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">Ude Tanren - Informatie</h1>
              <p className="text-muted-foreground">Algemene informatie over Ude Tanren</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <Link to="/hojo-undo/ude-tanren/information">
              <Button variant="default" className="w-full">
                <Info className="h-4 w-4 mr-2" />
                Informatie
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
                  <Info className="mr-3 h-6 w-6 text-blue-500" />
                  Informatie over Ude Tanren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownRenderer markdownContent={`
# Ude Tanren - Informatie

## Wat is Ude Tanren?

Ude Tanren (腕鍛錬) betekent letterlijk "arm smeden" of "arm conditionering". Het zijn partneroefeningen die specifiek gericht zijn op het conditioneren van de armen door middel van gecontroleerde impact en contact.

## Functie en Doel

### Hoofddoelen
- **Conditionering van armen en lichaam**: Versterking van de onderarmen en verbetering van impactweerstand
- **Training van impact geven en ontvangen**: Ontwikkeling van het vermogen om schokken te geven en te ontvangen
- **Ontwikkeling van 'schok' vaardigheid**: Het lichaam leren omgaan met impact en contact
- **Versterking van lichaam en geest**: Mentale en fysieke discipline ontwikkelen
- **Leren incasseren en slaan**: Praktische toepassing van karate technieken

### Trainingseffecten
- **Verharde armen en lichaam**: Fysieke conditionering door regelmatige training
- **Betere impact absorptie**: Het lichaam wordt beter in het absorberen van schokken
- **Verhoogde pijnweerstand**: Mentale en fysieke weerstand tegen ongemak
- **Verbeterde partner training**: Betere samenwerking en communicatie
- **Versterkte mentale discipline**: Ontwikkeling van doorzettingsvermogen

## Constructie en Opzet

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

### Oefening Structuur
1. **Basis Contact**: Begin met lichte aanraking en geleidelijke opbouw
2. **Gecontroleerde Impact**: Verhoog geleidelijk de impact met behoud van juiste techniek
3. **Dynamische Beweging**: Integratie van stappen en beweging met verschillende technieken

## Aandachtspunten en Veiligheid

### Veiligheidsrichtlijnen
- **Begin met lichte impact**: Bouw langzaam op naar hogere intensiteit
- **Houd schouders ontspannen**: Beweeg vloeiend en gecontroleerd
- **Juiste contact oppervlakken**: Impact op het harde deel van de arm, niet op de zachte onderkant
- **Geleidelijke opbouw**: Start altijd met lichte contact en lage snelheid
- **Luister naar je lichaam**: Stop bij tekenen van ongemak of pijn

### Technische Aandachtspunten
- **Houding en positie**: Behoud stabiele sanchin dachi positie
- **Contact en impact**: Maak contact met het harde deel van de onderarm
- **Ademhaling en ritme**: Adem regelmatig en synchroniseer met partner
- **Partner communicatie**: Let op elkaars grenzen en comfortniveau

### Partner Communicatie
- **Wederzijds respect**: Let op elkaars grenzen en comfortniveau
- **Duidelijke afspraken**: Communiceer over intensiteit en tempo
- **Feedback en aanpassing**: Geef en ontvang constructieve feedback
- **Geduld en ondersteuning**: Wees geduldig en ondersteunend tijdens training

## Historische Achtergrond

Ude Tanren is een traditionele trainingmethode die zijn oorsprong vindt in Okinawa. Het is ontwikkeld om karateka's voor te bereiden op realistische gevechtssituaties door het lichaam te conditioneren voor impact en contact.

### Belang voor Modern Karate
In moderne karate training wordt vaak veel tijd besteed aan "thin air" training (technieken zonder contact). Ude Tanren zorgt ervoor dat karateka's ook ervaring opdoen met echte impact en contact, wat essentieel is voor effectieve zelfverdediging.

## Integratie met Goju-Ryu

Ude Tanren past perfect binnen het Goju-Ryu systeem omdat het:
- Dezelfde principes volgt als heishugata (Sanchin en Tensho)
- Focus legt op coördinatie van lichaam, adem en geest
- Praktische toepassing biedt van kata technieken
- De mentale en fysieke discipline ontwikkelt die nodig is voor karate-do
                `} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UdeTanrenInformation; 