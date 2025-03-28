import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from './ui/card';
import { Button } from './ui/button';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'ja', name: '日本語' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' }
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Select Language</h3>
      <div className="grid grid-cols-2 gap-2">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={i18n.language === lang.code ? 'default' : 'outline'}
            onClick={() => changeLanguage(lang.code)}
            className="w-full"
          >
            {lang.name}
          </Button>
        ))}
      </div>
    </Card>
  );
}; 