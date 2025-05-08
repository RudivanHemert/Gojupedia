import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, supportedLanguages, loadingTranslations } = useLanguage();

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Language</h3>
      <div className="flex flex-col gap-2">
        {Object.entries(supportedLanguages).map(([code, name]) => (
          <Button
            key={code}
            variant={language === code ? "default" : "outline"}
            className="w-full justify-between"
            onClick={() => setLanguage(code as any)}
            disabled={loadingTranslations}
          >
            <span>{name}</span>
            {loadingTranslations && language === code && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
          </Button>
        ))}
      </div>
    </Card>
  );
}; 