import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Weight, Target, Zap, Shield } from 'lucide-react';

const ChiIshiFunction = () => {
  const { t } = useTranslation();

  const functions = [
    {
      title: "Pols- en grijpkracht",
      description: "De Chi Ishi traint de spieren van de onderarmen, polsen en handen. Door het gewicht te tillen en te dragen worden de grijpspieren versterkt, wat essentieel is voor effectieve karate technieken.",
      icon: Target,
      benefits: [
        "Versterking van de grijpspieren",
        "Verbetering van polsstabiliteit",
        "Toename van handkracht",
        "Betere controle over technieken"
      ]
    },
    {
      title: "Schouder- en armkracht",
      description: "Het tillen en dragen van de Chi Ishi ontwikkelt de spieren van de schouders, armen en borst. Dit zorgt voor meer kracht in stoot- en blokkeertechnieken.",
      icon: Zap,
      benefits: [
        "Versterking van schouderspieren",
        "Toename van armkracht",
        "Verbetering van uithoudingsvermogen",
        "Betere techniek uitvoering"
      ]
    },
    {
      title: "Core stabiliteit",
      description: "Het balanceren van het gewicht tijdens oefeningen traint de core spieren. Dit verbetert de stabiliteit en balans, wat cruciaal is voor effectieve karate bewegingen.",
      icon: Shield,
      benefits: [
        "Versterking van buikspieren",
        "Verbetering van balans",
        "Toename van stabiliteit",
        "Betere houding"
      ]
    },
    {
      title: "Geestelijke discipline",
      description: "Het werken met de Chi Ishi vereist concentratie en geduld. Dit ontwikkelt mentale discipline en focus, belangrijke aspecten van karate training.",
      icon: Weight,
      benefits: [
        "Verbetering van concentratie",
        "Ontwikkeling van geduld",
        "Toename van mentale kracht",
        "Betere focus tijdens training"
      ]
    }
  ];

  const trainingPrinciples = [
    "Begin altijd met lichtere gewichten en bouw geleidelijk op",
    "Focus op correcte techniek in plaats van zware gewichten",
    "Adem regelmatig en gecontroleerd tijdens oefeningen",
    "Neem voldoende rust tussen sets",
    "Luister naar je lichaam en stop bij pijn of ongemak",
    "Combineer Chi Ishi training met andere Hojo Undo oefeningen"
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
          <h1 className="text-2xl font-bold mb-2">Chi Ishi - Functie</h1>
          <p className="text-muted-foreground">Stenen hefboom gewicht voor traditionele krachttraining</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Weight className="mr-2 h-5 w-5 text-primary" />
                Wat is de Chi Ishi?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                De Chi Ishi (力石) is een traditioneel hulpmiddel uit de Okinawaanse karate traditie. 
                Het bestaat uit een stenen gewicht dat aan een houten handvat is bevestigd, waardoor 
                het een hefboom effect creëert. Dit ontwerp maakt het mogelijk om specifieke spiergroepen 
                te trainen die essentieel zijn voor effectieve karate technieken.
              </p>
              <p>
                De naam "Chi Ishi" betekent letterlijk "krachtsteen" en verwijst naar het gebruik van 
                natuurlijke materialen in de traditionele training. Dit hulpmiddel werd oorspronkelijk 
                gebruikt door karate meesters om hun leerlingen te trainen in de ontwikkeling van 
                functionele kracht en techniek.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold mb-4">Hoofdfuncties</h2>
            <div className="space-y-4">
              {functions.map((func, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <func.icon className="mr-2 h-5 w-5 text-primary" />
                      {func.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">{func.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Voordelen:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {func.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Training Principes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {trainingPrinciples.map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-3">
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

export default ChiIshiFunction; 