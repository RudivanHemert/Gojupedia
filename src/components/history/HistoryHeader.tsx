
import React from 'react';

const HistoryHeader = () => {
  return (
    <div className="relative h-40 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1603481546579-65dfe3eb3fe3?q=80&w=2070&auto=format&fit=crop" 
        alt="Karate History" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h1 className="text-white text-3xl font-bold">History</h1>
        <p className="text-white opacity-90">
          The origins and evolution of Goju-Ryu
        </p>
      </div>
    </div>
  );
};

export default HistoryHeader;
