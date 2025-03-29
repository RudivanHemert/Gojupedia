import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { InfoIcon } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Language</h3>
      <div className="flex flex-col gap-2">
        <Button
          variant="default"
          className="w-full"
          disabled
        >
          English
        </Button>
        <div className="text-sm text-muted-foreground mt-2 flex items-start gap-2">
          <InfoIcon size={16} className="mt-0.5 flex-shrink-0" />
          <span>Multilingual support is temporarily disabled.</span>
        </div>
      </div>
    </Card>
  );
}; 