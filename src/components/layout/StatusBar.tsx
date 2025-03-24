
import React from 'react';

const StatusBar = () => {
  return (
    <div className="h-8 bg-stone-900 text-white flex items-center justify-between px-4 text-xs">
      <span>9:41</span>
      <div className="flex space-x-2">
        <span>5G</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default StatusBar;
