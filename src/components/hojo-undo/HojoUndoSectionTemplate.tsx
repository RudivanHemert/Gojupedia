import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Target, Brain, Shield, Clock, Users, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HojoUndoSectionTemplateProps {
  title: string;
  subtitle: string;
  japaneseTitle: string;
  badgeText: string;
  description: string;
  mainComponents: Array<{
    title: string;
    subtitle: string;
    icon: React.ComponentType<any>;
    color: string;
    items: string[];
  }>;
  benefits: Array<{
    category: string;
    icon: React.ComponentType<any>;
    color: string;
    items: string[];
  }>;
  principles: string[];
  navigationLinks: Array<{
    path: string;
    label: string;
    description: string;
    icon: React.ComponentType<any>;
  }>;
  historicalNote?: string;
  safetyNotice?: string;
  backPath: string;
}

const HojoUndoSectionTemplate: React.FC<HojoUndoSectionTemplateProps> = ({
  title,
  subtitle,
  japaneseTitle,
  badgeText,
  description,
  mainComponents,
  benefits,
  principles,
  navigationLinks,
  historicalNote,
  safetyNotice,
  backPath
}) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-2xl text-muted-foreground">{japaneseTitle}</p>
        <Badge variant="secondary" className="text-xl px-6 py-3">
          {badgeText}
        </Badge>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Main Components Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <Users className="mr-3 h-6 w-6" />
            {t('hojoUndo.template.mainComponents')}
          </h2>
          <p className="text-muted-foreground">{t('hojoUndo.template.mainComponentsDescription')}</p>
        </div>
        
        <div className="grid gap-6">
          {mainComponents.map((component, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <div className={`p-3 rounded-full ${component.color} text-white mr-4`}>
                    <component.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{component.title}</div>
                    <div className="text-base text-muted-foreground font-normal mt-1">
                      {component.subtitle}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {component.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-3 h-3 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Central Principles Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <Target className="mr-3 h-6 w-6 text-orange-500" />
            {t('hojoUndo.template.principles')}
          </h2>
          <p className="text-muted-foreground">{t('hojoUndo.template.principlesDescription')}</p>
        </div>
        
        <Card className="p-6">
          <CardContent>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('hojoUndo.template.coreTraining')} <strong>{t('hojoUndo.template.harmonization')}</strong>
            </p>
            <div className="grid gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start p-3 bg-muted/50 rounded-lg">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mt-2 mr-4 flex-shrink-0" />
                  <span className="text-base leading-relaxed font-medium">{principle}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Training Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <Clock className="mr-3 h-6 w-6" />
            {t('hojoUndo.template.trainingEffects')}
          </h2>
          <p className="text-muted-foreground">{t('hojoUndo.template.trainingEffectsDescription')}</p>
        </div>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <benefit.icon className={`mr-3 h-6 w-6 ${benefit.color}`} />
                  {benefit.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-3 h-3 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Navigation Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-2">
            <ArrowRight className="mr-3 h-6 w-6" />
            {t('hojoUndo.template.relatedSections')}
          </h2>
          <p className="text-muted-foreground">{t('hojoUndo.template.relatedSectionsDescription')}</p>
        </div>
        
        <div className="space-y-4">
          {navigationLinks.map((link, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              className="w-full justify-start h-auto p-6 text-left"
            >
              <Link to={link.path}>
                <link.icon className="h-5 w-5 mr-4" />
                <div>
                  <div className="font-bold text-lg">{link.label}</div>
                  <div className="text-base text-muted-foreground mt-1">{link.description}</div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Historical Note Section */}
      {historicalNote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400">{t('hojoUndo.template.historicalBackground')}</h3>
          </div>
          <Card className="border-l-4 border-l-amber-500 p-6">
            <CardContent className="p-0">
              <p className="text-base text-muted-foreground italic leading-relaxed">
                {historicalNote}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Safety Notice Section */}
      {safetyNotice && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400">{t('hojoUndo.template.safetyInformation')}</h3>
          </div>
          <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/20 p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center text-lg">
                <Shield className="mr-3 h-5 w-5" />
                {t('hojoUndo.template.importantSafetyNotice')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-red-600 dark:text-red-300 text-base leading-relaxed">
                {safetyNotice}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default HojoUndoSectionTemplate; 