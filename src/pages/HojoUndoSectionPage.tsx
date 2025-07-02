import React from 'react';
import { useParams } from 'react-router-dom';
import HojoUndoModernSection from '@/components/hojo-undo/HojoUndoModernSection';

const HojoUndoSectionPage = () => {
  const { equipmentId, sectionKey } = useParams();

  // Map URL parameters to component props
  const getEquipmentKey = () => {
    if (!equipmentId) return 'chiIshi';
    
    const equipmentMap: Record<string, string> = {
      'chi-ishi': 'chiIshi',
      'nigiri-game': 'nigiriGame',
      'kongoken': 'kongoken',
      'ishi-sashi': 'ishiSashi',
      'makiwara': 'makiwara',
      'tan': 'tan',
      'tetsu-geta': 'tetsuGeta',
      'jari-bako': 'jariBako',
      'ton': 'ton',
      'makiage': 'makiage',
      'ude-tanren': 'udeTanren',
    };
    
    return equipmentMap[equipmentId] || 'chiIshi';
  };

  const getSectionKey = () => {
    if (!sectionKey) return 'function';
    
    const sectionMap: Record<string, string> = {
      'function': 'function',
      'construction': 'construction',
      'attention-points': 'attentionPoints',
      'exercises': 'exercises',
    };
    
    return sectionMap[sectionKey] || 'function';
  };

  const equipmentKey = getEquipmentKey() as 'chiIshi' | 'nigiriGame' | 'kongoken' | 'ishiSashi' | 'makiwara' | 'tan' | 'tetsuGeta' | 'jariBako' | 'ton' | 'makiage' | 'udeTanren';
  const sectionKeyValue = getSectionKey() as 'function' | 'construction' | 'attentionPoints' | 'exercises';

  return (
    <HojoUndoModernSection
      equipmentKey={equipmentKey}
      sectionKey={sectionKeyValue}
      backPath="/hojo-undo"
    />
  );
};

export default HojoUndoSectionPage;