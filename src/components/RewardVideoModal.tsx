
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

interface RewardVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVideoComplete: () => void;
}

const RewardVideoModal: React.FC<RewardVideoModalProps> = ({ 
  isOpen, 
  onClose, 
  onVideoComplete 
}) => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (videoStarted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setCanSkip(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [videoStarted, timeLeft]);

  const handleStartVideo = () => {
    setVideoStarted(true);
  };

  const handleComplete = () => {
    onVideoComplete();
    handleClose();
  };

  const handleClose = () => {
    setVideoStarted(false);
    setTimeLeft(15);
    setCanSkip(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Watch Ad to Download
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {!videoStarted ? (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
              <p className="text-gray-600 mb-4">
                Watch a short video to download your ticket for free
              </p>
              <Button onClick={handleStartVideo} className="bg-red-500 hover:bg-red-600">
                <Play className="h-4 w-4 mr-2" />
                Start Video
              </Button>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-full h-48 bg-black rounded-lg flex items-center justify-center mb-4">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📺</div>
                  <div className="text-lg">Video Playing...</div>
                  {!canSkip && (
                    <div className="text-sm mt-2">
                      Skip in {timeLeft}s
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2 justify-center">
                {canSkip && (
                  <Button onClick={handleComplete} className="bg-green-600 hover:bg-green-700">
                    Continue to Download
                  </Button>
                )}
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardVideoModal;
