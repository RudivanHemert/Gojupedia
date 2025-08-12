import React, { useMemo } from 'react';
import { MatchingGame } from './MatchingGame';
import { techniquesData } from '@/data/techniquesData';

interface TechniqueMatchingProps {
  category: (typeof techniquesData)[number]['category'];
}

const TechniqueMatching: React.FC<TechniqueMatchingProps> = ({ category }) => {
  const pairs = useMemo(() => {
    const items = techniquesData.filter(t => t.category === category).slice(0, 8);
    return items.map(i => ({ id: i.id, left: i.japanese || i.name, right: i.english || i.name }));
  }, [category]);

  return <MatchingGame pairs={pairs} />;
};

export default TechniqueMatching;



