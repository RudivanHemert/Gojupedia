import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, ChevronLeft, Users, Clock, AlertTriangle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const SandanUkeBarai = () => {
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
              <h1 className="text-2xl font-bold">Sandan Uke Barai</h1>
              <p className="text-muted-foreground">Three-step blocking practice</p>
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
                  <span className="text-sm font-medium">15-20 minuten</span>
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
# Sandan Uke Barai - Three-Step Blocking Practice

## Wat is het?

Sandan Uke Barai, ook bekend als "san dan gi" (drie-stap techniek), is een geavanceerde oefening die opeenvolgende voorwaartse en achterwaartse stappen introduceert. Deze oefening combineert drie verschillende niveaus van aanvallen en verdedigingen in één vloeiende sequentie.

## Uitvoering

### Startpositie
- Beide partners staan tegenover elkaar
- Afstand van ongeveer één meter
- Begin in heiko dachi (natuurlijke houding)
- Schouders ontspannen en laag

### Drie-Stap Sequentie

#### Stap 1: Jodan Zuki (Hoge Stoot)
- **Aanvaller**: Stapt naar voren met rechtervoet in sanchin dachi
- **Aanvaller**: Werpt jodan zuki (hoofdhoogte stoot) met rechterhand
- **Verdediger**: Stapt achteruit met linkervoet in sanchin dachi
- **Verdediger**: Blokt met rechter jodan uke (hoge blok)

#### Stap 2: Chudan Zuki (Midden Stoot)
- **Aanvaller**: Stapt naar voren in sanchin dachi
- **Aanvaller**: Werpt chudan zuki (middenniveau stoot) met linkerhand
- **Verdediger**: Stapt achteruit met rechtervoet in sanchin dachi
- **Verdediger**: Blokt met linker chudan uke (middenniveau blok)

#### Stap 3: Gedan Zuki (Lage Stoot)
- **Aanvaller**: Stapt naar voren en daalt in shiko dachi
- **Aanvaller**: Werpt gedan zuki (lage stoot) met rechterhand
- **Verdediger**: Stapt achteruit en daalt in shiko dachi
- **Verdediger**: Blokt met rechter gedan barai (lage veegblok)

### Rolwissel
Na de derde stap worden de rollen omgedraaid en de oefening beweegt in de tegenovergestelde richting.

## Belangrijke Punten

### Primair Doel
Het hoofddoel van deze training is het conditioneren van het lichaam voor contact. Als een blok faalt, moet er een lichte impact van de stoot gevoeld worden.

### Timing en Afstand
- **Juiste afstand**: De achterwaartse stap is geen terugtocht, maar een manier om een geschikte (tegenstoot) afstand te behouden
- **Verdediger beweegt niet eerst**: De verdediger mag nooit als eerste bewegen of buiten zijn eigen stootbereik gaan
- **Blend met beweging**: Probeer niet de stoten te ontwijken, maar blend met de beweging van de andere persoon

### Veiligheid
- **Hoofdstoten**: Neem grote zorg bij stoten naar het hoofd
- **Lichaamstoten**: Deze moeten een lichte en uiteindelijk een redelijke hoeveelheid gewicht dragen
- **Geleidelijke opbouw**: Begin met lichte impact en bouw geleidelijk op

## Geavanceerde Aspecten

### Ritme Ontwikkeling
- **Strikte volgorde**: In het begin, stap eerst, dan techniek
- **Snellere uitvoering**: Later kunnen partners overeenkomen om sneller te gaan
- **Realistische snelheid**: Benadering van snelheden die gevonden worden in echte gevechten
- **Uithoudingsvermogen**: Over een periode van tien of meer minuten kan sandan uke barai zelfs de fitste en sterkste karateka uitputten

### Technische Verfijning
- **Sweep techniek**: Probeer de stoot van de andere persoon weg te vegen
- **Counter-punching positie**: Behoud een positie die geschikt is voor tegenstoten
- **Vloeiende overgangen**: Geen onderbrekingen tussen de drie stappen
- **Partner synchronisatie**: Perfecte timing tussen aanvaller en verdediger

## Voordelen

### Fysieke Voordelen
- **Uitgebreide conditionering**: Volledige lichaam conditionering
- **Uithoudingsvermogen**: Verbetering van kracht-uithoudingsvermogen
- **Coördinatie**: Ontwikkeling van complexe motorische vaardigheden
- **Impact training**: Het lichaam leren omgaan met verschillende niveaus van contact

### Technische Voordelen
- **Realistische training**: Praktische toepassing van gevechtstechnieken
- **Timing ontwikkeling**: Verbetering van timing en reactietijden
- **Afstand management**: Leren om juiste afstanden te behouden
- **Techniek integratie**: Combinatie van verschillende blok- en stoottechnieken

### Mentale Voordelen
- **Focus**: Verbetering van concentratie tijdens complexe bewegingen
- **Discipline**: Ontwikkeling van mentale discipline en doorzettingsvermogen
- **Stress management**: Leren omgaan met druk en vermoeidheid
- **Confidence**: Verhoogd zelfvertrouwen in uitdagende situaties

## Training Progressie

### Beginners Niveau
- **Focus**: Juiste techniek en volgorde
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
- **Verkeerde volgorde**: Niet volgen van de juiste sequentie
- **Onjuiste timing**: Niet synchroniseren met partner
- **Verkeerde afstand**: Niet behouden van juiste afstand
- **Onderbroken bewegingen**: Niet vloeiende overgangen

### Veiligheidsfouten
- **Te snel beginnen**: Niet geleidelijk opbouwen
- **Vergeten te communiceren**: Niet letten op partner
- **Negeren van pijn**: Niet stoppen bij ongemak
- **Onjuiste impact**: Te harde contact in het begin

## Training Tips

### Voor Beginners
- Oefen eerst de individuele bewegingen
- Focus op juiste volgorde en timing
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
- [ ] Correcte volgorde van technieken
- [ ] Veilige impact niveaus
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
                    <p>• Neem grote zorg bij stoten naar het hoofd</p>
                    <p>• Blend met de beweging, ontwijk niet</p>
                    <p>• Behoud juiste afstand voor counter-punching</p>
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

export default SandanUkeBarai; 