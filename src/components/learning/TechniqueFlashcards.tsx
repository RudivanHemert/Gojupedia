import React, { useState, useEffect } from 'react';
import { techniquesData, TechniqueData } from '@/data/techniquesData'; // Adjust path as needed
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'; // Assuming shadcn/ui Card
import { useTranslation } from 'react-i18next';

interface TechniqueFlashcardsProps {
  category: TechniqueData['category'];
  title?: string;
}

const TechniqueFlashcards: React.FC<TechniqueFlashcardsProps> = ({ category, title }) => {
  const { t } = useTranslation();
  const [cards, setCards] = useState<TechniqueData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const categoryData = techniquesData.filter(item => item.category === category);
    // Optional: Shuffle cards for variety
    setCards(categoryData.sort(() => Math.random() - 0.5));
    setCurrentIndex(0); // Reset index when category changes
    setIsFlipped(false); // Reset flip state
  }, [category]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setIsFlipped(false); // Show front of next card
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false); // Show front of previous card
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  if (cards.length === 0) {
    return <div>{t('study.noFlashcardsForCategory', { category })}</div>;
  }

  const currentCard = cards[currentIndex];
  const cardTitle = title || `${category} ${t('study.flashcards')}`;

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h2 className="text-xl font-semibold">{cardTitle}</h2>
      <Card className="w-full max-w-md min-h-[200px] flex flex-col justify-center items-center cursor-pointer relative" onClick={handleFlip}>
        <CardContent className="text-center p-6 flex-grow flex flex-col justify-center items-center">
          {!isFlipped ? (
            <>
              <p className="text-2xl font-bold mb-2">{currentCard.japanese}</p>
              {currentCard.kanji && <p className="text-lg text-muted-foreground">({currentCard.kanji})</p>}
            </>
          ) : (
            <p className="text-xl font-medium">{currentCard.english}</p>
          )}
        </CardContent>
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
           {currentIndex + 1} / {cards.length}
        </div>
         {/* Optional: Add a flip icon */}
         <RefreshCw size={16} className="absolute top-2 right-2 text-muted-foreground" />
      </Card>

      <div className="flex justify-between w-full max-w-md space-x-2">
        <Button onClick={handlePrev} disabled={cards.length <= 1}>
          <ArrowLeft className="mr-2 h-4 w-4" /> {t('common.previous')}
        </Button>
        <Button onClick={handleFlip}>
          {t('common.flip')} <RefreshCw size={16} className="ml-2 h-4 w-4"/>
        </Button>
        <Button onClick={handleNext} disabled={cards.length <= 1}>
          {t('common.next')} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TechniqueFlashcards; 