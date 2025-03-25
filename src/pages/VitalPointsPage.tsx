import React from 'react';
import { mediaItems } from '@/data/media';
import InteractiveVitalPoints from '@/components/theory/InteractiveVitalPoints';
import { findMediaByCategory } from '@/utils/mediaUtils';

const VitalPointsPage = () => {
  const vitalPointsMedia = findMediaByCategory('vital-points', mediaItems);
  const frontViewDiagram = vitalPointsMedia.find(item => item.id === 'vital-points-front-view');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Vital Points (急所 - Kyūsho)</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Vital points, known as Kyūsho (急所) in Japanese martial arts, are specific locations on the human body that are particularly vulnerable to strikes or pressure. Understanding these points is crucial for both offensive techniques and defensive awareness in karate practice.
        </p>
        
        {frontViewDiagram && (
          <div className="my-8">
            <InteractiveVitalPoints media={frontViewDiagram} />
          </div>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Vital Points</h2>
        <p>
          The study of vital points combines traditional martial arts knowledge with modern understanding of human anatomy. Each point represents an area where:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nerves are close to the surface</li>
          <li>Major blood vessels are accessible</li>
          <li>Muscles and tendons are vulnerable</li>
          <li>Bones can be effectively targeted</li>
        </ul>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
          <p className="text-yellow-700">
            <strong>Important Note:</strong> Knowledge of vital points should be used responsibly and primarily for defensive purposes. Always practice techniques with control and under proper supervision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VitalPointsPage;
