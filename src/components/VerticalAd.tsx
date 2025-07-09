
import React, { useEffect } from 'react';

interface VerticalAdProps {
  position: 'left' | 'right';
}

const VerticalAd: React.FC<VerticalAdProps> = ({ position }) => {
  useEffect(() => {
    // Reload the ad script when component mounts
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl27116253.profitableratecpm.com/bb/8c/bc/bb8cbc1c9e56e786724cffe2554579a4.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`fixed ${position === 'left' ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 w-32 h-80 z-10 hidden xl:block`}>
      <div className="w-full h-full" id={`ad-${position}`}>
        {/* Ad content will be injected by the script */}
      </div>
    </div>
  );
};

export default VerticalAd;
