import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AudioButton: React.FC<AudioButtonProps> = ({ 
  text, 
  className = '', 
  size = 'md' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = () => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Stop any currently playing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure for Japanese pronunciation
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleClick = () => {
    if (isPlaying) {
      stop();
    } else {
      speak();
    }
  };

  // Size variants
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  if (!isSupported) {
    return null; // Don't show button if speech synthesis is not supported
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={`${sizeClasses[size]} ${className}`}
      title={isPlaying ? "Stop pronunciation" : "Pronounce Japanese term"}
    >
      {isPlaying ? (
        <VolumeX className="h-4 w-4" />
      ) : (
        <Volume2 className="h-4 w-4" />
      )}
    </Button>
  );
};

export default AudioButton; 