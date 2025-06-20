import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Dumbbell, Target, Brain, Shield, Clock, Users, Weight, HandMetal, Hammer, Eye, Wrench, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { useTranslation } from 'react-i18next';

const HojoUndoOverview = () => {
  const { t } = useTranslation();

  const subsections = [
    {
      title: "Chi Ishi",
      subtitle: "Stenen hefboom gewicht voor pols- en grijpkracht",
      icon: Weight,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      items: [
        { title: "Functie", path: "/hojo-undo/chi-ishi/function", icon: Target },
        { title: "Constructie", path: "/hojo-undo/chi-ishi/construction", icon: Wrench },
        { title: "Aandachtspunten", path: "/hojo-undo/chi-ishi/attention-points", icon: Eye },
        { title: "Oefeningen", path: "/hojo-undo/chi-ishi/exercises", icon: Dumbbell }
      ]
    },
    {
      title: "Nigiri Game",
      subtitle: "Grijpvazen voor vinger- en handkracht",
      icon: HandMetal,
      color: "bg-green-500",
      textColor: "text-green-500",
      items: [
        { title: "Functie", path: "/hojo-undo/nigiri-game/function", icon: Target },
        { title: "Constructie", path: "/hojo-undo/nigiri-game/construction", icon: Wrench },
        { title: "Oefeningen", path: "/hojo-undo/nigiri-game/exercises", icon: Dumbbell },
        { title: "Aandachtspunten", path: "/hojo-undo/nigiri-game/attention-points", icon: Eye }
      ]
    },
    {
      title: "Kongoken",
      subtitle: "Ijzeren ovaal voor totale lichaamsconditionering",
      icon: Hammer,
      color: "bg-orange-500",
      textColor: "text-orange-500",
      items: [
        { title: "Klassieke oefeningen", path: "/hojo-undo/kongoken/classic-exercises", icon: Clock },
        { title: "Oefeningen", path: "/hojo-undo/kongoken/exercises", icon: Dumbbell }
      ]
    },
    {
      title: "Ishi Sashi",
      subtitle: "Stenen hangsloten voor grijpkracht en techniek",
      icon: Weight,
      color: "bg-purple-500",
      textColor: "text-purple-500",
      items: [
        { title: "Functie", path: "/hojo-undo/ishi-sashi/function", icon: Target },
        { title: "Constructie", path: "/hojo-undo/ishi-sashi/construction", icon: Wrench },
        { title: "Oefeningen", path: "/hojo-undo/ishi-sashi/exercises", icon: Dumbbell },
        { title: "Aandachtspunten", path: "/hojo-undo/ishi-sashi/attention-points", icon: Eye }
      ]
    }
  ];

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

        {/* Header - Inleiding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <h1 className="text-3xl font-bold">Hojo Undo</h1>
          <p className="text-xl text-muted-foreground">補助運動</p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Traditionele krachttraining van het Goju-ryu Karate-do
          </Badge>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ondersteunende training voor het ontwikkelen van kracht, techniek en mentale discipline in Goju-ryu Karate-do
          </p>
        </motion.div>

        {/* Overzicht Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Overzicht
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

        {/* Subsections List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {subsections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <div className={`p-2 rounded-full ${section.color} text-white mr-3`}>
                      <section.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div>{section.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        {section.subtitle}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {section.items.map((item, idx) => (
                      <Button
                        key={idx}
                        asChild
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-left"
                      >
                        <Link to={item.path}>
                          <item.icon className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-orange-500" />
                Centrale Principes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                De kern van hojo undo is de <strong>gecoördineerde inzet van lichaam, adem (ki & ademhaling) en geest</strong>. 
                Deze harmonisatie volgt dezelfde principes als de heishugata (Sanchin en Tensho).
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
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Trainingseffecten
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
          transition={{ delay: 0.5 }}
        >
          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground italic">
                <strong>Historische Achtergrond:</strong> De meeste hojo undo hulpmiddelen zijn van Chinese origine 
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
          transition={{ delay: 0.6 }}
        >
          <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Belangrijke Veiligheidsnota
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

export default HojoUndoOverview; 