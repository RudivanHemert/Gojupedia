import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ThemeSelector } from '@/components/ThemeSelector';

const SettingsPage = () => {
  const { t } = useTranslation();

  const settingsSections = [
    {
      id: 'language',
      title: 'Taal & Lokalisatie',
      description: 'Kies je voorkeurstaal en regio-instellingen',
      icon: <Globe className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      component: <LanguageSelector />
    },
    {
      id: 'theme',
      title: 'Uiterlijk & Thema',
      description: 'Pas het uiterlijk van de app aan',
      icon: <Palette className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      component: <ThemeSelector />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title="Instellingen"
        description="Pas je voorkeuren en instellingen aan"
        backUrl="/"
      />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {settingsSections.map((section) => (
            <Card key={section.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  {section.icon}
                  {section.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </CardHeader>
              <CardContent>
                {section.component}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 