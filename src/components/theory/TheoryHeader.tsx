
import React from 'react';

interface TheoryHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TheoryHeader: React.FC<TheoryHeaderProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative h-40 overflow-hidden">
      <img 
        src={imageUrl}
        alt={`${title} of Goju Ryu`} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-white opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TheoryHeader;
