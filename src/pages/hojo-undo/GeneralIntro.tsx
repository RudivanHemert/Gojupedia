import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Dumbbell, Target, Brain, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { useTranslation } from 'react-i18next';

const GeneralIntro = () => {
  const { t } = useTranslation();

  const mainComponents = [
    {
      title: "Krachtoefeningen",
      subtitle: "Strength Exercises",
      icon: Dumbbell,
      color: "bg-blue-500",
      items: [
        "Chi ishi - Stenen hefboom gewicht",
        "Nigiri game - Grijpvazen", 
        "Kongoken - Ijzeren ovaal",
        "Ishi sashi - Stenen hangsloten"
      ]
    },
    {
      title: "Hardingsoefeningen", 
      subtitle: "Hardening Exercises",
      icon: Shield,
      color: "bg-red-500",
      items: [
        "Makiwara - Stootplank",
        "Suna bako - Zandemmer",
        "Jari bako - Grindemmer",
        "Tanren kumite - Partner hardening"
      ]
    }
  ];

  const benefits = [
    {
      category: "Fysieke Voordelen",
      icon: Dumbbell,
      color: "text-blue-500",
      items: [
        "Krachtontwikkeling van spieren en spierketens",
        "Verbetering van kracht-uithoudingsvermogen", 
        "Ontwikkeling van motorische vaardigheden",
        "Verbetering van houding en balans"
      ]
    },
    {
      category: "Technische Voordelen",
      icon: Target,
      color: "text-green-500", 
      items: [
        "Verbetering van kata uitvoering",
        "Krachtigere en stabielere basistechnieken",
        "Effectievere gevechtstechnieken",
        "Betere coördinatie en timing"
      ]
    },
    {
      category: "Mentale Voordelen",
      icon: Brain,
      color: "text-purple-500",
      items: [
        "Verbeterde concentratie en mentale discipline",
        "Ontwikkeling van doorzettingsvermogen",
        "Toename van zelfvertrouwen",
        "Mentale kracht en focus"
      ]
    }
  ];

  const principles = [
    "Coördinatie van lichaam, adem en geest",
    "Grijp- en knijpkracht voor effectieve technieken",
    "Worteling en aarding voor balans en stabiliteit", 
    "Graduele opbouw van intensiteit en gewicht",
    "Techniek boven gewicht - correcte uitvoering eerst",
    "Voldoende rust en herstel tussen sessies"
  ];

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4 space-y-6">
        {/* Back Button */}
        <Button asChild variant="outline" className="mb-4">
          <Link to="/hojo-undo">
            <ChevronLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Link>
        </Button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <h1 className="text-3xl font-bold">Hojo Undo</h1>
          <p className="text-xl text-muted-foreground">補助運動</p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {t('hojoUndo.common.traditionalStrengthTraining')}
          </Badge>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ondersteunende training voor het ontwikkelen van kracht, techniek en mentale discipline in Goju-ryu Karate-do
          </p>
        </motion.div>

        {/* Main Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold flex items-center">
            <Users className="mr-2 h-5 w-5" />
            {t('hojoUndo.introduction.twoParts')}
          </h2>
          <div className="grid gap-4">
            {mainComponents.map((component, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <div className={`p-2 rounded-full ${component.color} text-white mr-3`}>
                      <component.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div>{component.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        {component.subtitle}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {component.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Central Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-orange-500" />
                {t('hojoUndo.introduction.centralPrinciples')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t('hojoUndo.template.coreTraining')} <strong>{t('hojoUndo.template.coreTraining')}</strong>. 
                {t('hojoUndo.template.harmonization')}
              </p>
              <div className="grid gap-2">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{principle}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Training Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            {t('hojoUndo.introduction.trainingEffects')}
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <benefit.icon className={`mr-2 h-5 w-5 ${benefit.color}`} />
                    {benefit.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Historical Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground italic">
                <strong>{t('hojoUndo.template.historicalBackground')}:</strong> De meeste hojo undo hulpmiddelen zijn van Chinese origine 
                uit de zuidelijke Shaolin-vuiststijl. De kongoken werd door Chojun Miyagi ontdekt in Hawaï (1934). 
                De makiwara is een uniek Okinawaans trainingshulpmiddel.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Safety Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                {t('hojoUndo.template.importantSafetyNotice')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600 dark:text-red-300 text-sm">
                <strong>Deskundige begeleiding is essentieel</strong> voor een verantwoorde beoefening van hojo undo. 
                Begin altijd met lichte gewichten (2-3 kg voor beginners) en focus op correcte techniek voordat 
                het gewicht wordt verhoogd.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default GeneralIntro; 