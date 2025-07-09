
import React from 'react';

interface VerticalAdProps {
  position: 'left' | 'right';
}

const VerticalAd: React.FC<VerticalAdProps> = ({ position }) => {
  return (
    <div className={`fixed ${position === 'left' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 w-40 h-96 bg-gray-100 border border-gray-300 rounded-lg shadow-lg z-10 hidden lg:block`}>
      <div className="p-4 text-center">
        <div className="text-sm text-gray-600 mb-4">Advertisement</div>
        <div className="bg-gradient-to-b from-blue-500 to-purple-600 rounded-lg p-4 text-white">
          <h3 className="font-bold text-sm mb-2">Travel Deals!</h3>
          <p className="text-xs mb-3">Save up to 70% on flights worldwide</p>
          <button className="bg-white text-blue-600 px-3 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          Sponsored Content
        </div>
      </div>
    </div>
  );
};

export default VerticalAd;
