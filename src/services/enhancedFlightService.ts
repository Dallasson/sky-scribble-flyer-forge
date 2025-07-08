
import { AIRPORTS } from './airportDatabase';

export interface FlightOption {
  flightNumber: string;
  airline: string;
  aircraft: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  class: string;
  stops: number;
  availableSeats: number;
}

const airlines = [
  'American Airlines',
  'Delta Air Lines',
  'United Airlines',
  'Southwest Airlines',
  'JetBlue Airways',
  'Alaska Airlines',
  'Spirit Airlines',
  'Frontier Airlines',
  'Hawaiian Airlines',
  'Allegiant Air'
];

const aircraftTypes = [
  'Boeing 737-800',
  'Airbus A320',
  'Boeing 777-300ER',
  'Airbus A330-300',
  'Boeing 787-9',
  'Embraer E175',
  'Boeing 757-200',
  'Airbus A321',
  'Boeing 767-300ER',
  'CRJ-900'
];

const travelClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];

export const searchFlights = (fromCode: string, toCode: string, date: string): FlightOption[] => {
  const fromAirport = AIRPORTS.find(a => a.code === fromCode);
  const toAirport = AIRPORTS.find(a => a.code === toCode);
  
  if (!fromAirport || !toAirport) {
    return [];
  }

  // Calculate base price based on distance (simplified)
  const basePrice = calculateBasePrice(fromCode, toCode);
  
  // Generate 3-6 flight options
  const numFlights = Math.floor(Math.random() * 4) + 3;
  const flights: FlightOption[] = [];
  
  for (let i = 0; i < numFlights; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const aircraft = aircraftTypes[Math.floor(Math.random() * aircraftTypes.length)];
    const travelClass = travelClasses[Math.floor(Math.random() * travelClasses.length)];
    
    // Generate flight number
    const airlineCode = getAirlineCode(airline);
    const flightNumber = `${airlineCode}${Math.floor(Math.random() * 9000) + 1000}`;
    
    // Generate times
    const departureTime = generateRandomTime();
    const flightDuration = calculateFlightDuration(fromCode, toCode);
    const arrivalTime = addHoursToTime(departureTime, flightDuration);
    
    // Calculate price variation
    const priceMultiplier = getPriceMultiplier(airline, travelClass);
    const finalPrice = Math.round(basePrice * priceMultiplier);
    
    // Generate stops
    const stops = Math.random() > 0.7 ? (Math.random() > 0.8 ? 2 : 1) : 0;
    
    flights.push({
      flightNumber,
      airline,
      aircraft,
      from: `${fromAirport.city} (${fromAirport.code})`,
      to: `${toAirport.city} (${toAirport.code})`,
      departureTime,
      arrivalTime,
      duration: `${flightDuration}h ${Math.floor(Math.random() * 60)}m`,
      price: finalPrice,
      class: travelClass,
      stops,
      availableSeats: Math.floor(Math.random() * 50) + 5
    });
  }
  
  // Sort by price
  return flights.sort((a, b) => a.price - b.price);
};

const calculateBasePrice = (fromCode: string, toCode: string): number => {
  // Simplified distance-based pricing
  const domesticCodes = ['JFK', 'LAX', 'ORD', 'MIA', 'SFO', 'BOS', 'SEA', 'DEN', 'ATL', 'LAS'];
  const isDomestic = domesticCodes.includes(fromCode) && domesticCodes.includes(toCode);
  
  if (isDomestic) {
    return Math.floor(Math.random() * 300) + 150; // $150-450 for domestic
  } else {
    return Math.floor(Math.random() * 800) + 400; // $400-1200 for international
  }
};

const getAirlineCode = (airline: string): string => {
  const codes: { [key: string]: string } = {
    'American Airlines': 'AA',
    'Delta Air Lines': 'DL',
    'United Airlines': 'UA',
    'Southwest Airlines': 'WN',
    'JetBlue Airways': 'B6',
    'Alaska Airlines': 'AS',
    'Spirit Airlines': 'NK',
    'Frontier Airlines': 'F9',
    'Hawaiian Airlines': 'HA',
    'Allegiant Air': 'G4'
  };
  return codes[airline] || 'XX';
};

const getPriceMultiplier = (airline: string, travelClass: string): number => {
  let multiplier = 1;
  
  // Airline pricing
  if (['Spirit Airlines', 'Frontier Airlines'].includes(airline)) {
    multiplier *= 0.7; // Budget airlines
  } else if (['American Airlines', 'Delta Air Lines', 'United Airlines'].includes(airline)) {
    multiplier *= 1.2; // Premium airlines
  }
  
  // Class pricing
  switch (travelClass) {
    case 'Premium Economy':
      multiplier *= 1.5;
      break;
    case 'Business':
      multiplier *= 3;
      break;
    case 'First Class':
      multiplier *= 5;
      break;
  }
  
  return multiplier;
};

const generateRandomTime = (): string => {
  const hour = Math.floor(Math.random() * 12) + 1;
  const minute = Math.floor(Math.random() * 60);
  const period = Math.random() > 0.5 ? 'AM' : 'PM';
  return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
};

const calculateFlightDuration = (fromCode: string, toCode: string): number => {
  const domesticCodes = ['JFK', 'LAX', 'ORD', 'MIA', 'SFO', 'BOS', 'SEA', 'DEN', 'ATL', 'LAS'];
  const isDomestic = domesticCodes.includes(fromCode) && domesticCodes.includes(toCode);
  
  if (isDomestic) {
    return Math.floor(Math.random() * 4) + 2; // 2-6 hours for domestic
  } else {
    return Math.floor(Math.random() * 8) + 6; // 6-14 hours for international
  }
};

const addHoursToTime = (time: string, hours: number): string => {
  const [timePart, period] = time.split(' ');
  const [hourStr, minuteStr] = timePart.split(':');
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);
  
  // Convert to 24-hour format
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;
  
  // Add hours
  hour += hours;
  
  // Handle day overflow
  if (hour >= 24) hour -= 24;
  
  // Convert back to 12-hour format
  const newPeriod = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  
  return `${displayHour}:${minute.toString().padStart(2, '0')} ${newPeriod}`;
};
