
// Real airline and airport data
export const AIRLINES = [
  { code: 'AA', name: 'American Airlines', logo: '🇺🇸' },
  { code: 'DL', name: 'Delta Air Lines', logo: '🔺' },
  { code: 'UA', name: 'United Airlines', logo: '🌐' },
  { code: 'SW', name: 'Southwest Airlines', logo: '❤️' },
  { code: 'JB', name: 'JetBlue Airways', logo: '🔵' },
  { code: 'AS', name: 'Alaska Airlines', logo: '🐻' },
  { code: 'B6', name: 'JetBlue', logo: '💙' },
  { code: 'NK', name: 'Spirit Airlines', logo: '💛' },
  { code: 'F9', name: 'Frontier Airlines', logo: '🦌' },
  { code: 'WN', name: 'Southwest', logo: '💗' }
];

export const AIRPORTS = [
  { code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA' },
  { code: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'USA' },
  { code: 'ORD', name: 'O\'Hare International', city: 'Chicago', country: 'USA' },
  { code: 'MIA', name: 'Miami International', city: 'Miami', country: 'USA' },
  { code: 'SFO', name: 'San Francisco International', city: 'San Francisco', country: 'USA' },
  { code: 'BOS', name: 'Logan International', city: 'Boston', country: 'USA' },
  { code: 'SEA', name: 'Seattle-Tacoma International', city: 'Seattle', country: 'USA' },
  { code: 'DEN', name: 'Denver International', city: 'Denver', country: 'USA' },
  { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International', city: 'Atlanta', country: 'USA' },
  { code: 'LAS', name: 'McCarran International', city: 'Las Vegas', country: 'USA' },
  { code: 'PHX', name: 'Phoenix Sky Harbor International', city: 'Phoenix', country: 'USA' },
  { code: 'DFW', name: 'Dallas/Fort Worth International', city: 'Dallas', country: 'USA' },
  { code: 'IAH', name: 'George Bush Intercontinental', city: 'Houston', country: 'USA' },
  { code: 'MCO', name: 'Orlando International', city: 'Orlando', country: 'USA' },
  { code: 'LHR', name: 'Heathrow', city: 'London', country: 'UK' },
  { code: 'CDG', name: 'Charles de Gaulle', city: 'Paris', country: 'France' },
  { code: 'NRT', name: 'Narita International', city: 'Tokyo', country: 'Japan' },
  { code: 'SYD', name: 'Kingsford Smith', city: 'Sydney', country: 'Australia' }
];

export const TRAVEL_CLASSES = ['Economy', 'Premium Economy', 'Business', 'First Class'];

export interface FlightRoute {
  from: string;
  to: string;
  airline: string;
  flightNumber: string;
  duration: string;
  distance: string;
}

// Generate realistic flight details
export const generateFlightDetails = (fromCode: string, toCode: string, departureDate: string, departureTime?: string) => {
  const airline = AIRLINES[Math.floor(Math.random() * AIRLINES.length)];
  const fromAirport = AIRPORTS.find(a => a.code === fromCode);
  const toAirport = AIRPORTS.find(a => a.code === toCode);
  
  if (!fromAirport || !toAirport) {
    throw new Error('Invalid airport codes');
  }

  // Generate flight number
  const flightNumber = `${airline.code}${Math.floor(Math.random() * 9000) + 1000}`;
  
  // Generate departure time if not provided
  const depTime = departureTime || generateRandomTime();
  
  // Calculate arrival time (add 1-6 hours depending on distance)
  const flightDuration = calculateFlightDuration(fromCode, toCode);
  const arrivalTime = addHoursToTime(depTime, flightDuration);
  
  // Generate seat (realistic airline seating)
  const seatRow = Math.floor(Math.random() * 35) + 1;
  const seatLetter = String.fromCharCode(65 + Math.floor(Math.random() * 6)); // A-F
  const seat = `${seatRow}${seatLetter}`;
  
  // Generate gate
  const gateTerminal = String.fromCharCode(65 + Math.floor(Math.random() * 5)); // A-E
  const gateNumber = Math.floor(Math.random() * 30) + 1;
  const gate = `${gateTerminal}${gateNumber}`;
  
  // Generate terminal
  const terminal = `${Math.floor(Math.random() * 5) + 1}`;
  
  // Select class
  const travelClass = TRAVEL_CLASSES[Math.floor(Math.random() * TRAVEL_CLASSES.length)];
  
  // Generate booking reference
  const bookingRef = Math.random().toString(36).substring(2, 8).toUpperCase();

  return {
    airline: airline.name,
    flightNumber,
    from: `${fromAirport.city} (${fromAirport.code})`,
    to: `${toAirport.city} (${toAirport.code})`,
    departureDate,
    departureTime: depTime,
    arrivalTime,
    seat,
    gate,
    terminal,
    class: travelClass,
    bookingRef,
    duration: `${flightDuration}h ${Math.floor(Math.random() * 60)}m`
  };
};

const generateRandomTime = (): string => {
  const hour = Math.floor(Math.random() * 12) + 1;
  const minute = Math.floor(Math.random() * 60);
  const period = Math.random() > 0.5 ? 'AM' : 'PM';
  return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
};

const calculateFlightDuration = (from: string, to: string): number => {
  // Simplified duration calculation based on common routes
  const domesticRoutes = ['JFK', 'LAX', 'ORD', 'MIA', 'SFO', 'BOS', 'SEA', 'DEN', 'ATL', 'LAS', 'PHX', 'DFW', 'IAH', 'MCO'];
  const isDomestic = domesticRoutes.includes(from) && domesticRoutes.includes(to);
  
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

export const getPopularRoutes = () => {
  return [
    { from: 'JFK', to: 'LAX', label: 'New York → Los Angeles' },
    { from: 'LAX', to: 'JFK', label: 'Los Angeles → New York' },
    { from: 'ORD', to: 'SFO', label: 'Chicago → San Francisco' },
    { from: 'MIA', to: 'BOS', label: 'Miami → Boston' },
    { from: 'SEA', to: 'DEN', label: 'Seattle → Denver' },
    { from: 'ATL', to: 'LAS', label: 'Atlanta → Las Vegas' },
    { from: 'JFK', to: 'LHR', label: 'New York → London' },
    { from: 'LAX', to: 'NRT', label: 'Los Angeles → Tokyo' },
    { from: 'SFO', to: 'CDG', label: 'San Francisco → Paris' },
    { from: 'MIA', to: 'SYD', label: 'Miami → Sydney' }
  ];
};
