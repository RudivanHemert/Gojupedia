import React from 'react';
import InteractiveVitalPoints from '@/components/theory/InteractiveVitalPoints';

const VitalPoints = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-2">Vital Points (Kyūsho)</h1>
          <p className="text-muted-foreground mb-4">Interactive diagram of pressure points and vital areas in martial arts (急所 - Kyūsho).</p>
          <InteractiveVitalPoints />
        </section>
      </div>
    </div>
  );
};

export default VitalPoints;