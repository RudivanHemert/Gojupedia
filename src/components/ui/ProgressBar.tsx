import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  height?: number;
  className?: string;
  animated?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  label?: string;
  labelPosition?: 'top' | 'right' | 'inside';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  showLabel = true,
  height = 8,
  className = '',
  animated = true,
  color = 'primary',
  label,
  labelPosition = 'right'
}) => {
  const { isDarkMode } = useTheme();
  
  // Calculate percentage
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const displayValue = Math.round(percentage);
  
  // Determine color class
  const colorMap = {
    primary: isDarkMode 
      ? 'bg-blue-500' 
      : 'bg-blue-600',
    success: isDarkMode 
      ? 'bg-green-500' 
      : 'bg-green-600',
    warning: isDarkMode 
      ? 'bg-yellow-500' 
      : 'bg-yellow-600',
    danger: isDarkMode 
      ? 'bg-red-500' 
      : 'bg-red-600',
    info: isDarkMode 
      ? 'bg-purple-500' 
      : 'bg-purple-600'
  };
  
  const backgroundClass = isDarkMode 
    ? 'bg-gray-700' 
    : 'bg-gray-200';
  
  const colorClass = colorMap[color];
  
  // Animation variants
  const progressVariants = {
    initial: { width: '0%' },
    animate: { 
      width: `${percentage}%`,
      transition: { 
        duration: animated ? 0.8 : 0, 
        ease: 'easeOut' 
      }
    }
  };
  
  // Generate label
  const displayLabel = label || `${displayValue}%`;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-2">
        {showLabel && labelPosition === 'top' && (
          <div className="w-full flex justify-between mb-1 text-sm">
            <span>{displayLabel}</span>
            <span>{displayValue}%</span>
          </div>
        )}
        
        <div 
          className={`${backgroundClass} rounded-full overflow-hidden flex-grow`} 
          style={{ height: `${height}px` }}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={progressVariants}
            className={`h-full ${colorClass} rounded-full relative`}
          >
            {showLabel && labelPosition === 'inside' && percentage > 15 && (
              <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                {displayLabel}
              </span>
            )}
          </motion.div>
        </div>
        
        {showLabel && labelPosition === 'right' && (
          <span className="text-sm whitespace-nowrap">
            {displayLabel}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar; 