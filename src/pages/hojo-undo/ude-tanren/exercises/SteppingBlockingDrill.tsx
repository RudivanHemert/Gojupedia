import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ChevronLeft, Clock, AlertTriangle, ArrowRightLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const SteppingBlockingDrill = () => {
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
              <h1 className="text-2xl font-bold">Stepping & Blocking Drill</h1>
              <p className="text-muted-foreground">Dynamische oefening met stappen en blokken</p>
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
                  <ArrowRightLeft className="h-4 w-4 text-purple-500" />
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
                    <Users className="mr-3 h-6 w-6 text-blue-500" />
                    Oefening Beschrijving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MarkdownRenderer markdownContent={`
# Stepping & Blocking Drill

## Wat is het?

De Stepping & Blocking Drill is een dynamische oefening waarbij partners naar voren en achteruit stappen terwijl ze blokken en slagen uitvoeren. Deze oefening combineert beweging, timing en impact training in één vloeiende routine.

## Uitvoering

### Startpositie
- Beide partners staan tegenover elkaar
- Afstand van ongeveer één armlengte
- Begin in sanchin dachi positie
- Schouders ontspannen en laag

### Basis Beweging

#### Fase 1: Aanval
- **Partner A**: Stapt naar voren met de rechtervoet
- **Partner A**: Werpt een chudan zuki (middenniveau stoot) met de rechterhand
- **Timing**: Stap en stoot gebeuren gelijktijdig

#### Fase 2: Verdediging
- **Partner B**: Stapt achteruit met de linkervoet
- **Partner B**: Blokt met de rechterhand met chudan hikei uke (middenniveau open-hand blok)
- **Timing**: Stap en blok gebeuren gelijktijdig

#### Fase 3: Tegenaanval
- **Partner B**: Herhaalt de blok met de linkerhand
- **Partner B**: Slaat de stotende arm met een rechterhand shuto uchi (open-hand slag)
- **Timing**: Vloeiende overgang van blok naar slag

#### Fase 4: Rolwissel
- **Rollen omdraaien**: Partner B wordt aanvaller, Partner A wordt verdediger
- **Herhaal**: Dezelfde bewegingen in omgekeerde richting
- **Continue**: Blijf doorgaan tot het gewenste aantal herhalingen

## Belangrijke Punten

### Techniek
- **Stap vooruit**: Stap naar voren in een blok, niet terug
- **Offensieve mindset**: Blijf offensief tijdens het blokkeren
- **Timing**: Synchroniseer bewegingen met je partner
- **Contact**: Maak contact met de juiste oppervlakken van de arm

### Bewegingspatronen
- **Voorwaartse beweging**: Stap naar voren tijdens het blokkeren
- **Achterwaartse beweging**: Stap achteruit tijdens het aanvallen
- **Vloeiende overgangen**: Geen onderbrekingen tussen bewegingen
- **Ritme**: Ontwikkel een consistent ritme

### Veiligheid
- **Geleidelijke opbouw**: Start met lage snelheid en intensiteit
- **Juiste oppervlakken**: Gebruik harde delen van de arm voor contact
- **Partner communicatie**: Let op elkaars comfortniveau
- **Controle**: Behoud controle over alle bewegingen

## Voordelen

### Fysieke Voordelen
- **Dynamische beweging**: Verbetering van bewegingspatronen
- **Timing ontwikkeling**: Betere coördinatie en timing
- **Impact training**: Conditionering van armen en lichaam
- **Uithoudingsvermogen**: Verbetering van kracht-uithoudingsvermogen

### Technische Voordelen
- **Offensieve verdediging**: Leren om offensief te blijven tijdens verdediging
- **Partner synchronisatie**: Betere samenwerking met trainingspartner
- **Realistische training**: Praktische toepassing van technieken
- **Ritme ontwikkeling**: Verbetering van bewegingsritme

### Mentale Voordelen
- **Focus**: Verbetering van concentratie tijdens beweging
- **Besluitvorming**: Snellere reactietijden en besluitvorming
- **Confidence**: Verhoogd zelfvertrouwen in dynamische situaties
- **Discipline**: Ontwikkeling van mentale discipline

## Training Progressie

### Beginners Niveau
- **Focus**: Juiste techniek en timing
- **Snelheid**: Langzaam en gecontroleerd
- **Intensiteit**: Lichte contact
- **Duur**: 5-10 minuten

### Gevorderden Niveau
- **Focus**: Vloeiende overgangen en ritme
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
- **Terugstappen tijdens blokken**: Blijf offensief en stap naar voren
- **Onderbroken bewegingen**: Houd bewegingen vloeiend
- **Verkeerde timing**: Synchroniseer met je partner
- **Onjuiste contact oppervlakken**: Gebruik harde delen van de arm

### Veiligheidsfouten
- **Te snel beginnen**: Bouw geleidelijk op
- **Vergeten te communiceren**: Houd contact met je partner
- **Negeren van pijn**: Stop bij ongemak
- **Onjuiste afstand**: Behoud juiste trainingsafstand

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
- [ ] Offensieve mindset behouden
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
                    <p>• Stap naar voren tijdens het blokkeren, niet terug</p>
                    <p>• Behoud juiste afstand tussen partners</p>
                    <p>• Synchroniseer bewegingen met je partner</p>
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

export default SteppingBlockingDrill; 