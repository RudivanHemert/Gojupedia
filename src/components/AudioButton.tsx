import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioButtonProps {
  text: string;
  className?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ text, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = () => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      utterance.pitch = 1;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={speak}
      disabled={isPlaying}
      className={`p-1 h-auto ${className}`}
      title="Uitspreken"
    >
      <Volume2 className={`h-4 w-4 ${isPlaying ? 'text-blue-500' : 'text-gray-500'}`} />
    </Button>
  );
};

export default AudioButton; 