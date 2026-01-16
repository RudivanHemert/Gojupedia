import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AudioButtonProps {
  text: string;
  translationKey?: string; // e.g., "terminology.sections.blocks-content.terms.age-uke.japanese"
  lang?: string; // e.g. "ja-JP" to force language for manual text
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  translationKey,
  lang,
  className = '',
  size = 'md'
}) => {
  const { i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
    }
  }, []);

  const playFile = (path: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(path);
    audioRef.current = audio;

    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => {
      // File not found or error -> Fallback to TTS
      console.warn(`Audio file not found: ${path}. Falling back to TTS.`);
      audioRef.current = null;
      speakTTS();
    };

    audio.play().catch(e => {
      console.error("Playback failed", e);
      setIsPlaying(false);
      speakTTS();
    });
  };

  const speakTTS = () => {
    if (!isSupported) return;

    // Stop any currently playing speech
    window.speechSynthesis.cancel();
    setIsPlaying(false); // Reset state just in case

    const utterance = new SpeechSynthesisUtterance(text);

    // Language Selection Logic
    if (lang) {
      utterance.lang = lang;
    } else if (translationKey?.endsWith('.japanese')) {
      utterance.lang = 'ja-JP';
    } else {
      // Map i18next codes to TTS codes
      const langMap: Record<string, string> = {
        'en': 'en-US',
        'de': 'de-DE',
        'fr': 'fr-FR',
        'es': 'es-ES',
        'it': 'it-IT',
        'pt': 'pt-BR',
        'da': 'da-DK',
        'nl': 'nl-NL'
      };
      utterance.lang = langMap[i18n.language] || 'en-US';
    }

    utterance.rate = 0.8; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent click handlers (like accordion toggles)

    if (isPlaying) {
      stop();
    } else {
      // Try file first if key is provided
      if (translationKey) {
        // Construct path: /audio/[lang]/[namespace]/[key_path].mp3
        const namespace = translationKey.split('.')[0]; // e.g. "terminology"
        const safeKey = translationKey.replace(/\./g, '_'); // e.g. "terminology_sections_..."
        // NOTE: generate_audio.py output logic:
        // Path("src/i18n/locales") / lang / filename (namespace.json)
        // And key path inside json.
        // IF translationKey is "terminology.sections...", 
        // namespace is "terminology".
        // The key path inside the file is "sections.blocks-content..."
        // The script joins namespace + key_path.
        // SO: "terminology_sections_blocks-content_..."
        // YES. checks out.

        const path = `/audio/${i18n.language}/${namespace}/${safeKey}.mp3`;
        playFile(path);
      } else {
        speakTTS();
      }
    }
  };

  // Size variants
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  // If TTS not supported AND no key provided -> Hide button?
  // But we might have a key. So show button if key exists OR TTS supported.
  if (!isSupported && !translationKey) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={`${sizeClasses[size]} ${className}`}
      title={isPlaying ? "Stop audio" : "Play audio"}
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