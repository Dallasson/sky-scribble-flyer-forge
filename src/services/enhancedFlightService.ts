
import { AIRPORTS } from './airportDatabase';

export interface FlightOption {
  flightNumber: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  class: string;
  stops: number;
  aircraft: string;
  availableSeats: number;
}

// Comprehensive airline database with codes and countries
const AIRLINES = [
  // Europe
  { code: 'A3', name: 'Aegean Airlines', country: 'Greece' },
  { code: 'EI', name: 'Aer Lingus', country: 'Ireland' },
  { code: 'SU', name: 'Aeroflot', country: 'Russia' },
  { code: 'AR', name: 'Aerolineas Argentinas', country: 'Argentina' },
  { code: 'AM', name: 'Aeroméxico', country: 'Mexico' },
  { code: 'AH', name: 'Air Algerie', country: 'Algeria' },
  { code: 'G9', name: 'Air Arabia', country: 'UAE' },
  { code: 'AK', name: 'Air Asia', country: 'Malaysia' },
  { code: 'KC', name: 'Air Astana', country: 'Kazakhstan' },
  { code: 'UU', name: 'Air Austral', country: 'France' },
  { code: 'BT', name: 'Air Baltic', country: 'Latvia' },
  { code: 'KF', name: 'Air Belgium', country: 'Belgium' },
  { code: 'BP', name: 'Air Botswana', country: 'Botswana' },
  { code: 'SM', name: 'Air Cairo', country: 'Egypt' },
  { code: 'AC', name: 'Air Canada', country: 'Canada' },
  { code: 'CA', name: 'Air China', country: 'China' },
  { code: 'UX', name: 'Air Europa', country: 'Spain' },
  { code: 'AF', name: 'Air France', country: 'France' },
  { code: 'AI', name: 'Air India', country: 'India' },
  { code: 'MD', name: 'Air Madagascar', country: 'Madagascar' },
  { code: 'QM', name: 'Air Malawi', country: 'Malawi' },
  { code: 'KM', name: 'Air Malta', country: 'Malta' },
  { code: 'MK', name: 'Air Mauritius', country: 'Mauritius' },
  { code: 'NZ', name: 'Air New Zealand', country: 'New Zealand' },
  { code: 'PX', name: 'Air Niugini', country: 'Papua New Guinea' },
  { code: 'JU', name: 'Air Serbia', country: 'Serbia' },
  { code: 'HM', name: 'Air Seychelles', country: 'Seychelles' },
  { code: 'TN', name: 'Air Tahiti Nui', country: 'French Polynesia' },
  { code: 'TC', name: 'Air Tanzania', country: 'Tanzania' },
  { code: 'TS', name: 'Air Transat', country: 'Canada' },
  { code: 'AS', name: 'Alaska Airlines', country: 'USA' },
  { code: 'AZ', name: 'ITA Airways', country: 'Italy' },
  { code: 'NH', name: 'All Nippon Airways (ANA)', country: 'Japan' },
  { code: 'AA', name: 'American Airlines', country: 'USA' },
  { code: 'IZ', name: 'Arkia Israeli Airlines', country: 'Israel' },
  { code: 'OZ', name: 'Asiana Airlines', country: 'South Korea' },
  { code: 'KP', name: 'ASKY Airlines', country: 'Togo' },
  { code: 'OS', name: 'Austrian Airlines', country: 'Austria' },
  { code: 'AV', name: 'Avianca', country: 'Colombia' },
  { code: 'J2', name: 'Azerbaijan Airlines', country: 'Azerbaijan' },
  { code: 'AD', name: 'Azul Brazilian Airlines', country: 'Brazil' },
  { code: 'PG', name: 'Bangkok Airways', country: 'Thailand' },
  { code: 'QH', name: 'Bamboo Airways', country: 'Vietnam' },
  { code: 'ID', name: 'Batik Air', country: 'Indonesia' },
  { code: 'B2', name: 'Belavia', country: 'Belarus' },
  { code: 'BG', name: 'Biman Bangladesh Airlines', country: 'Bangladesh' },
  { code: '0B', name: 'Blue Air', country: 'Romania' },
  { code: 'BA', name: 'British Airways', country: 'UK' },
  { code: 'SN', name: 'Brussels Airlines', country: 'Belgium' },
  { code: 'FB', name: 'Bulgaria Air', country: 'Bulgaria' },
  { code: 'K6', name: 'Cambodia Angkor Air', country: 'Cambodia' },
  { code: 'CF', name: 'CanaryFly', country: 'Spain' },
  { code: 'BW', name: 'Caribbean Airlines', country: 'Trinidad and Tobago' },
  { code: 'CX', name: 'Cathay Pacific', country: 'Hong Kong' },
  { code: 'KX', name: 'Cayman Airways', country: 'Cayman Islands' },
  { code: 'CI', name: 'China Airlines', country: 'Taiwan' },
  { code: 'MU', name: 'China Eastern Airlines', country: 'China' },
  { code: 'CZ', name: 'China Southern Airlines', country: 'China' },
  { code: 'CM', name: 'Copa Airlines', country: 'Panama' },
  { code: 'OU', name: 'Croatia Airlines', country: 'Croatia' },
  { code: 'CU', name: 'Cubana de Aviación', country: 'Cuba' },
  { code: 'OK', name: 'Czech Airlines', country: 'Czech Republic' },
  { code: 'DL', name: 'Delta Air Lines', country: 'USA' },
  { code: 'KB', name: 'Druk Air', country: 'Bhutan' },
  { code: 'MS', name: 'EgyptAir', country: 'Egypt' },
  { code: 'LY', name: 'El Al', country: 'Israel' },
  { code: 'EK', name: 'Emirates', country: 'UAE' },
  { code: 'ET', name: 'Ethiopian Airlines', country: 'Ethiopia' },
  { code: 'EY', name: 'Etihad Airways', country: 'UAE' },
  { code: 'EW', name: 'Eurowings', country: 'Germany' },
  { code: 'BR', name: 'EVA Air', country: 'Taiwan' },
  { code: 'FJ', name: 'Fiji Airways', country: 'Fiji' },
  { code: 'AY', name: 'Finnair', country: 'Finland' },
  { code: 'ARYF', name: 'FlyArystan', country: 'Kazakhstan' },
  { code: 'FZ', name: 'Flydubai', country: 'UAE' },
  { code: 'XY', name: 'Flynas', country: 'Saudi Arabia' },
  { code: 'GA', name: 'Garuda Indonesia', country: 'Indonesia' },
  { code: 'A9', name: 'Georgian Airways', country: 'Georgia' },
  { code: 'G3', name: 'GOL Linhas Aéreas', country: 'Brazil' },
  { code: 'GF', name: 'Gulf Air', country: 'Bahrain' },
  { code: 'HR', name: 'Hahn Air', country: 'Germany' },
  { code: 'HU', name: 'Hainan Airlines', country: 'China' },
  { code: 'HA', name: 'Hawaiian Airlines', country: 'USA' },
  { code: 'HX', name: 'Hong Kong Airlines', country: 'Hong Kong' },
  { code: 'IB', name: 'Iberia', country: 'Spain' },
  { code: 'FI', name: 'Icelandair', country: 'Iceland' },
  { code: '6E', name: 'IndiGo', country: 'India' },
  { code: 'IR', name: 'Iran Air', country: 'Iran' },
  { code: 'IA', name: 'Iraqi Airways', country: 'Iraq' },
  { code: 'JL', name: 'Japan Airlines', country: 'Japan' },
  { code: 'J9', name: 'Jazeera Airways', country: 'Kuwait' },
  { code: '7C', name: 'Jeju Air', country: 'South Korea' },
  { code: 'LS', name: 'Jet2', country: 'UK' },
  { code: 'KQ', name: 'Kenya Airways', country: 'Kenya' },
  { code: 'KL', name: 'KLM Royal Dutch Airlines', country: 'Netherlands' },
  { code: 'KE', name: 'Korean Air', country: 'South Korea' },
  { code: 'KU', name: 'Kuwait Airways', country: 'Kuwait' },
  { code: 'B0', name: 'La Compagnie', country: 'France' },
  { code: 'QV', name: 'Lao Airlines', country: 'Laos' },
  { code: 'LA', name: 'LATAM Airlines', country: 'Chile' },
  { code: 'LN', name: 'Libyan Airlines', country: 'Libya' },
  { code: 'LO', name: 'LOT Polish Airlines', country: 'Poland' },
  { code: 'LH', name: 'Lufthansa', country: 'Germany' },
  { code: 'LG', name: 'Luxair', country: 'Luxembourg' },
  { code: 'OD', name: 'Malindo Air', country: 'Malaysia' },
  { code: 'MH', name: 'Malaysia Airlines', country: 'Malaysia' },
  { code: 'ME', name: 'Middle East Airlines (MEA)', country: 'Lebanon' },
  { code: 'OM', name: 'MIAT Mongolian Airlines', country: 'Mongolia' },
  { code: '8M', name: 'Myanmar Airways International', country: 'Myanmar' },
  { code: 'RA', name: 'Nepal Airlines', country: 'Nepal' },
  { code: 'N4', name: 'Nordwind Airlines', country: 'Russia' },
  { code: 'DY', name: 'Norwegian Air Shuttle', country: 'Norway' },
  { code: 'WY', name: 'Oman Air', country: 'Oman' },
  { code: 'PK', name: 'Pakistan International Airlines', country: 'Pakistan' },
  { code: '2P', name: 'PAL Express', country: 'Philippines' },
  { code: 'PR', name: 'Philippine Airlines', country: 'Philippines' },
  { code: 'PW', name: 'Precision Air', country: 'Tanzania' },
  { code: 'QF', name: 'Qantas', country: 'Australia' },
  { code: 'QR', name: 'Qatar Airways', country: 'Qatar' },
  { code: 'WB', name: 'RwandAir', country: 'Rwanda' },
  { code: 'AT', name: 'Royal Air Maroc', country: 'Morocco' },
  { code: 'BI', name: 'Royal Brunei Airlines', country: 'Brunei' },
  { code: 'RJ', name: 'Royal Jordanian', country: 'Jordan' },
  { code: 'FV', name: 'Rossiya Airlines', country: 'Russia' },
  { code: 'FR', name: 'Ryanair', country: 'Ireland' },
  { code: 'S7', name: 'S7 Airlines', country: 'Russia' },
  { code: 'SV', name: 'SAUDIA', country: 'Saudi Arabia' },
  { code: 'SK', name: 'Scandinavian Airlines (SAS)', country: 'Sweden/Denmark/Norway' },
  { code: 'TR', name: 'Scoot', country: 'Singapore' },
  { code: 'SC', name: 'Shandong Airlines', country: 'China' },
  { code: 'FM', name: 'Shanghai Airlines', country: 'China' },
  { code: 'ZH', name: 'Shenzhen Airlines', country: 'China' },
  { code: '3U', name: 'Sichuan Airlines', country: 'China' },
  { code: 'SQ', name: 'Singapore Airlines', country: 'Singapore' },
  { code: 'H2', name: 'Sky Airline', country: 'Chile' },
  { code: 'GQ', name: 'Sky Express', country: 'Greece' },
  { code: 'QS', name: 'Smartwings', country: 'Czech Republic' },
  { code: 'SA', name: 'South African Airways', country: 'South Africa' },
  { code: 'WN', name: 'Southwest Airlines', country: 'USA' },
  { code: 'SG', name: 'SpiceJet', country: 'India' },
  { code: 'UL', name: 'SriLankan Airlines', country: 'Sri Lanka' },
  { code: 'SD', name: 'Sudan Airways', country: 'Sudan' },
  { code: 'SY', name: 'Sun Country Airlines', country: 'USA' },
  { code: 'PY', name: 'Surinam Airways', country: 'Suriname' },
  { code: 'LX', name: 'Swiss International Air Lines', country: 'Switzerland' },
  { code: 'DT', name: 'TAAG Angola Airlines', country: 'Angola' },
  { code: 'TP', name: 'TAP Air Portugal', country: 'Portugal' },
  { code: 'RO', name: 'TAROM', country: 'Romania' },
  { code: 'TG', name: 'Thai Airways', country: 'Thailand' },
  { code: 'SL', name: 'Thai Lion Air', country: 'Thailand' },
  { code: 'GS', name: 'Tianjin Airlines', country: 'China' },
  { code: 'BY', name: 'TUI Airways', country: 'UK' },
  { code: 'TU', name: 'Tunisair', country: 'Tunisia' },
  { code: 'TK', name: 'Turkish Airlines', country: 'Turkey' },
  { code: 'PS', name: 'Ukraine International Airlines', country: 'Ukraine' },
  { code: 'UR', name: 'Uganda Airlines', country: 'Uganda' },
  { code: 'UA', name: 'United Airlines', country: 'USA' },
  { code: 'U6', name: 'Ural Airlines', country: 'Russia' },
  { code: 'HY', name: 'Uzbekistan Airways', country: 'Uzbekistan' },
  { code: 'VJ', name: 'VietJet Air', country: 'Vietnam' },
  { code: 'VN', name: 'Vietnam Airlines', country: 'Vietnam' },
  { code: 'VS', name: 'Virgin Atlantic', country: 'UK' },
  { code: 'VA', name: 'Virgin Australia', country: 'Australia' },
  { code: 'UK', name: 'Vistara', country: 'India' },
  { code: 'V7', name: 'Viva Aerobus', country: 'Mexico' },
  { code: 'Y4', name: 'Volaris', country: 'Mexico' },
  { code: 'V7', name: 'Volotea', country: 'Spain' },
  { code: 'WS', name: 'WestJet', country: 'Canada' },
  { code: 'W6', name: 'Wizz Air', country: 'Hungary' },
  { code: 'IY', name: 'Yemenia', country: 'Yemen' },
  { code: 'ZG', name: 'ZIPAIR', country: 'Japan' },
  { code: 'UM', name: 'Air Zimbabwe', country: 'Zimbabwe' },
  { code: 'DD', name: 'Nok Air', country: 'Thailand' },
  { code: 'GL', name: 'Air Greenland', country: 'Greenland' },
  { code: '6H', name: 'Israir Airlines', country: 'Israel' },
  { code: 'NF', name: 'Air Vanuatu', country: 'Vanuatu' },
  { code: 'IE', name: 'Solomon Airlines', country: 'Solomon Islands' },
  { code: 'U8', name: 'SkyUp Airlines', country: 'Ukraine' },
  { code: 'SB', name: 'Aircalin', country: 'New Caledonia' },
  { code: 'K7', name: 'Air KBZ', country: 'Myanmar' },
  { code: 'JSX', name: 'JSX', country: 'USA' },
  { code: 'F8', name: 'Flair Airlines', country: 'Canada' },
  { code: 'MX', name: 'Breeze Airways', country: 'USA' },
  { code: 'OG', name: 'Play Airlines', country: 'Iceland' },
  { code: 'N0', name: 'Norse Atlantic Airways', country: 'Norway' },
  { code: 'JA', name: 'JetSmart', country: 'Chile' },
  { code: 'RF', name: 'Aero K', country: 'South Korea' }
];

