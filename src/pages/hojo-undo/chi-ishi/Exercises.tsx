import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Dumbbell, Clock, Target, TrendingUp } from 'lucide-react';

const ChiIshiExercises = () => {
  const { t } = useTranslation();

  const basicExercises = [
    {
      name: "Chi Ishi Uchi (Stootbeweging)",
      description: "Simuleer stoottechnieken met de Chi Ishi",
      technique: [
        "Houd de Chi Ishi met beide handen vast",
        "Sta in een natuurlijke houding",
        "Voer stootbewegingen uit naar voren",
        "Houd de polsen recht en de armen gestrekt",
        "Keer gecontroleerd terug naar startpositie"
      ],
      sets: "3-5 sets van 10-15 herhalingen",
      focus: "Schouder- en armkracht, techniek simulatie"
    },
    {
      name: "Chi Ishi Uke (Blokkeerbeweging)",
      description: "Oefen blokkeertechnieken met gewicht",
      technique: [
        "Houd de Chi Ishi voor je lichaam",
        "Voer verschillende blokkeerbewegingen uit",
        "Focus op correcte armposities",
        "Beweeg gecontroleerd en bewust",
        "Wissel tussen verschillende blokkeertechnieken"
      ],
      sets: "3-5 sets van 8-12 herhalingen per techniek",
      focus: "Armkracht, techniek precisie, reactievermogen"
    },
    {
      name: "Chi Ishi Mawashi (Cirkelbeweging)",
      description: "Maak cirkelvormige bewegingen met de Chi Ishi",
      technique: [
        "Houd de Chi Ishi voor je lichaam",
        "Maak grote cirkelbewegingen",
        "Wissel tussen voorwaartse en achterwaartse cirkels",
        "Houd de beweging vloeiend en gecontroleerd",
        "Focus op schouder mobiliteit"
      ],
      sets: "3 sets van 10 cirkels in elke richting",
      focus: "Schouder mobiliteit, coördinatie, uithoudingsvermogen"
    }
  ];

  const advancedExercises = [
    {
      name: "Chi Ishi Kata Training",
      description: "Voer kata bewegingen uit met de Chi Ishi",
      technique: [
        "Kies een eenvoudige kata (bijv. Gekisai Dai Ichi)",
        "Voer de bewegingen langzaam uit met de Chi Ishi",
        "Focus op correcte techniek en houding",
        "Pas de bewegingen aan voor het gewicht",
        "Bouw geleidelijk op in complexiteit"
      ],
      sets: "2-3 volledige kata herhalingen",
      focus: "Techniek integratie, kracht-uithoudingsvermogen, balans"
    },
    {
      name: "Chi Ishi Kihon (Basisbewegingen)",
      description: "Combineer basis karate technieken met gewicht",
      technique: [
        "Voer basis stoot-, trap- en blokkeertechnieken uit",
        "Houd de Chi Ishi tijdens de bewegingen",
        "Focus op correcte lichaamsmechanica",
        "Wissel tussen verschillende technieken",
        "Houd een constant tempo aan"
      ],
      sets: "4-5 sets van 15-20 technieken",
      focus: "Functionele kracht, techniek verfijning, uithoudingsvermogen"
    },
    {
      name: "Chi Ishi Balance Training",
      description: "Verbeter balans en stabiliteit met de Chi Ishi",
      technique: [
        "Sta op één been",
        "Houd de Chi Ishi in verschillende posities",
        "Voer langzame, gecontroleerde bewegingen uit",
        "Wissel tussen verschillende standen",
        "Focus op core stabiliteit"
      ],
      sets: "3 sets van 30-60 seconden per been",
      focus: "Balans, core kracht, stabiliteit"
    }
  ];

  const trainingPrograms = [
    {
      level: "Beginner",
      duration: "4-6 weken",
      frequency: "2-3 keer per week",
      exercises: [
        "Chi Ishi Uchi: 3 sets x 10 herhalingen",
        "Chi Ishi Uke: 3 sets x 8 herhalingen",
        "Chi Ishi Mawashi: 3 sets x 8 cirkels"
      ],
      progression: "Verhoog geleidelijk het aantal herhalingen"
    },
    {
      level: "Gevorderd",
      duration: "6-8 weken",
      frequency: "3-4 keer per week",
      exercises: [
        "Chi Ishi Kata Training: 2 volledige kata",
        "Chi Ishi Kihon: 4 sets x 15 technieken",
        "Chi Ishi Balance Training: 3 sets x 45 seconden"
      ],
      progression: "Verhoog gewicht of complexiteit van bewegingen"
    },
    {
      level: "Expert",
      duration: "8-12 weken",
      frequency: "4-5 keer per week",
      exercises: [
        "Gecombineerde training: 5 sets van verschillende oefeningen",
        "Intensieve kata training: 3-4 volledige kata",
        "Geavanceerde balans oefeningen: 4 sets x 60 seconden"
      ],
      progression: "Focus op techniek verfijning en kracht optimalisatie"
    }
  ];

  const recoveryGuidelines = [
    {
      aspect: "Rust tussen sets",
      guideline: "Neem 60-90 seconden rust tussen sets",
      reason: "Voor optimaal herstel en prestaties"
    },
    {
      aspect: "Rust tussen trainingen",
      guideline: "Minimaal 24-48 uur tussen Chi Ishi trainingen",
      reason: "Om spierherstel en aanpassing te bevorderen"
    },
    {
      aspect: "Stretching",
      guideline: "Rek de gebruikte spiergroepen na elke training",
      reason: "Voor flexibiliteit en herstel"
    },
    {
      aspect: "Hydratatie",
      guideline: "Drink voldoende water voor, tijdens en na training",
      reason: "Voor optimale spierfunctie en herstel"
    }
  ];

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/hojo-undo/equipment">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Link>
          </Button>
          <h1 className="text-2xl font-bold mb-2">Chi Ishi - Oefeningen</h1>
          <p className="text-muted-foreground">Traditionele krachttraining routines</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dumbbell className="mr-2 h-5 w-5 text-primary" />
                Basis Oefeningen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {basicExercises.map((exercise, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{exercise.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exercise.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="font-medium mb-2">Techniek:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm">
                        {exercise.technique.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <strong>Sets:</strong> {exercise.sets}
                      </div>
                      <div>
                        <strong>Focus:</strong> {exercise.focus}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Geavanceerde Oefeningen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {advancedExercises.map((exercise, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{exercise.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exercise.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="font-medium mb-2">Techniek:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm">
                        {exercise.technique.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <strong>Sets:</strong> {exercise.sets}
                      </div>
                      <div>
                        <strong>Focus:</strong> {exercise.focus}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Training Programma's
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingPrograms.map((program, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{program.level}</h3>
                    <div className="grid md:grid-cols-2 gap-3 mb-3 text-sm">
                      <div><strong>Duur:</strong> {program.duration}</div>
                      <div><strong>Frequentie:</strong> {program.frequency}</div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-medium mb-2">Oefeningen:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {program.exercises.map((exercise, idx) => (
                          <li key={idx}>{exercise}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="text-sm"><strong>Progressie:</strong> {program.progression}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Herstel Richtlijnen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recoveryGuidelines.map((guideline, index) => (
                  <div key={index} className="border-l-4 border-primary pl-3">
                    <h3 className="font-semibold">{guideline.aspect}</h3>
                    <p className="text-sm">{guideline.guideline}</p>
                    <p className="text-xs text-muted-foreground">{guideline.reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Training Tip</h3>
            <p className="text-sm text-yellow-700">
              Begin altijd met lichte gewichten en focus op correcte techniek. 
              Het is beter om 10 perfecte herhalingen te doen dan 20 slordige. 
              Bouw geleidelijk op in gewicht en intensiteit naarmate je techniek verbetert.
            </p>
          </div>

          <div className="flex gap-3">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/hojo-undo/chi-ishi/function">
                Functie
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/hojo-undo/chi-ishi/construction">
                Constructie
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/hojo-undo/chi-ishi/attention-points">
                Aandachtspunten
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ChiIshiExercises; 