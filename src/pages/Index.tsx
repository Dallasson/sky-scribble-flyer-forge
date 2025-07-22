import React, { useState, useEffect } from 'react';
import EnhancedFlightForm from '../components/EnhancedFlightForm';
import TicketPreview from '../components/TicketPreview';
import Navbar from '../components/Navbar';
import { Card } from '@/components/ui/card';
import { Plane, Download } from 'lucide-react';

export interface FlightData {
  passengerName: string;
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  flightNumber: string;
  airline: string;
  seat: string;
  gate: string;
  terminal: string;
  class: string;
  bookingRef: string;
  price?: number;
  tripType?: 'one-way' | 'round-trip';
  aircraft?: string;
  returnFlight?: {
    from: string;
    to: string;
    departureDate: string;
    departureTime: string;
    arrivalTime: string;
    flightNumber: string;
    airline: string;
    seat: string;
    gate: string;
    terminal: string;
    class: string;
    aircraft: string;
  };
}

const Index = () => {
  const [flightData, setFlightData] = useState<FlightData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // Add Google AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3330807216746348';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleFormSubmit = (data: FlightData) => {
    setIsGenerating(true);
    // Simulate processing time
    setTimeout(() => {
      setFlightData(data);
      setIsGenerating(false);
    }, 2000);
  };

  const resetForm = () => {
    setFlightData(null);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {!flightData && !isGenerating && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Find Your Perfect Flight
              </h2>
              <p className="text-muted-foreground text-lg">
                Search through our extensive flight database and generate professional tickets
              </p>
            </div>
            
            <EnhancedFlightForm onSubmit={handleFormSubmit} />
          </div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Generating Your Ticket...
            </h3>
            <p className="text-muted-foreground">Creating your professional flight ticket</p>
          </div>
        )}

        {flightData && !isGenerating && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Your Flight Ticket is Ready!
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Preview your ticket below and download it as a PDF or send to email
              </p>
              <button
                onClick={resetForm}
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-2 rounded-lg transition-colors mr-4"
              >
                Create Another Ticket
              </button>
            </div>
            <TicketPreview flightData={flightData} />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              <strong>Disclaimer:</strong> This is a fake ticket generator for entertainment purposes only.
            </p>
            <p className="text-sm">
              Do not use these tickets for actual travel or any fraudulent activities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
