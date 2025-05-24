import React, { useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Memoize the language button to prevent unnecessary re-renders
const LanguageButton = React.memo(({ 
  code, 
  name, 
  isCurrent, 
  isLoading, 
  onSelect 
}: { 
  code: string; 
  name: string; 
  isCurrent: boolean; 
  isLoading: boolean; 
  onSelect: (code: string) => void;
}) => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect(code);
  }, [code, onSelect]);

  return (
    <Button
      type="button"
      variant={isCurrent ? "default" : "outline"}
      className="w-full justify-between"
      onClick={handleClick}
      disabled={isLoading}
    >
      <span>{name}</span>
      {isLoading && isCurrent && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}
    </Button>
  );
});

export const LanguageSelector = React.memo(() => {
  const { language, setLanguage, supportedLanguages, loadingTranslations } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageSelect = useCallback((code: string) => {
    setLanguage(code as any);
  }, [setLanguage]);

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">{t('settings.language.title')}</h3>
      <div className="flex flex-col gap-2">
        {Object.entries(supportedLanguages).map(([code, name]) => (
          <LanguageButton
            key={code}
            code={code}
            name={name}
            isCurrent={language === code}
            isLoading={loadingTranslations}
            onSelect={handleLanguageSelect}
          />
        ))}
      </div>
    </Card>
  );
}); 