const AIRCRAFT_TYPES = [
  'Boeing 737-800', 'Boeing 737-900', 'Boeing 757-200', 'Boeing 767-300',
  'Boeing 777-200', 'Boeing 777-300ER', 'Boeing 787-8', 'Boeing 787-9',
  'Airbus A319', 'Airbus A320', 'Airbus A321', 'Airbus A330-200',
  'Airbus A330-300', 'Airbus A340-300', 'Airbus A350-900', 'Airbus A380-800',
  'Embraer E170', 'Embraer E175', 'Embraer E190', 'Bombardier CRJ-200',
  'Bombardier CRJ-700', 'Bombardier CRJ-900', 'ATR 72-600'
];

const TRAVEL_CLASSES = ['Economy', 'Premium Economy', 'Business', 'First Class'];

// Function to calculate flight duration based on distance
const calculateFlightDuration = (fromCode: string, toCode: string): number => {
  const from = AIRPORTS.find(a => a.code === fromCode);
  const to = AIRPORTS.find(a => a.code === toCode);
  
  if (!from || to) {
    // Default duration for unknown routes
    return Math.floor(Math.random() * 4) + 2;
  }
  
  // Simple distance-based duration calculation
  const sameContinentFactor = from.continent === to.continent ? 1 : 2;
  const baseDuration = Math.floor(Math.random() * 4) + 2;
  
  return baseDuration * sameContinentFactor;
};

