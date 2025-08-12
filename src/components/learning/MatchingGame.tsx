import React, { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

type PairItem = {
  id: string;
  text: string;
};

export interface MatchingGameProps {
  pairs: Array<{ id: string; left: string; right: string }>;
  onComplete?: (score: number) => void;
}

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

export const MatchingGame: React.FC<MatchingGameProps> = ({ pairs, onComplete }) => {
  const { t } = useTranslation();
  const leftItems: PairItem[] = useMemo(
    () => pairs.map(p => ({ id: p.id, text: p.left })),
    [pairs]
  );
  const rightItemsInitial: PairItem[] = useMemo(
    () => shuffle(pairs.map(p => ({ id: p.id, text: p.right }))),
    [pairs]
  );

  const [rightItems, setRightItems] = useState<PairItem[]>(rightItemsInitial);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [attempts, setAttempts] = useState<number>(0);

  const total = pairs.length;
  const matchedCount = Object.keys(matches).length;

  const handleLeftClick = (id: string) => {
    setSelectedLeft(id === selectedLeft ? null : id);
  };

  const handleRightClick = (id: string) => {
    setSelectedRight(id === selectedRight ? null : id);
  };

  const tryMatch = () => {
    if (!selectedLeft || !selectedRight) return;
    setAttempts(prev => prev + 1);
    if (selectedLeft === selectedRight) {
      setMatches(prev => ({ ...prev, [selectedLeft]: selectedRight }));
      // lock matched right card in place by pushing it to end (visual cue) or leave; simply clear selection
      setSelectedLeft(null);
      setSelectedRight(null);
      if (matchedCount + 1 === total) {
        onComplete?.(matchedCount + 1);
      }
    } else {
      // brief feedback by clearing wrong selection
      setSelectedRight(null);
    }
  };

  const reset = () => {
    setMatches({});
    setSelectedLeft(null);
    setSelectedRight(null);
    setRightItems(shuffle(rightItems));
    setAttempts(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-medium mb-3">{t('study.matchingLeft', 'Term')}</h3>
            <div className="space-y-2">
              {leftItems.map(item => {
                const isMatched = !!matches[item.id];
                const isSelected = selectedLeft === item.id;
                return (
                  <button
                    key={item.id}
                    className={`w-full text-left p-3 rounded border transition ${
                      isMatched
                        ? 'border-green-500 bg-green-50'
                        : isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-border hover:border-muted'
                    }`}
                    onClick={() => handleLeftClick(item.id)}
                    disabled={isMatched}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-medium mb-3">{t('study.matchingRight', 'Meaning')}</h3>
            <div className="space-y-2">
              {rightItems.map(item => {
                const isMatched = Object.values(matches).includes(item.id);
                const isSelected = selectedRight === item.id;
                return (
                  <button
                    key={item.id}
                    className={`w-full text-left p-3 rounded border transition ${
                      isMatched
                        ? 'border-green-500 bg-green-50'
                        : isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-border hover:border-muted'
                    }`}
                    onClick={() => handleRightClick(item.id)}
                    disabled={isMatched}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          {t('study.question', { index: matchedCount, total })}
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={reset}>{t('common.reset', 'Reset')}</Button>
          <Button onClick={tryMatch} disabled={!selectedLeft || !selectedRight}>
            {t('study.match', 'Match')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchingGame;



