
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
    <div 
      className={`
        fixed 
        ${position === 'left' ? 'left-4' : 'right-4'} 
        top-1/2 
        transform 
        -translate-y-1/2 
        w-40 
        h-3/4 
        z-10 
        hidden 
        xl:block
        bg-background
        border
        border-border
        rounded-lg
        shadow-lg
      `}
    >
      <div className="w-full h-full p-2" id={`ad-${position}`}>
        {/* Ad content will be injected by the script */}
        <div className="w-full h-full bg-muted/20 rounded flex items-center justify-center text-muted-foreground text-sm">
          Advertisement
        </div>
      </div>
    </div>
  );
};

export default VerticalAd;
