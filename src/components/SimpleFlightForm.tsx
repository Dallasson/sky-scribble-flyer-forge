
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FlightData } from '../pages/Index';
import { Plane, User, Calendar, ArrowRight, RotateCcw } from 'lucide-react';
import { AIRPORTS, generateFlightDetails, getPopularRoutes } from '../services/flightDataService';

interface SimpleFlightFormProps {
  onSubmit: (data: FlightData) => void;
}

const SimpleFlightForm: React.FC<SimpleFlightFormProps> = ({ onSubmit }) => {
  const [passengerName, setPassengerName] = useState('');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const popularRoutes = getPopularRoutes();

  const handleQuickRoute = (from: string, to: string) => {
    setFromAirport(from);
    setToAirport(to);
  };

  const swapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passengerName || !fromAirport || !toAirport || !departureDate) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const flightDetails = generateFlightDetails(
        fromAirport,
        toAirport,
        departureDate,
        departureTime || undefined
      );

      const flightData: FlightData = {
        passengerName,
        ...flightDetails
      };

      onSubmit(flightData);
    } catch (error) {
      console.error('Error generating flight details:', error);
      alert('Error generating flight details. Please check your airport selections.');
    }
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="flex items-center space-x-2 text-xl">
          <Plane className="h-5 w-5" />
          <span>Book Your Flight</span>
        </CardTitle>
        <p className="text-blue-100 text-sm">Enter your details and we'll generate a realistic flight ticket</p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Passenger Name */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <User className="h-4 w-4 text-blue-600" />
              <Label htmlFor="passengerName" className="font-semibold">Full Name *</Label>
            </div>
            <Input
              id="passengerName"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              placeholder="John Doe"
              required
              className="text-lg"
            />
          </div>

          {/* Trip Type */}
          <div className="space-y-2">
            <Label className="font-semibold">Trip Type</Label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="one-way"
                  checked={tripType === 'one-way'}
                  onChange={(e) => setTripType(e.target.value as 'one-way')}
                  className="text-blue-600"
                />
                <span>One Way</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="round-trip"
                  checked={tripType === 'round-trip'}
                  onChange={(e) => setTripType(e.target.value as 'round-trip')}
                  className="text-blue-600"
                />
                <span>Round Trip</span>
              </label>
            </div>
          </div>

          {/* Quick Routes */}
          <div className="space-y-2">
            <Label className="font-semibold">Popular Routes</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {popularRoutes.slice(0, 6).map((route, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickRoute(route.from, route.to)}
                  className="text-xs"
                >
                  {route.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Airport Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from" className="font-semibold">From *</Label>
              <Select value={fromAirport} onValueChange={setFromAirport}>
                <SelectTrigger>
                  <SelectValue placeholder="Select departure city" />
                </SelectTrigger>
                <SelectContent>
                  {AIRPORTS.map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code}) - {airport.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="to" className="font-semibold">To *</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={swapAirports}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
              <Select value={toAirport} onValueChange={setToAirport}>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination city" />
                </SelectTrigger>
                <SelectContent>
                  {AIRPORTS.map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code}) - {airport.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <Label htmlFor="departureDate" className="font-semibold">Departure Date *</Label>
              </div>
              <Input
                id="departureDate"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={getTodayDate()}
                required
              />
            </div>

            {tripType === 'round-trip' && (
              <div className="space-y-2">
                <Label htmlFor="returnDate" className="font-semibold">Return Date</Label>
                <Input
                  id="returnDate"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={departureDate || getTodayDate()}
                />
              </div>
            )}
          </div>

          {/* Optional Departure Time */}
          <div className="space-y-2">
            <Label htmlFor="departureTime" className="font-semibold">Preferred Departure Time (Optional)</Label>
            <Input
              id="departureTime"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              placeholder="e.g., 2:30 PM (leave blank for random)"
            />
            <p className="text-sm text-gray-500">
              Leave blank to generate a random departure time
            </p>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
            <Plane className="h-5 w-5 mr-2" />
            Generate Flight Ticket
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SimpleFlightForm;
