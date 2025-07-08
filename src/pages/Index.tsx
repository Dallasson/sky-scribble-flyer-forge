
import React, { useState } from 'react';
import EnhancedFlightForm from '../components/EnhancedFlightForm';
import TicketPreview from '../components/TicketPreview';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Flight Ticket Generator</h1>
              <p className="text-gray-600">Search flights and create realistic flight tickets</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!flightData && !isGenerating && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Find Your Perfect Flight
              </h2>
              <p className="text-gray-600 text-lg">
                Search through our extensive flight database and generate professional tickets
              </p>
            </div>
            <EnhancedFlightForm onSubmit={handleFormSubmit} />
          </div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Generating Your Ticket...
            </h3>
            <p className="text-gray-600">Creating your professional flight ticket</p>
          </div>
        )}

        {flightData && !isGenerating && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Flight Ticket is Ready!
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Preview your ticket below and download it as a PDF
              </p>
              <button
                onClick={resetForm}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors mr-4"
              >
                Create Another Ticket
              </button>
            </div>
            <TicketPreview flightData={flightData} />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
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
