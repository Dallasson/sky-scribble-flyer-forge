
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Clock, Users } from 'lucide-react';
import { FlightOption } from '../services/enhancedFlightService';

interface FlightResultsProps {
  departureFlights: FlightOption[];
  returnFlights?: FlightOption[];
  selectedDeparture: FlightOption | null;
  selectedReturn: FlightOption | null;
  onSelectDeparture: (flight: FlightOption) => void;
  onSelectReturn: (flight: FlightOption) => void;
  tripType: 'one-way' | 'round-trip';
}

const FlightResults: React.FC<FlightResultsProps> = ({
  departureFlights,
  returnFlights,
  selectedDeparture,
  selectedReturn,
  onSelectDeparture,
  onSelectReturn,
  tripType
}) => {
  const FlightCard = ({ 
    flight, 
    isSelected, 
    onSelect, 
    type 
  }: { 
    flight: FlightOption; 
    isSelected: boolean; 
    onSelect: () => void;
    type: 'departure' | 'return';
  }) => (
    <Card className={`p-4 cursor-pointer transition-all ${
      isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-md'
    }`}>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-2">
            <div className="text-lg font-semibold">{flight.airline}</div>
            <div className="text-sm text-gray-600">{flight.flightNumber}</div>
            <div className="text-sm text-gray-600">{flight.aircraft}</div>
          </div>
          
          <div className="flex items-center space-x-6 mb-2">
            <div className="text-center">
              <div className="text-lg font-bold">{flight.departureTime}</div>
              <div className="text-sm text-gray-600">{flight.from}</div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div className="h-px bg-gray-300 w-8"></div>
                  <Plane className="h-4 w-4 mx-2 text-gray-400" />
                  <div className="h-px bg-gray-300 w-8"></div>
                </div>
                <div className="text-xs text-gray-500">{flight.duration}</div>
                {flight.stops > 0 && (
                  <div className="text-xs text-orange-600">{flight.stops} stop{flight.stops > 1 ? 's' : ''}</div>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold">{flight.arrivalTime}</div>
              <div className="text-sm text-gray-600">{flight.to}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {flight.availableSeats} seats left
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {flight.class}
            </div>
          </div>
        </div>
        
        <div className="text-right ml-6">
          <div className="text-2xl font-bold text-green-600 mb-2">
            ${flight.price}
          </div>
          <Button
            onClick={onSelect}
            variant={isSelected ? "default" : "outline"}
            className={isSelected ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            {isSelected ? 'Selected' : 'Select'}
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Departure Flights */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Departure Flights ({departureFlights.length} options)
        </h3>
        <div className="space-y-3">
          {departureFlights.map((flight, index) => (
            <FlightCard
              key={`departure-${index}`}
              flight={flight}
              isSelected={selectedDeparture?.flightNumber === flight.flightNumber}
              onSelect={() => onSelectDeparture(flight)}
              type="departure"
            />
          ))}
        </div>
      </div>

      {/* Return Flights */}
      {tripType === 'round-trip' && returnFlights && returnFlights.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Return Flights ({returnFlights.length} options)
          </h3>
          <div className="space-y-3">
            {returnFlights.map((flight, index) => (
              <FlightCard
                key={`return-${index}`}
                flight={flight}
                isSelected={selectedReturn?.flightNumber === flight.flightNumber}
                onSelect={() => onSelectReturn(flight)}
                type="return"
              />
            ))}
          </div>
        </div>
      )}

      {/* Total Price Summary */}
      {selectedDeparture && (tripType === 'one-way' || selectedReturn) && (
        <Card className="p-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Price Summary</h4>
              <div className="text-sm text-gray-600 mt-1">
                {tripType === 'one-way' ? 'One-way ticket' : 'Round-trip ticket'}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                ${tripType === 'one-way' 
                  ? selectedDeparture.price 
                  : selectedDeparture.price + (selectedReturn?.price || 0)
                }
              </div>
              <div className="text-sm text-gray-600">
                Total for {tripType === 'one-way' ? '1' : '2'} passenger{tripType === 'round-trip' ? 's' : ''}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FlightResults;
