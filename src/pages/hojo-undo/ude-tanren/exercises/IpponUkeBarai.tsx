import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, ChevronLeft, Users, Clock, AlertTriangle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const IpponUkeBarai = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Link to="/hojo-undo/ude-tanren/exercises" className="inline-flex items-center mb-4 text-sm text-blue-600 hover:underline">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Terug naar oefeningen
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Ippon Uke Barai</h1>
              <p className="text-muted-foreground">One-step blocking practice</p>
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
                  <span className="text-sm font-medium">10-15 minuten</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Gevorderd</span>
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
                    <Zap className="mr-3 h-6 w-6 text-purple-500" />
                    Oefening Beschrijving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MarkdownRenderer markdownContent={`
# Ippon Uke Barai - One-Step Blocking Practice

## Wat is het?

Ippon Uke Barai is een geavanceerde oefening waarbij beide partners naar voren stappen in sanchin dachi en verschillende blokken uitvoeren. Deze oefening focust op ritme, ademhaling en synchronisatie tussen partners.

## Uitvoering

### Startpositie
- Beide partners staan tegenover elkaar in heiko dachi (natuurlijke houding)
- Afstand van ongeveer één meter
- Schouders ontspannen en laag
- Focus op het centrum van het lichaam

### Basis Beweging

#### Fase 1: Voorwaartse Stap
- **Beide partners**: Stap naar voren met de rechtervoet in sanchin dachi
- **Timing**: Gelijktijdige beweging
- **Houding**: Behoud stabiele sanchin dachi positie

#### Fase 2: Jodan Age Uke
- **Beide partners**: Blok met rechter jodan age uke (hoge stijgende blok)
- **Contact**: Impact op het pols-uiteinde van de onderarm
- **Timing**: Direct na de staphouding

#### Fase 3: Terugstap
- **Beide partners**: Stap terug in heiko dachi
- **Beweging**: Gecontroleerde terugbeweging
- **Houding**: Behoud juiste vorm

### Blokken Sequentie

#### 1. Jodan Age Uke (Hoge Blok)
- **Positie**: Sanchin dachi
- **Beweging**: Stijgende blok met de rechterarm
- **Contact**: Pols-uiteinde van de onderarm
- **Terugstap**: Naar heiko dachi

#### 2. Chudan Uke (Midden Blok)
- **Positie**: Sanchin dachi
- **Beweging**: Middenniveau blok met de rechterarm
- **Contact**: Onderarm contact
- **Terugstap**: Naar heiko dachi

#### 3. Gedan Uke (Lage Blok)
- **Positie**: Shiko dachi (lage houding)
- **Beweging**: Lage blok met de rechterarm
- **Contact**: Onderarm contact
- **Terugstap**: Naar heiko dachi

## Belangrijke Punten

### Techniek
- **Synchronisatie**: Beide partners moeten gelijktijdig bewegen
- **Contact oppervlak**: Gebruik het pols-uiteinde van de onderarm
- **Houding**: Behoud stabiele sanchin dachi en shiko dachi posities
- **Beweging**: Vloeiende, gecontroleerde bewegingen

### Ademhaling en Ritme
- **Uitademen**: Bij het blokkeren
- **Inademen**: Bij het terugstappen
- **Ritme**: Ontwikkel een consistent ritme
- **Pace**: Regel de intensiteit door ademhaling

### Veiligheid
- **Geleidelijke opbouw**: Start langzaam en bouw op
- **Juiste oppervlakken**: Gebruik harde delen van de arm
- **Partner communicatie**: Let op elkaars comfortniveau
- **Controle**: Behoud controle over alle bewegingen

## Geavanceerde Variaties

### Alternerende Patronen
- **Links en rechts**: Wissel af tussen linker- en rechterarm
- **Verschillende houdingen**: Combineer sanchin dachi en shiko dachi
- **Snelheid variaties**: Experimenteer met verschillende tempi
- **Intensiteit opbouw**: Verhoog geleidelijk de impact

### Ritme Ontwikkeling
- **Stap eerst, dan techniek**: Strikte volgorde in het begin
- **Gecombineerde beweging**: Later kunnen stap en techniek samenvallen
- **Snellere uitvoering**: Naarmate partners meer ervaring hebben
- **Realistische snelheid**: Benadering van echte gevechtssituaties

## Voordelen

### Fysieke Voordelen
- **Arm conditionering**: Versterking van onderarmen
- **Impact training**: Het lichaam leren omgaan met contact
- **Uithoudingsvermogen**: Verbetering van kracht-uithoudingsvermogen
- **Coördinatie**: Ontwikkeling van motorische vaardigheden

### Technische Voordelen
- **Blok techniek**: Verbetering van blok technieken
- **Timing**: Betere timing en coördinatie
- **Partner synchronisatie**: Betere samenwerking
- **Realistische training**: Praktische toepassing van technieken

### Mentale Voordelen
- **Focus**: Verbetering van concentratie
- **Discipline**: Ontwikkeling van mentale discipline
- **Confidence**: Verhoogd zelfvertrouwen
- **Stress management**: Leren omgaan met druk

## Training Progressie

### Beginners Niveau
- **Focus**: Juiste techniek en timing
- **Snelheid**: Langzaam en gecontroleerd
- **Intensiteit**: Lichte contact
- **Duur**: 5-10 minuten

### Gevorderden Niveau
- **Focus**: Ritme en synchronisatie
- **Snelheid**: Gemiddelde snelheid
- **Intensiteit**: Matige contact
- **Duur**: 10-15 minuten

### Expert Niveau
- **Focus**: Hoge snelheid en intensiteit
- **Snelheid**: Snelle, dynamische bewegingen
- **Intensiteit**: Sterke contact
- **Duur**: 15-20 minuten

## Veelgemaakte Fouten

### Technische Fouten
- **Verkeerde timing**: Niet synchroniseren met partner
- **Onjuiste houding**: Niet behouden van sanchin dachi
- **Verkeerde contact oppervlakken**: Niet gebruiken van pols-uiteinde
- **Onderbroken bewegingen**: Niet vloeiende overgangen

### Veiligheidsfouten
- **Te snel beginnen**: Niet geleidelijk opbouwen
- **Vergeten te communiceren**: Niet letten op partner
- **Negeren van pijn**: Niet stoppen bij ongemak
- **Onjuiste afstand**: Niet behouden van juiste afstand

## Training Tips

### Voor Beginners
- Oefen eerst de individuele bewegingen
- Focus op juiste timing en techniek
- Communiceer duidelijk met je partner
- Neem de tijd om de bewegingen te leren

### Voor Gevorderden
- Verhoog geleidelijk de snelheid
- Experimenteer met verschillende ritmes
- Focus op vloeiende overgangen
- Integreer met andere technieken

### Veiligheidschecklist
- [ ] Juiste afstand behouden
- [ ] Geleidelijke opbouw van intensiteit
- [ ] Partner communicatie
- [ ] Juiste contact oppervlakken
- [ ] Vloeiende bewegingen
- [ ] Correcte houdingen behouden
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
                    <p>• Synchroniseer bewegingen met je partner</p>
                    <p>• Gebruik het pols-uiteinde van de onderarm voor contact</p>
                    <p>• Behoud juiste houdingen (sanchin dachi, shiko dachi)</p>
                    <p>• Stop bij ongemak of pijn</p>
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

export default IpponUkeBarai; 