import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Hammer, Ruler, AlertTriangle, CheckCircle } from 'lucide-react';

const ChiIshiConstruction = () => {
  const { t } = useTranslation();

  const materials = [
    {
      name: "Stenen gewicht",
      description: "Een natuurlijke steen van 2-10 kg, bij voorkeur graniet of basalt",
      requirements: [
        "Gewicht: 2-10 kg (afhankelijk van niveau)",
        "Vorm: Ovaal of rechthoekig",
        "Oppervlak: Glad en vrij van scherpe randen",
        "Materiaal: Graniet, basalt of andere harde steen"
      ]
    },
    {
      name: "Houten handvat",
      description: "Een stevige houten stok die door het gewicht wordt gestoken",
      requirements: [
        "Lengte: 60-80 cm",
        "Diameter: 3-4 cm",
        "Materiaal: Hardhout (eik, beuk, of bamboe)",
        "Behandeling: Geolied of gelakt voor duurzaamheid"
      ]
    },
    {
      name: "Bevestigingsmateriaal",
      description: "Materialen om het handvat aan het gewicht te bevestigen",
      requirements: [
        "Stalen pennen of bouten",
        "Epoxy hars of cement",
        "Versterkingsringen (optioneel)",
        "Anti-roest behandeling"
      ]
    }
  ];

  const constructionSteps = [
    {
      step: 1,
      title: "Voorbereiding van het gewicht",
      description: "Boor een gat door het midden van de steen",
      details: [
        "Markeer het centrum van de steen",
        "Boor een gat van 4-5 cm diameter",
        "Zorg dat het gat recht en centraal is",
        "Reinig het gat van stof en puin"
      ]
    },
    {
      step: 2,
      title: "Voorbereiding van het handvat",
      description: "Maak het houten handvat op maat",
      details: [
        "Zaag het handvat op de juiste lengte",
        "Schuur de uiteinden glad",
        "Behandel het hout met olie of lak",
        "Test of het handvat stevig in het gat past"
      ]
    },
    {
      step: 3,
      title: "Bevestiging",
      description: "Bevestig het handvat aan het gewicht",
      details: [
        "Steek het handvat door het gat",
        "Gebruik epoxy of cement voor extra stevigheid",
        "Voeg versterkingsringen toe indien gewenst",
        "Laat de bevestiging volledig uitharden"
      ]
    },
    {
      step: 4,
      title: "Afronding",
      description: "Controleer en test de Chi Ishi",
      details: [
        "Controleer of alles stevig is bevestigd",
        "Test de balans van het gewicht",
        "Schuur eventuele ruwe plekken weg",
        "Pas het gewicht aan indien nodig"
      ]
    }
  ];

  const safetyConsiderations = [
    "Controleer altijd de stevigheid voordat je de Chi Ishi gebruikt",
    "Zorg ervoor dat alle bevestigingen goed vastzitten",
    "Gebruik alleen materialen van goede kwaliteit",
    "Test de Chi Ishi eerst met lichte oefeningen",
    "Inspecteer regelmatig op slijtage of schade",
    "Vervang beschadigde onderdelen direct"
  ];

  const weightGuidelines = [
    {
      level: "Beginner",
      weight: "2-4 kg",
      description: "Voor nieuwe gebruikers en basis oefeningen"
    },
    {
      level: "Gevorderd",
      weight: "4-6 kg",
      description: "Voor ervaren beoefenaars en intensievere training"
    },
    {
      level: "Expert",
      weight: "6-10 kg",
      description: "Voor zeer ervaren beoefenaars en zware training"
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
          <h1 className="text-2xl font-bold mb-2">Chi Ishi - Constructie</h1>
          <p className="text-muted-foreground">Hoe bouw je een traditionele Chi Ishi</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hammer className="mr-2 h-5 w-5 text-primary" />
                Benodigde Materialen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{material.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {material.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold mb-4">Constructie Stappen</h2>
            <div className="space-y-4">
              {constructionSteps.map((step) => (
                <Card key={step.step}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                        {step.step}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">{step.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {step.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ruler className="mr-2 h-5 w-5 text-primary" />
                Gewicht Richtlijnen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weightGuidelines.map((guideline, index) => (
                  <div key={index} className="border-l-4 border-primary pl-3">
                    <h3 className="font-semibold">{guideline.level}</h3>
                    <p className="text-sm text-muted-foreground">{guideline.weight}</p>
                    <p className="text-sm">{guideline.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
                Veiligheidsmaatregelen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {safetyConsiderations.map((consideration, index) => (
                  <li key={index}>{consideration}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/hojo-undo/chi-ishi/function">
                Functie
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/hojo-undo/chi-ishi/attention-points">
                Aandachtspunten
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

export default ChiIshiConstruction; 