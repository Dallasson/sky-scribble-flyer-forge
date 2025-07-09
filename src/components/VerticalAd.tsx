
import React from 'react';

interface VerticalAdProps {
  position: 'left' | 'right';
}

const VerticalAd: React.FC<VerticalAdProps> = ({ position }) => {
  return (
    <div className={`fixed ${position === 'left' ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 w-32 h-80 bg-card border border-border rounded-lg shadow-lg z-10 hidden xl:block`}>
      <div className="p-3 text-center">
        <div className="text-xs text-muted-foreground mb-3">Advertisement</div>
        <div className="bg-gradient-to-b from-blue-500 to-purple-600 rounded-lg p-3 text-white">
          <h3 className="font-bold text-xs mb-2">Travel Deals!</h3>
          <p className="text-xs mb-2">Save up to 70% on flights worldwide</p>
          <button className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          Sponsored Content
        </div>
      </div>
    </div>
  );
};

export default VerticalAd;
