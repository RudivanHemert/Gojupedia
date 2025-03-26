import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import InteractiveVitalPoints from '@/components/theory/InteractiveVitalPoints';

const VitalPoints = () => {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="interactive-diagram">
          <AccordionTrigger>Interactive Vital Points Diagram</AccordionTrigger>
          <AccordionContent>
            <InteractiveVitalPoints />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="vital-points-list">
          <AccordionTrigger>Vital Points List</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Front View Vital Points</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Temple (太陽穴) - Located on the side of the head, above the ear. A strike here can cause unconsciousness.</li>
                  <li>Jaw (顎) - A strike to the jaw can cause disorientation and loss of balance.</li>
                  <li>Throat (喉) - A strike to the throat can cause difficulty breathing and loss of consciousness.</li>
                  <li>Solar Plexus (鳩尾) - Located in the center of the chest. A strike here can cause difficulty breathing and loss of consciousness.</li>
                  <li>Ribs (肋骨) - A strike to the ribs can cause pain and difficulty breathing.</li>
                  <li>Liver (肝臓) - Located on the right side of the body. A strike here can cause severe pain and loss of consciousness.</li>
                  <li>Groin (金的) - A strike to the groin can cause severe pain and temporary incapacitation.</li>
                  <li>Knee (膝) - A strike to the knee can cause pain and loss of balance.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Back View Vital Points</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Back of Neck (後頸) - Located at the base of the skull. A strike here can cause unconsciousness.</li>
                  <li>Spine (脊椎) - A strike to the spine can cause severe pain and temporary paralysis.</li>
                  <li>Kidneys (腎臓) - Located on either side of the spine. A strike here can cause severe pain and internal damage.</li>
                  <li>Tailbone (尾骨) - A strike to the tailbone can cause severe pain and temporary incapacitation.</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default VitalPoints;