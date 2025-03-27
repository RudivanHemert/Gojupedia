import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, Type, BookOpen } from 'lucide-react';
import { Button } from './button';
import { Slider } from './slider';
import { cn } from '@/lib/utils';

interface ScrollingTextProps {
  title?: string;
  content: string | React.ReactNode;
  className?: string;
  maxHeight?: string;
  enableFontResize?: boolean;
  enableProgress?: boolean;
  sectionTitles?: string[];
}

export const ScrollingText = ({
  title,
  content,
  className,
  maxHeight = '400px',
  enableFontResize = true,
  enableProgress = true,
  sectionTitles = []
}: ScrollingTextProps) => {
  const [fontSize, setFontSize] = useState(16);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Calculate reading progress
  const handleScroll = () => {
    if (containerRef.current && contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(Math.min(scrollPercentage, 100));
      
      // Determine current section
      if (sectionTitles.length > 0 && contentRef.current) {
        const sectionElements = contentRef.current.querySelectorAll('h2, h3');
        let activeSection = 0;
        
        sectionElements.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            activeSection = index;
          }
        });
        
        setCurrentSection(activeSection);
      }
    }
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const scrollToSection = (index: number) => {
    if (contentRef.current) {
      const sectionElements = contentRef.current.querySelectorAll('h2, h3');
      if (sectionElements[index]) {
        sectionElements[index].scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ 
        top: containerRef.current.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className={cn("relative", className)}>
      {title && (
        <h2 className="text-xl font-bold mb-2">{title}</h2>
      )}
      
      <div 
        className="relative border rounded-lg overflow-hidden shadow-sm"
      >
        {/* Control bar */}
        <div 
          className={`absolute top-0 right-0 z-10 bg-background/80 backdrop-blur-sm rounded-bl-lg 
            transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <div className="p-2 flex items-center gap-2">
            {enableFontResize && (
              <div className="flex items-center gap-1">
                <Type size={14} />
                <Slider
                  value={[fontSize]}
                  onValueChange={(value) => setFontSize(value[0])}
                  min={12}
                  max={24}
                  step={1}
                  className="w-20"
                />
              </div>
            )}
            
            <Button size="icon" variant="ghost" onClick={scrollToTop}>
              <ChevronUp size={16} />
            </Button>
            <Button size="icon" variant="ghost" onClick={scrollToBottom}>
              <ChevronDown size={16} />
            </Button>
          </div>
        </div>
        
        {/* Reading progress indicator */}
        {enableProgress && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-10">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        
        {/* Section navigation */}
        {sectionTitles.length > 0 && (
          <div className="absolute left-0 top-6 z-10">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1 h-auto"
              onClick={() => setShowControls(!showControls)}
            >
              <BookOpen size={16} />
            </Button>
            
            {showControls && (
              <div className="absolute left-0 top-full mt-1 bg-background/95 backdrop-blur-sm border rounded-lg shadow-md p-2 w-48">
                <ul className="space-y-1 max-h-40 overflow-y-auto">
                  {sectionTitles.map((title, index) => (
                    <li key={index}>
                      <Button
                        variant={currentSection === index ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-xs py-1 h-auto"
                        onClick={() => scrollToSection(index)}
                      >
                        {title}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {/* Content container */}
        <div 
          ref={containerRef}
          className="overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300"
          style={{ maxHeight }}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <div 
            ref={contentRef}
            className="p-4"
            style={{ fontSize: `${fontSize}px` }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}; 