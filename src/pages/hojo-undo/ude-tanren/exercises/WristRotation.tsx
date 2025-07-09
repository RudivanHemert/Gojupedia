import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, ChevronLeft, Users, Clock, AlertTriangle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';

const WristRotation = () => {
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
              <h1 className="text-2xl font-bold">Wrist Rotation</h1>
              <p className="text-muted-foreground">Pols rotatie oefening voor verbinding en kracht</p>
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
                  <Target className="h-4 w-4 text-purple-500" />
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
                    <RotateCcw className="mr-3 h-6 w-6 text-blue-500" />
                    Oefening Beschrijving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MarkdownRenderer markdownContent={`
# Wrist Rotation

## Wat is het?

De Wrist Rotation oefening is een eenvoudig ogende oefening die, wanneer correct uitgevoerd, je algehele bovenlichaam kracht verbetert en dat belangrijke gevoel van verbinding (muchimi) met de andere persoon ontwikkelt. Het helpt je ook om je vermogen te verbeteren om jezelf te verankeren aan de grond door een laag zwaartepunt aan te nemen.

## Uitvoering

### Startpositie
- Beide partners staan tegenover elkaar
- Beide staan in migi sanchin dachi (rechterbeen naar voren in sanchin houding)
- Plaats de rechterpolsen tegen elkaar zoals getoond
- Schouders ontspannen en laag

### Basis Beweging

#### Fase 1: Handen naar je toe draaien
- **Beide partners**: Begin beide handen naar je toe te draaien
- **Handpalm positie**: Houd de handpalmen naar boven gericht
- **Beweging**: Blijf draaien tot de vingers direct naar je gezicht wijzen

#### Fase 2: Handpalmen omdraaien
- **Beide partners**: Blijf draaien terwijl de handen omdraaien
- **Handpalm positie**: De handpalmen draaien nu naar beneden
- **Beweging**: Vloeiende overgang van omhoog naar omlaag

#### Fase 3: Oksel sluiten
- **Beide partners**: Probeer je oksel te sluiten
- **Effect**: Dit geeft de andere persoon een lichte trek
- **Contact**: Houd de polsen altijd tegen elkaar

#### Fase 4: Omgekeerde beweging
- **Beide partners**: Herhaal de oefening in omgekeerde richting
- **Belangrijk**: Houd de polsen altijd tegen elkaar
- **Ritme**: Blijf de handen naar je toe draaien bij elke beweging

## Belangrijke Punten

### Techniek
- **Pols contact**: Houd de polsen altijd tegen elkaar
- **Hand rotatie**: Blijf de handen naar je toe draaien bij elke beweging
- **Oksel sluiten**: Probeer je oksel te sluiten voor het trek effect
- **Vloeiende beweging**: Geen onderbrekingen in de beweging

### Verbinding (Muchimi)
- **Fysieke verbinding**: Ontwikkeling van fysieke verbinding met partner
- **Energie uitwisseling**: Leren om energie te voelen en uit te wisselen
- **Timing**: Synchronisatie van bewegingen met partner
- **Vertrouwen**: Bouwen van vertrouwen in partner training

### Grondverankering
- **Laag zwaartepunt**: Ontwikkeling van laag zwaartepunt
- **Stabiliteit**: Verbetering van stabiliteit en balans
- **Kracht**: Versterking van benen en core
- **Houding**: Behoud van juiste sanchin dachi houding

## Voordelen

### Fysieke Voordelen
- **Bovenlichaam kracht**: Versterking van armen, schouders en borst
- **Pols stabiliteit**: Verbetering van pols kracht en stabiliteit
- **Core kracht**: Versterking van buikspieren en rug
- **Flexibiliteit**: Ontwikkeling van bewegingsbereik in polsen

### Technische Voordelen
- **Muchimi ontwikkeling**: Verbetering van verbinding gevoel
- **Partner synchronisatie**: Betere samenwerking met trainingspartner
- **Timing**: Ontwikkeling van timing en ritme
- **Kracht controle**: Leren om kracht gecontroleerd te gebruiken

### Mentale Voordelen
- **Focus**: Verbetering van concentratie en aandacht
- **Discipline**: Ontwikkeling van mentale discipline
- **Partner vertrouwen**: Bouwen van vertrouwen met trainingspartner
- **Confidence**: Verhoogd zelfvertrouwen in partner training

## Training Progressie

### Beginners Niveau
- **Focus**: Juiste techniek en contact
- **Snelheid**: Langzaam en gecontroleerd
- **Intensiteit**: Lichte druk
- **Duur**: 3-5 minuten

### Gevorderden Niveau
- **Focus**: Verbinding en synchronisatie
- **Snelheid**: Gemiddelde snelheid
- **Intensiteit**: Matige druk
- **Duur**: 5-10 minuten

### Expert Niveau
- **Focus**: Hoge intensiteit en controle
- **Snelheid**: Snelle, gecontroleerde bewegingen
- **Intensiteit**: Sterke druk
- **Duur**: 10-15 minuten

## Veelgemaakte Fouten

### Technische Fouten
- **Verlies van pols contact**: Niet behouden van pols contact
- **Verkeerde hand rotatie**: Niet correct draaien van handen
- **Onjuiste houding**: Niet behouden van sanchin dachi
- **Onderbroken bewegingen**: Niet vloeiende overgangen

### Veiligheidsfouten
- **Te veel druk**: Te harde druk op polsen
- **Vergeten te communiceren**: Niet letten op partner
- **Negeren van pijn**: Niet stoppen bij ongemak
- **Onjuiste afstand**: Niet behouden van juiste afstand

## Training Tips

### Voor Beginners
- Focus op juiste pols contact
- Oefen langzaam en gecontroleerd
- Communiceer duidelijk met je partner
- Neem de tijd om de beweging te leren

### Voor Gevorderden
- Verhoog geleidelijk de intensiteit
- Experimenteer met verschillende ritmes
- Focus op verbinding gevoel
- Integreer met andere technieken

### Veiligheidschecklist
- [ ] Pols contact behouden
- [ ] Geleidelijke opbouw van intensiteit
- [ ] Partner communicatie
- [ ] Juiste houding behouden
- [ ] Vloeiende bewegingen
- [ ] Correcte hand rotatie
- [ ] Veilige druk niveaus

## Integratie met Andere Oefeningen

### Voorbereiding
- **Warming-up**: Gebruik als warming-up voor andere Ude Tanren oefeningen
- **Partner synchronisatie**: Helpt bij het ontwikkelen van partner synchronisatie
- **Focus ontwikkeling**: Verbetert focus voor complexere oefeningen

### Afsluiting
- **Cooling-down**: Gebruik als cooling-down na intensieve training
- **Reflectie**: Tijd voor reflectie en partner feedback
- **Relaxatie**: Helpt bij ontspanning na training

## Variaties

### Basis Variatie
- **Links en rechts**: Wissel af tussen linker- en rechterpols
- **Verschillende houdingen**: Experimenteer met verschillende stances
- **Snelheid variaties**: Verander de snelheid van de beweging

### Geavanceerde Variatie
- **Eén hand**: Oefen met één hand tegelijk
- **Bewegende stances**: Combineer met stappen en bewegingen
- **Kracht variaties**: Experimenteer met verschillende kracht niveaus
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
                    <p>• Houd de polsen altijd tegen elkaar</p>
                    <p>• Gebruik gecontroleerde druk, niet te hard</p>
                    <p>• Behoud juiste sanchin dachi houding</p>
                    <p>• Stop bij ongemak of pijn in polsen</p>
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

export default WristRotation; 