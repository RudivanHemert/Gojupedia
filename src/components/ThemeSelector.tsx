import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const themes = [
    { value: 'light', label: t('settings.theme.options.light') },
    { value: 'dark', label: t('settings.theme.options.dark') },
    { value: 'system', label: t('settings.theme.options.system') }
  ];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">{t('settings.theme.selectThemeTitle')}</h3>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((tItem) => (
          <Button
            key={tItem.value}
            variant={theme === tItem.value ? 'default' : 'outline'}
            onClick={() => setTheme(tItem.value as 'light' | 'dark' | 'system')}
            className="w-full"
          >
            {tItem.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}; 