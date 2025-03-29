import React from 'react';

const Strikes = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">Various striking techniques typically executed with open hands or other parts of the body.</p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Basic Strikes
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Shuto Uchi (手刀打ち) - Knife Hand Strike</li>
            <li>Haito Uchi (背刀打ち) - Ridge Hand Strike</li>
            <li>Haishu Uchi (背手打ち) - Back Hand Strike</li>
            <li>Teisho Uchi (底掌打ち) - Palm Heel Strike</li>
            <li>Kakuto Uchi (鶴頭打ち) - Bent Wrist Strike</li>
            <li>Hiji Ate (肘当て) - Elbow Strike</li>
            <li>Empi Uchi (猿臂打ち) - Elbow Strike</li>
            <li>Hiraken Uchi (平拳打ち) - Flat Fist Strike</li>
            <li>Koken Uchi (虎拳打ち) - Tiger Mouth Strike</li>
            <li>Washide Uchi (鷲手打ち) - Eagle Hand Strike</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Strikes;