
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
    <Card className={`p-4 cursor-pointer transition-all border-border bg-card ${
      isSelected ? 'ring-2 ring-purple-600 bg-purple-100 dark:bg-purple-900/20' : 'hover:shadow-md hover:bg-accent'
    }`}>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-2">
            <div className="text-lg font-semibold text-foreground">{flight.airline}</div>
            <div className="text-sm text-muted-foreground">{flight.flightNumber}</div>
            <div className="text-sm text-muted-foreground">{flight.aircraft}</div>
          </div>
          
          <div className="flex items-center space-x-6 mb-2">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{flight.departureTime}</div>
              <div className="text-sm text-muted-foreground">{flight.from}</div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div className="h-px bg-muted-foreground w-8"></div>
                  <Plane className="h-4 w-4 mx-2 text-muted-foreground" />
                  <div className="h-px bg-muted-foreground w-8"></div>
                </div>
                <div className="text-xs text-muted-foreground">{flight.duration}</div>
                {flight.stops > 0 && (
                  <div className="text-xs text-orange-600 dark:text-orange-400">{flight.stops} stop{flight.stops > 1 ? 's' : ''}</div>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{flight.arrivalTime}</div>
              <div className="text-sm text-muted-foreground">{flight.to}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span className="text-foreground">{flight.availableSeats} seats left</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-foreground">{flight.class}</span>
            </div>
          </div>
        </div>
        
        <div className="text-right ml-6">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
            ${flight.price}
          </div>
          <Button
            onClick={onSelect}
            variant={isSelected ? "default" : "outline"}
            className={isSelected ? "bg-purple-700 hover:bg-purple-800 text-white" : "border-border text-foreground hover:bg-accent"}
          >
            {isSelected ? 'Selected' : 'Select'}
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6 bg-background text-foreground">
      {/* Departure Flights */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <h3 className="text-xl font-semibold mb-4 text-foreground">
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
        <div className="bg-card rounded-lg p-4 border border-border">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
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
        <Card className="p-4 bg-purple-700 border border-purple-600">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-white">Price Summary</h4>
              <div className="text-sm text-purple-200 mt-1">
                {tripType === 'one-way' ? 'One-way ticket' : 'Round-trip ticket'}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                ${tripType === 'one-way' 
                  ? selectedDeparture.price 
                  : selectedDeparture.price + (selectedReturn?.price || 0)
                }
              </div>
              <div className="text-sm text-purple-200">
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
