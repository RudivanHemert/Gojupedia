import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';

const themes = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' }
];

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Select Theme</h3>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((t) => (
          <Button
            key={t.value}
            variant={theme === t.value ? 'default' : 'outline'}
            onClick={() => setTheme(t.value as 'light' | 'dark' | 'system')}
            className="w-full"
          >
            {t.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}; 