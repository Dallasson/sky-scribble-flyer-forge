
import React, { useEffect } from 'react';

interface VerticalAdProps {
  position: 'left' | 'right';
}

const VerticalAd: React.FC<VerticalAdProps> = ({ position }) => {
  useEffect(() => {
    // Create a unique container ID for this ad
    const containerId = `ad-container-${position}`;
    const container = document.getElementById(containerId);
    
    if (container) {
      // Reload the ad script when component mounts
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl27116253.profitableratecpm.com/bb/8c/bc/bb8cbc1c9e56e786724cffe2554579a4.js';
      script.async = true;
      
      // Try to contain the ad within our container
      script.onload = () => {
        // Add CSS to try to contain ads within our boundaries
        const style = document.createElement('style');
        style.textContent = `
          #${containerId} * {
            max-width: 100% !important;
            max-height: 100% !important;
            position: relative !important;
          }
          #${containerId} iframe {
            width: 100% !important;
            height: 100% !important;
            max-width: 120px !important;
            max-height: 75vh !important;
          }
        `;
        document.head.appendChild(style);
      };
      
      container.appendChild(script);

      return () => {
        // Cleanup on unmount
        if (container.contains(script)) {
          container.removeChild(script);
        }
      };
    }
  }, [position]);

  return (
    <div 
      className={`
        fixed 
        ${position === 'left' ? 'left-4' : 'right-4'} 
        top-1/2 
        transform 
        -translate-y-1/2 
        w-[120px]
        h-3/4 
        z-10 
        hidden 
        xl:block
        bg-background
        border
        border-border
        rounded-lg
        shadow-lg
        overflow-hidden
      `}
    >
      <div 
        className="w-full h-full p-2 relative overflow-hidden" 
        id={`ad-container-${position}`}
      >
        {/* Fallback content */}
        <div className="w-full h-full bg-muted/20 rounded flex items-center justify-center text-muted-foreground text-xs">
          Advertisement
        </div>
      </div>
    </div>
  );
};

export default VerticalAd;
