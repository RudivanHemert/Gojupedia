import React from 'react';

const EquipmentAndWeapons = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">Traditional training equipment and weapons used in Goju Ryu and Okinawan martial arts.</p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Equipment & Weapons
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Bo (棒) - Wooden Staff (6 feet long)</li>
            <li>Jo (杖) - Wooden Staff (4 feet long)</li>
            <li>Sai (釵) - Three-Pronged Knife</li>
            <li>Tonfa (トンファー) - Side-Handle Baton</li>
            <li>Makiwara (巻藁) - Striking Board</li>
            <li>Nigiri Game (握り甕) - Training Jars</li>
            <li>Chi Ishi (地石) - Weighted Stone</li>
            <li>Ishi Sashi (石差) - Stone Padlocks</li>
            <li>Kongo Ken (金剛拳) - Iron Ring</li>
            <li>Tetsu Wa (鉄輪) - Iron Rings</li>
            <li>Tan (担) - Barbells</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EquipmentAndWeapons;