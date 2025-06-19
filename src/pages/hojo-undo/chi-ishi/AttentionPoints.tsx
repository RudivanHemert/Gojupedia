import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

const ChiIshiAttentionPoints = () => {
  const { t } = useTranslation();

  const criticalPoints = [
    {
      title: "Correcte greep",
      description: "Houd de Chi Ishi stevig maar niet te strak vast",
      do: [
        "Gebruik een natuurlijke greep",
        "Houd de polsen recht",
        "Vermijd overmatige spanning in de handen"
      ],
      dont: [
        "Knijp niet te hard in het handvat",
        "Buig de polsen niet te ver",
        "Gebruik geen handschoenen (tenzij medisch noodzakelijk)"
      ]
    },
    {
      title: "Houding en balans",
      description: "Behoud een correcte houding tijdens alle oefeningen",
      do: [
        "Houd de rug recht",
        "Span de buikspieren aan",
        "Houd de schouders ontspannen",
        "Focus op balans en stabiliteit"
      ],
      dont: [
        "Rond de rug af",
        "Laat de schouders hangen",
        "Compenseer met andere spiergroepen",
        "Verlies de balans"
      ]
    },
    {
      title: "Ademhaling",
      description: "Adem regelmatig en gecontroleerd tijdens oefeningen",
      do: [
        "Adem diep en regelmatig",
        "Synchroniseer ademhaling met beweging",
        "Gebruik buikademhaling",
        "Neem pauzes voor herstel"
      ],
      dont: [
        "Houd de adem in",
        "Adem te snel of oppervlakkig",
        "Forceer de ademhaling",
        "Negeer tekenen van vermoeidheid"
      ]
    },
    {
      title: "Gewicht en intensiteit",
      description: "Kies het juiste gewicht voor je niveau",
      do: [
        "Begin met lichte gewichten",
        "Bouw geleidelijk op",
        "Luister naar je lichaam",
        "Pas het gewicht aan indien nodig"
      ],
      dont: [
        "Begin met te zware gewichten",
        "Forceer progressie",
        "Negeer pijn of ongemak",
        "Vergelijk jezelf met anderen"
      ]
    }
  ];

  const safetyGuidelines = [
    {
      category: "Voor de training",
      points: [
        "Controleer de Chi Ishi op schade of slijtage",
        "Zorg voor voldoende ruimte om je heen",
        "Warm goed op voordat je begint",
        "Zorg voor goede verlichting"
      ]
    },
    {
      category: "Tijdens de training",
      points: [
        "Focus op techniek in plaats van snelheid",
        "Stop onmiddellijk bij pijn of ongemak",
        "Neem regelmatig pauzes",
        "Blijf gehydrateerd"
      ]
    },
    {
      category: "Na de training",
      points: [
        "Koel af met lichte rekoefeningen",
        "Stretch de gebruikte spiergroepen",
        "Rust voldoende uit",
        "Evalueer je training"
      ]
    }
  ];

  const warningSigns = [
    {
      symptom: "Pijn in polsen of handen",
      action: "Stop onmiddellijk en raadpleeg een arts",
      severity: "Hoog"
    },
    {
      symptom: "Tintelingen of gevoelloosheid",
      action: "Stop en laat de spieren rusten",
      severity: "Gemiddeld"
    },
    {
      symptom: "Overmatige vermoeidheid",
      action: "Neem een langere pauze",
      severity: "Laag"
    },
    {
      symptom: "Verlies van controle",
      action: "Stop en evalueer de techniek",
      severity: "Gemiddeld"
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
          <h1 className="text-2xl font-bold mb-2">Chi Ishi - Aandachtspunten</h1>
          <p className="text-muted-foreground">Belangrijke richtlijnen voor veilige training</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
                Kritieke Aandachtspunten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {criticalPoints.map((point, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{point.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-600 flex items-center mb-2">
                          <CheckCircle className="mr-1 h-4 w-4" />
                          Wel doen
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {point.do.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-red-600 flex items-center mb-2">
                          <XCircle className="mr-1 h-4 w-4" />
                          Niet doen
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {point.dont.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
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
                <Info className="mr-2 h-5 w-5 text-primary" />
                Veiligheidsrichtlijnen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyGuidelines.map((guideline, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">{guideline.category}</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {guideline.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                Waarschuwingssignalen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {warningSigns.map((warning, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{warning.symptom}</h3>
                        <p className="text-sm">{warning.action}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        warning.severity === 'Hoog' ? 'bg-red-100 text-red-800' :
                        warning.severity === 'Gemiddeld' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {warning.severity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Belangrijke Herinnering</h3>
            <p className="text-sm text-blue-700">
              Hojo Undo training is een traditionele methode die respect en voorzichtigheid vereist. 
              Luister altijd naar je lichaam en raadpleeg een gekwalificeerde instructeur als je 
              vragen hebt over de juiste techniek of intensiteit.
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
              <Link to="/hojo-undo/chi-ishi/exercises">
                Oefeningen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ChiIshiAttentionPoints; 