// Function to calculate price based on various factors
const calculatePrice = (duration: number, travelClass: string, airline: string): number => {
  let basePrice = 200 + (duration * 50);
  
  // Class multipliers
  const classMultipliers = {
    'Economy': 1,
    'Premium Economy': 1.5,
    'Business': 3,
    'First Class': 5
  };
  
  // Premium airline multiplier
  const premiumAirlines = ['Emirates', 'Singapore Airlines', 'Qatar Airways', 'Lufthansa', 'Swiss International Air Lines'];
  const airlineMultiplier = premiumAirlines.includes(airline) ? 1.3 : 1;
  
  const finalPrice = basePrice * classMultipliers[travelClass as keyof typeof classMultipliers] * airlineMultiplier;
  
  // Add some randomness
  return Math.round(finalPrice * (0.8 + Math.random() * 0.4));
};

// Function to generate random time
const generateRandomTime = (): string => {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, 45
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const period = hour >= 12 ? 'PM' : 'AM';
  return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
};

// Function to add hours to time
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

export const searchFlights = (fromCode: string, toCode: string, date: string): FlightOption[] => {
  const fromAirport = AIRPORTS.find(a => a.code === fromCode);
  const toAirport = AIRPORTS.find(a => a.code === toCode);
  
  if (!fromAirport || !toAirport) {
    return [];
  }

  const flights: FlightOption[] = [];
  
  // Generate 5-8 different flight options
  const numFlights = Math.floor(Math.random() * 4) + 5;
  
  for (let i = 0; i < numFlights; i++) {
    const airline = AIRLINES[Math.floor(Math.random() * AIRLINES.length)];
    const aircraft = AIRCRAFT_TYPES[Math.floor(Math.random() * AIRCRAFT_TYPES.length)];
    const travelClass = TRAVEL_CLASSES[Math.floor(Math.random() * TRAVEL_CLASSES.length)];
    const duration = calculateFlightDuration(fromCode, toCode);
    const departureTime = generateRandomTime();
    const arrivalTime = addHoursToTime(departureTime, duration);
    const stops = Math.random() > 0.7 ? Math.floor(Math.random() * 2) + 1 : 0;
    const price = calculatePrice(duration, travelClass, airline.name);
    const availableSeats = Math.floor(Math.random() * 50) + 10;
    
    flights.push({
      flightNumber: `${airline.code}${Math.floor(Math.random() * 9000) + 1000}`,
      airline: airline.name,
      from: fromCode,
      to: toCode,
      departureTime,
      arrivalTime,
      duration: `${duration}h ${Math.floor(Math.random() * 60)}m`,
      price,
      class: travelClass,
      stops,
      aircraft,
      availableSeats
    });
  }
  
  // Sort flights by price
  return flights.sort((a, b) => a.price - b.price);
};
