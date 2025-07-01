import React from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, Globe, Palette, Volume2, User, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      component: <LanguageSelector />
    },
    {
      id: 'theme',
      title: 'Uiterlijk & Thema',
      description: 'Pas het uiterlijk van de app aan',
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      component: <ThemeSelector />
    },
    {
      id: 'audio',
      title: 'Audio & Uitspraak',
      description: 'Beheer audio-instellingen en uitspraak',
      icon: <Volume2 className="h-6 w-6 text-green-500" />,
      component: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Japanse uitspraak</h4>
              <p className="text-sm text-gray-500">Automatische uitspraak van Japanse termen</p>
            </div>
            <Badge variant="secondary">Aan</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Audio feedback</h4>
              <p className="text-sm text-gray-500">Geluid bij interacties</p>
            </div>
            <Badge variant="outline">Uit</Badge>
          </div>
        </div>
      )
    },
    {
      id: 'profile',
      title: 'Profiel & Voortgang',
      description: 'Beheer je profiel en studievoortgang',
      icon: <User className="h-6 w-6 text-orange-500" />,
      component: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Huidige graad</h4>
              <p className="text-sm text-gray-500">Je huidige karate graad</p>
            </div>
            <Badge variant="secondary">10e Kyu</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Studie statistieken</h4>
              <p className="text-sm text-gray-500">Bekijk je voortgang</p>
            </div>
            <Button variant="outline" size="sm">Bekijken</Button>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy & Beveiliging',
      description: 'Beheer je privacy-instellingen',
      icon: <Shield className="h-6 w-6 text-red-500" />,
      component: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Data opslag</h4>
              <p className="text-sm text-gray-500">Lokale opslag van voorkeuren</p>
            </div>
            <Badge variant="secondary">Lokaal</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Analytics</h4>
              <p className="text-sm text-gray-500">Anonieme gebruiksstatistieken</p>
            </div>
            <Badge variant="outline">Uit</Badge>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title="Instellingen"
        description="Pas je voorkeuren en instellingen aan"
        backUrl="/"
      />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {settingsSections.map((section) => (
            <Card key={section.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {section.icon}
                  {section.title}
                </CardTitle>
                <p className="text-sm text-gray-600">{section.description}</p>
              </CardHeader>
              <CardContent>
                {section.component}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* App Info */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-gray-500" />
                App Informatie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium">Versie</h4>
                  <p className="text-gray-600">1.0.0</p>
                </div>
                <div>
                  <h4 className="font-medium">Laatste update</h4>
                  <p className="text-gray-600">December 2024</p>
                </div>
                <div>
                  <h4 className="font-medium">Ontwikkelaar</h4>
                  <p className="text-gray-600">GojuPedia Team</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 