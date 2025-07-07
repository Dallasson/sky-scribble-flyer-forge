
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FlightData } from '../pages/Index';
import { Plane, User, Calendar, Clock, MapPin } from 'lucide-react';

interface FlightFormProps {
  onSubmit: (data: FlightData) => void;
}

const FlightForm: React.FC<FlightFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FlightData>({
    passengerName: '',
    from: '',
    to: '',
    departureDate: '',
    departureTime: '',
    arrivalTime: '',
    flightNumber: '',
    airline: '',
    seat: '',
    gate: '',
    terminal: '',
    class: '',
    bookingRef: ''
  });

  const generateRandomData = () => {
    const airlines = ['American Airlines', 'Delta Air Lines', 'United Airlines', 'Southwest Airlines', 'JetBlue Airways'];
    const cities = ['New York (JFK)', 'Los Angeles (LAX)', 'Chicago (ORD)', 'Miami (MIA)', 'San Francisco (SFO)', 'Boston (BOS)', 'Seattle (SEA)'];
    const classes = ['Economy', 'Premium Economy', 'Business', 'First Class'];
    
    const randomAirline = airlines[Math.floor(Math.random() * airlines.length)];
    const randomFrom = cities[Math.floor(Math.random() * cities.length)];
    let randomTo = cities[Math.floor(Math.random() * cities.length)];
    while (randomTo === randomFrom) {
      randomTo = cities[Math.floor(Math.random() * cities.length)];
    }
    
    const today = new Date();
    const futureDate = new Date(today.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000);
    
    setFormData({
      ...formData,
      airline: randomAirline,
      from: randomFrom,
      to: randomTo,
      departureDate: futureDate.toISOString().split('T')[0],
      departureTime: `${Math.floor(Math.random() * 12) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
      arrivalTime: `${Math.floor(Math.random() * 12) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
      flightNumber: `${randomAirline.split(' ')[0].substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 9000) + 1000}`,
      seat: `${Math.floor(Math.random() * 35) + 1}${String.fromCharCode(65 + Math.floor(Math.random() * 6))}`,
      gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 10))}${Math.floor(Math.random() * 20) + 1}`,
      terminal: `${Math.floor(Math.random() * 5) + 1}`,
      class: classes[Math.floor(Math.random() * classes.length)],
      bookingRef: Math.random().toString(36).substring(2, 8).toUpperCase()
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof FlightData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="flex items-center space-x-2 text-xl">
          <Plane className="h-5 w-5" />
          <span>Flight Details</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Passenger Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-3">
                <User className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Passenger Information</h3>
              </div>
              
              <div>
                <Label htmlFor="passengerName">Full Name</Label>
                <Input
                  id="passengerName"
                  value={formData.passengerName}
                  onChange={(e) => handleInputChange('passengerName', e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <Label htmlFor="bookingRef">Booking Reference</Label>
                <Input
                  id="bookingRef"
                  value={formData.bookingRef}
                  onChange={(e) => handleInputChange('bookingRef', e.target.value)}
                  placeholder="ABC123"
                  required
                />
              </div>
            </div>

            {/* Flight Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Flight Information</h3>
              </div>
              
              <div>
                <Label htmlFor="airline">Airline</Label>
                <Input
                  id="airline"
                  value={formData.airline}
                  onChange={(e) => handleInputChange('airline', e.target.value)}
                  placeholder="American Airlines"
                  required
                />
              </div>

              <div>
                <Label htmlFor="flightNumber">Flight Number</Label>
                <Input
                  id="flightNumber"
                  value={formData.flightNumber}
                  onChange={(e) => handleInputChange('flightNumber', e.target.value)}
                  placeholder="AA1234"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="from">From</Label>
              <Input
                id="from"
                value={formData.from}
                onChange={(e) => handleInputChange('from', e.target.value)}
                placeholder="New York (JFK)"
                required
              />
            </div>

            <div>
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                value={formData.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
                placeholder="Los Angeles (LAX)"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="departureDate">Departure Date</Label>
              <Input
                id="departureDate"
                type="date"
                value={formData.departureDate}
                onChange={(e) => handleInputChange('departureDate', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="departureTime">Departure Time</Label>
              <Input
                id="departureTime"
                value={formData.departureTime}
                onChange={(e) => handleInputChange('departureTime', e.target.value)}
                placeholder="2:30 PM"
                required
              />
            </div>

            <div>
              <Label htmlFor="arrivalTime">Arrival Time</Label>
              <Input
                id="arrivalTime"
                value={formData.arrivalTime}
                onChange={(e) => handleInputChange('arrivalTime', e.target.value)}
                placeholder="5:45 PM"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="seat">Seat</Label>
              <Input
                id="seat"
                value={formData.seat}
                onChange={(e) => handleInputChange('seat', e.target.value)}
                placeholder="12A"
                required
              />
            </div>

            <div>
              <Label htmlFor="gate">Gate</Label>
              <Input
                id="gate"
                value={formData.gate}
                onChange={(e) => handleInputChange('gate', e.target.value)}
                placeholder="A12"
                required
              />
            </div>

            <div>
              <Label htmlFor="terminal">Terminal</Label>
              <Input
                id="terminal"
                value={formData.terminal}
                onChange={(e) => handleInputChange('terminal', e.target.value)}
                placeholder="1"
                required
              />
            </div>

            <div>
              <Label htmlFor="class">Class</Label>
              <Select value={formData.class} onValueChange={(value) => handleInputChange('class', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Economy">Economy</SelectItem>
                  <SelectItem value="Premium Economy">Premium Economy</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="First Class">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={generateRandomData}
              className="flex-1"
            >
              Generate Random Data
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Generate Ticket
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FlightForm;
