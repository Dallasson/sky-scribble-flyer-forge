

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight, Calendar, Plane } from 'lucide-react';
import AirportSearch from './AirportSearch';
import FlightResults from './FlightResults';
import { searchFlights, FlightOption } from '../services/enhancedFlightService';
import { Airport } from '../services/airportDatabase';
import { FlightData } from '../pages/Index';

interface EnhancedFlightFormProps {
  onSubmit: (data: FlightData) => void;
}

const EnhancedFlightForm: React.FC<EnhancedFlightFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState<'search' | 'select'>('search');
  const [passengerName, setPassengerName] = useState('');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('round-trip');
  const [fromAirport, setFromAirport] = useState<Airport | null>(null);
  const [toAirport, setToAirport] = useState<Airport | null>(null);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  
  // Flight search results
  const [departureFlights, setDepartureFlights] = useState<FlightOption[]>([]);
  const [returnFlights, setReturnFlights] = useState<FlightOption[]>([]);
  const [selectedDeparture, setSelectedDeparture] = useState<FlightOption | null>(null);
  const [selectedReturn, setSelectedReturn] = useState<FlightOption | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Add ref for ad container
  const adContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load ad on search step
    if (step === 'search' && adContainerRef.current) {
      const script = document.createElement('script');
      script.innerHTML = `
        atOptions = {
          'key' : 'acbe1f98f2c68cf849aaafe82aec80c2',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      document.head.appendChild(script);

      const invokeScript = document.createElement('script');
      invokeScript.src = '//www.highperformanceformat.com/acbe1f98f2c68cf849aaafe82aec80c2/invoke.js';
      invokeScript.async = true;
      adContainerRef.current.appendChild(invokeScript);

      return () => {
        if (script.parentNode) script.parentNode.removeChild(script);
      };
    }
  }, [step]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passengerName || !fromAirport || !toAirport || !departureDate) {
      return;
    }

    if (tripType === 'round-trip' && !returnDate) {
      return;
    }

    setIsSearching(true);
    
    try {
      console.log('Searching flights from', fromAirport.code, 'to', toAirport.code);
      
      // Search departure flights
      const depFlights = searchFlights(fromAirport.code, toAirport.code, departureDate);
      console.log('Found departure flights:', depFlights.length);
      setDepartureFlights(depFlights);
      
      // Search return flights if round trip
      if (tripType === 'round-trip' && returnDate) {
        const retFlights = searchFlights(toAirport.code, fromAirport.code, returnDate);
        console.log('Found return flights:', retFlights.length);
        setReturnFlights(retFlights);
      }
      
      setStep('select');
    } catch (error) {
      console.error('Error searching flights:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleFlightSelection = () => {
    if (!selectedDeparture || !passengerName) return;
    
    if (tripType === 'round-trip' && !selectedReturn) return;

    // Generate booking reference
    const bookingRef = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // Calculate total price
    const totalPrice = selectedDeparture.price + (selectedReturn?.price || 0);

    // Create flight data for departure
    const flightData: FlightData = {
      passengerName,
      from: selectedDeparture.from,
      to: selectedDeparture.to,
      departureDate,
      departureTime: selectedDeparture.departureTime,
      arrivalTime: selectedDeparture.arrivalTime,
      flightNumber: selectedDeparture.flightNumber,
      airline: selectedDeparture.airline,
      seat: `${Math.floor(Math.random() * 35) + 1}${String.fromCharCode(65 + Math.floor(Math.random() * 6))}`,
      gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 5))}${Math.floor(Math.random() * 30) + 1}`,
      terminal: `${Math.floor(Math.random() * 5) + 1}`,
      class: selectedDeparture.class,
      bookingRef,
      price: totalPrice,
      tripType,
      aircraft: selectedDeparture.aircraft,
      returnFlight: tripType === 'round-trip' && selectedReturn ? {
        from: selectedReturn.from,
        to: selectedReturn.to,
        departureDate: returnDate,
        departureTime: selectedReturn.departureTime,
        arrivalTime: selectedReturn.arrivalTime,
        flightNumber: selectedReturn.flightNumber,
        airline: selectedReturn.airline,
        seat: `${Math.floor(Math.random() * 35) + 1}${String.fromCharCode(65 + Math.floor(Math.random() * 6))}`,
        gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 5))}${Math.floor(Math.random() * 30) + 1}`,
        terminal: `${Math.floor(Math.random() * 5) + 1}`,
        class: selectedReturn.class,
        aircraft: selectedReturn.aircraft
      } : undefined
    };

    onSubmit(flightData);
  };

  const swapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const canProceedToSelection = selectedDeparture && (tripType === 'one-way' || selectedReturn);

  if (step === 'select') {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => setStep('search')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
          
          <div className="bg-white p-4 rounded-lg border mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{passengerName}</h3>
                <p className="text-gray-600">
                  {fromAirport?.city} ({fromAirport?.code}) → {toAirport?.city} ({toAirport?.code})
                </p>
                <p className="text-sm text-gray-500">
                  {tripType === 'round-trip' ? `${departureDate} - ${returnDate}` : departureDate}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Trip Type</div>
                <div className="font-semibold capitalize">{tripType}</div>
              </div>
            </div>
          </div>
        </div>

        <FlightResults
          departureFlights={departureFlights}
          returnFlights={returnFlights}
          selectedDeparture={selectedDeparture}
          selectedReturn={selectedReturn}
          onSelectDeparture={setSelectedDeparture}
          onSelectReturn={setSelectedReturn}
          tripType={tripType}
        />

        {canProceedToSelection && (
          <div className="mt-8 text-center">
            <Button
              onClick={handleFlightSelection}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Generate Ticket
              <Plane className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Search Flights</h2>
          <p className="text-gray-600">Find your perfect flight from our extensive database</p>
        </div>

        <form onSubmit={handleSearch} className="space-y-6">
          {/* Passenger Name */}
          <div>
            <Label htmlFor="passengerName">Full Name</Label>
            <Input
              id="passengerName"
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              placeholder="Enter passenger's full name"
              required
            />
          </div>

          {/* Trip Type */}
          <div>
            <Label>Trip Type</Label>
            <Select value={tripType} onValueChange={(value: 'one-way' | 'round-trip') => setTripType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one-way">One Way</SelectItem>
                <SelectItem value="round-trip">Round Trip</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Airport Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <Label>From</Label>
              <AirportSearch
                value={fromAirport}
                onChange={setFromAirport}
                placeholder="Departure airport"
              />
            </div>
            
            <div className="flex items-center justify-center md:justify-start mb-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={swapAirports}
                className="h-10 w-10"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <Label>To</Label>
              <AirportSearch
                value={toAirport}
                onChange={setToAirport}
                placeholder="Destination airport"
              />
            </div>
          </div>

          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="departureDate">Departure Date</Label>
              <div className="relative">
                <Input
                  id="departureDate"
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            {tripType === 'round-trip' && (
              <div>
                <Label htmlFor="returnDate">Return Date</Label>
                <div className="relative">
                  <Input
                    id="returnDate"
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={departureDate || new Date().toISOString().split('T')[0]}
                    required={tripType === 'round-trip'}
                  />
                  <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            disabled={isSearching}
          >
            {isSearching ? 'Searching Flights...' : 'Search Flights'}
            <Plane className="h-5 w-5 ml-2" />
          </Button>
        </form>
      </Card>

      {/* Ad directly below card with no extra spacing */}
      <div className="flex justify-center">
        <div ref={adContainerRef} className="w-[300px] h-[250px]"></div>
      </div>
    </div>
  );
};

export default EnhancedFlightForm;

