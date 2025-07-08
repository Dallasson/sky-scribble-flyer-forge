
export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  continent: string;
}

export const AIRPORTS: Airport[] = [
  // North America - USA
  { code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA', continent: 'North America' },
  { code: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'USA', continent: 'North America' },
  { code: 'ORD', name: 'O\'Hare International', city: 'Chicago', country: 'USA', continent: 'North America' },
  { code: 'MIA', name: 'Miami International', city: 'Miami', country: 'USA', continent: 'North America' },
  { code: 'SFO', name: 'San Francisco International', city: 'San Francisco', country: 'USA', continent: 'North America' },
  { code: 'BOS', name: 'Logan International', city: 'Boston', country: 'USA', continent: 'North America' },
  { code: 'SEA', name: 'Seattle-Tacoma International', city: 'Seattle', country: 'USA', continent: 'North America' },
  { code: 'DEN', name: 'Denver International', city: 'Denver', country: 'USA', continent: 'North America' },
  { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International', city: 'Atlanta', country: 'USA', continent: 'North America' },
  { code: 'LAS', name: 'McCarran International', city: 'Las Vegas', country: 'USA', continent: 'North America' },
  { code: 'PHX', name: 'Phoenix Sky Harbor International', city: 'Phoenix', country: 'USA', continent: 'North America' },
  { code: 'DFW', name: 'Dallas/Fort Worth International', city: 'Dallas', country: 'USA', continent: 'North America' },
  { code: 'IAH', name: 'George Bush Intercontinental', city: 'Houston', country: 'USA', continent: 'North America' },
  { code: 'MCO', name: 'Orlando International', city: 'Orlando', country: 'USA', continent: 'North America' },
  { code: 'MSP', name: 'Minneapolis-St. Paul International', city: 'Minneapolis', country: 'USA', continent: 'North America' },
  { code: 'DTW', name: 'Detroit Metropolitan Wayne County', city: 'Detroit', country: 'USA', continent: 'North America' },
  { code: 'CLT', name: 'Charlotte Douglas International', city: 'Charlotte', country: 'USA', continent: 'North America' },
  { code: 'PHL', name: 'Philadelphia International', city: 'Philadelphia', country: 'USA', continent: 'North America' },
  { code: 'BWI', name: 'Baltimore/Washington International', city: 'Baltimore', country: 'USA', continent: 'North America' },
  { code: 'DCA', name: 'Ronald Reagan Washington National', city: 'Washington DC', country: 'USA', continent: 'North America' },
  
  // North America - Canada
  { code: 'YYZ', name: 'Toronto Pearson International', city: 'Toronto', country: 'Canada', continent: 'North America' },
  { code: 'YVR', name: 'Vancouver International', city: 'Vancouver', country: 'Canada', continent: 'North America' },
  { code: 'YUL', name: 'Montreal-Pierre Elliott Trudeau International', city: 'Montreal', country: 'Canada', continent: 'North America' },
  { code: 'YYC', name: 'Calgary International', city: 'Calgary', country: 'Canada', continent: 'North America' },
  
  // Europe - UK
  { code: 'LHR', name: 'Heathrow', city: 'London', country: 'UK', continent: 'Europe' },
  { code: 'LGW', name: 'Gatwick', city: 'London', country: 'UK', continent: 'Europe' },
  { code: 'STN', name: 'Stansted', city: 'London', country: 'UK', continent: 'Europe' },
  { code: 'MAN', name: 'Manchester', city: 'Manchester', country: 'UK', continent: 'Europe' },
  { code: 'EDI', name: 'Edinburgh', city: 'Edinburgh', country: 'UK', continent: 'Europe' },
  
  // Europe - France
  { code: 'CDG', name: 'Charles de Gaulle', city: 'Paris', country: 'France', continent: 'Europe' },
  { code: 'ORY', name: 'Orly', city: 'Paris', country: 'France', continent: 'Europe' },
  { code: 'NCE', name: 'Nice Côte d\'Azur', city: 'Nice', country: 'France', continent: 'Europe' },
  
  // Europe - Germany
  { code: 'FRA', name: 'Frankfurt am Main', city: 'Frankfurt', country: 'Germany', continent: 'Europe' },
  { code: 'MUC', name: 'Munich', city: 'Munich', country: 'Germany', continent: 'Europe' },
  { code: 'BER', name: 'Brandenburg', city: 'Berlin', country: 'Germany', continent: 'Europe' },
  { code: 'DUS', name: 'Düsseldorf', city: 'Düsseldorf', country: 'Germany', continent: 'Europe' },
  
  // Europe - Netherlands
  { code: 'AMS', name: 'Amsterdam Schiphol', city: 'Amsterdam', country: 'Netherlands', continent: 'Europe' },
  
  // Europe - Spain
  { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas', city: 'Madrid', country: 'Spain', continent: 'Europe' },
  { code: 'BCN', name: 'Barcelona–El Prat', city: 'Barcelona', country: 'Spain', continent: 'Europe' },
  
  // Europe - Italy
  { code: 'FCO', name: 'Leonardo da Vinci–Fiumicino', city: 'Rome', country: 'Italy', continent: 'Europe' },
  { code: 'MXP', name: 'Milan Malpensa', city: 'Milan', country: 'Italy', continent: 'Europe' },
  { code: 'VCE', name: 'Venice Marco Polo', city: 'Venice', country: 'Italy', continent: 'Europe' },
  
  // Europe - Switzerland
  { code: 'ZUR', name: 'Zurich', city: 'Zurich', country: 'Switzerland', continent: 'Europe' },
  { code: 'GVA', name: 'Geneva', city: 'Geneva', country: 'Switzerland', continent: 'Europe' },
  
  // Europe - Austria
  { code: 'VIE', name: 'Vienna International', city: 'Vienna', country: 'Austria', continent: 'Europe' },
  
  // Europe - Scandinavia
  { code: 'ARN', name: 'Stockholm Arlanda', city: 'Stockholm', country: 'Sweden', continent: 'Europe' },
  { code: 'CPH', name: 'Copenhagen', city: 'Copenhagen', country: 'Denmark', continent: 'Europe' },
  { code: 'OSL', name: 'Oslo', city: 'Oslo', country: 'Norway', continent: 'Europe' },
  { code: 'HEL', name: 'Helsinki-Vantaa', city: 'Helsinki', country: 'Finland', continent: 'Europe' },
  
  // Asia - Japan
  { code: 'NRT', name: 'Narita International', city: 'Tokyo', country: 'Japan', continent: 'Asia' },
  { code: 'HND', name: 'Haneda', city: 'Tokyo', country: 'Japan', continent: 'Asia' },
  { code: 'KIX', name: 'Kansai International', city: 'Osaka', country: 'Japan', continent: 'Asia' },
  
  // Asia - China
  { code: 'PEK', name: 'Beijing Capital International', city: 'Beijing', country: 'China', continent: 'Asia' },
  { code: 'PVG', name: 'Shanghai Pudong International', city: 'Shanghai', country: 'China', continent: 'Asia' },
  { code: 'CAN', name: 'Guangzhou Baiyun International', city: 'Guangzhou', country: 'China', continent: 'Asia' },
  { code: 'SZX', name: 'Shenzhen Bao\'an International', city: 'Shenzhen', country: 'China', continent: 'Asia' },
  
  // Asia - Southeast Asia
  { code: 'SIN', name: 'Singapore Changi', city: 'Singapore', country: 'Singapore', continent: 'Asia' },
  { code: 'BKK', name: 'Suvarnabhumi', city: 'Bangkok', country: 'Thailand', continent: 'Asia' },
  { code: 'KUL', name: 'Kuala Lumpur International', city: 'Kuala Lumpur', country: 'Malaysia', continent: 'Asia' },
  { code: 'CGK', name: 'Soekarno-Hatta International', city: 'Jakarta', country: 'Indonesia', continent: 'Asia' },
  { code: 'MNL', name: 'Ninoy Aquino International', city: 'Manila', country: 'Philippines', continent: 'Asia' },
  { code: 'HKG', name: 'Hong Kong International', city: 'Hong Kong', country: 'Hong Kong', continent: 'Asia' },
  
  // Asia - India
  { code: 'DEL', name: 'Indira Gandhi International', city: 'New Delhi', country: 'India', continent: 'Asia' },
  { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International', city: 'Mumbai', country: 'India', continent: 'Asia' },
  { code: 'BLR', name: 'Kempegowda International', city: 'Bangalore', country: 'India', continent: 'Asia' },
  { code: 'MAA', name: 'Chennai International', city: 'Chennai', country: 'India', continent: 'Asia' },
  
  // Asia - South Korea
  { code: 'ICN', name: 'Incheon International', city: 'Seoul', country: 'South Korea', continent: 'Asia' },
  { code: 'GMP', name: 'Gimpo International', city: 'Seoul', country: 'South Korea', continent: 'Asia' },
  
  // Middle East
  { code: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'UAE', continent: 'Middle East' },
  { code: 'AUH', name: 'Abu Dhabi International', city: 'Abu Dhabi', country: 'UAE', continent: 'Middle East' },
  { code: 'DOH', name: 'Hamad International', city: 'Doha', country: 'Qatar', continent: 'Middle East' },
  { code: 'KWI', name: 'Kuwait International', city: 'Kuwait City', country: 'Kuwait', continent: 'Middle East' },
  { code: 'RUH', name: 'King Khalid International', city: 'Riyadh', country: 'Saudi Arabia', continent: 'Middle East' },
  { code: 'JED', name: 'King Abdulaziz International', city: 'Jeddah', country: 'Saudi Arabia', continent: 'Middle East' },
  
  // Africa
  { code: 'CAI', name: 'Cairo International', city: 'Cairo', country: 'Egypt', continent: 'Africa' },
  { code: 'JNB', name: 'O.R. Tambo International', city: 'Johannesburg', country: 'South Africa', continent: 'Africa' },
  { code: 'CPT', name: 'Cape Town International', city: 'Cape Town', country: 'South Africa', continent: 'Africa' },
  { code: 'LOS', name: 'Murtala Muhammed International', city: 'Lagos', country: 'Nigeria', continent: 'Africa' },
  { code: 'ADD', name: 'Addis Ababa Bole International', city: 'Addis Ababa', country: 'Ethiopia', continent: 'Africa' },
  { code: 'CMN', name: 'Mohammed V International', city: 'Casablanca', country: 'Morocco', continent: 'Africa' },
  
  // Oceania
  { code: 'SYD', name: 'Kingsford Smith', city: 'Sydney', country: 'Australia', continent: 'Oceania' },
  { code: 'MEL', name: 'Melbourne', city: 'Melbourne', country: 'Australia', continent: 'Oceania' },
  { code: 'BNE', name: 'Brisbane', city: 'Brisbane', country: 'Australia', continent: 'Oceania' },
  { code: 'PER', name: 'Perth', city: 'Perth', country: 'Australia', continent: 'Oceania' },
  { code: 'AKL', name: 'Auckland', city: 'Auckland', country: 'New Zealand', continent: 'Oceania' },
  { code: 'CHC', name: 'Christchurch', city: 'Christchurch', country: 'New Zealand', continent: 'Oceania' },
  
  // South America
  { code: 'GRU', name: 'São Paulo–Guarulhos International', city: 'São Paulo', country: 'Brazil', continent: 'South America' },
  { code: 'GIG', name: 'Rio de Janeiro–Galeão International', city: 'Rio de Janeiro', country: 'Brazil', continent: 'South America' },
  { code: 'EZE', name: 'Ezeiza International', city: 'Buenos Aires', country: 'Argentina', continent: 'South America' },
  { code: 'SCL', name: 'Santiago International', city: 'Santiago', country: 'Chile', continent: 'South America' },
  { code: 'LIM', name: 'Jorge Chávez International', city: 'Lima', country: 'Peru', continent: 'South America' },
  { code: 'BOG', name: 'El Dorado International', city: 'Bogotá', country: 'Colombia', continent: 'South America' },
  { code: 'CCS', name: 'Simón Bolívar International', city: 'Caracas', country: 'Venezuela', continent: 'South America' },
  
  // Additional European Cities
  { code: 'LIS', name: 'Lisbon Portela', city: 'Lisbon', country: 'Portugal', continent: 'Europe' },
  { code: 'ATH', name: 'Athens International', city: 'Athens', country: 'Greece', continent: 'Europe' },
  { code: 'IST', name: 'Istanbul', city: 'Istanbul', country: 'Turkey', continent: 'Europe' },
  { code: 'SVO', name: 'Sheremetyevo International', city: 'Moscow', country: 'Russia', continent: 'Europe' },
  { code: 'WAW', name: 'Warsaw Chopin', city: 'Warsaw', country: 'Poland', continent: 'Europe' },
  { code: 'PRG', name: 'Václav Havel Prague', city: 'Prague', country: 'Czech Republic', continent: 'Europe' },
  { code: 'BUD', name: 'Budapest Ferenc Liszt International', city: 'Budapest', country: 'Hungary', continent: 'Europe' },
  { code: 'OTP', name: 'Henri Coandă International', city: 'Bucharest', country: 'Romania', continent: 'Europe' },
  { code: 'SOF', name: 'Sofia', city: 'Sofia', country: 'Bulgaria', continent: 'Europe' },
  { code: 'ZAG', name: 'Zagreb', city: 'Zagreb', country: 'Croatia', continent: 'Europe' },
  
  // Additional Asian Cities
  { code: 'TPE', name: 'Taiwan Taoyuan International', city: 'Taipei', country: 'Taiwan', continent: 'Asia' },
  { code: 'PKX', name: 'Beijing Daxing International', city: 'Beijing', country: 'China', continent: 'Asia' },
  { code: 'CTU', name: 'Chengdu Shuangliu International', city: 'Chengdu', country: 'China', continent: 'Asia' },
  { code: 'XIY', name: 'Xi\'an Xianyang International', city: 'Xi\'an', country: 'China', continent: 'Asia' },
  { code: 'TSN', name: 'Tianjin Binhai International', city: 'Tianjin', country: 'China', continent: 'Asia' },
  { code: 'NKG', name: 'Nanjing Lukou International', city: 'Nanjing', country: 'China', continent: 'Asia' },
  
  // Caribbean
  { code: 'NAS', name: 'Lynden Pindling International', city: 'Nassau', country: 'Bahamas', continent: 'North America' },
  { code: 'BGI', name: 'Grantley Adams International', city: 'Bridgetown', country: 'Barbados', continent: 'North America' },
  { code: 'PUJ', name: 'Punta Cana International', city: 'Punta Cana', country: 'Dominican Republic', continent: 'North America' },
  { code: 'CUR', name: 'Hato International', city: 'Willemstad', country: 'Curaçao', continent: 'North America' },
  { code: 'AUA', name: 'Queen Beatrix International', city: 'Oranjestad', country: 'Aruba', continent: 'North America' }
];

export const searchAirports = (query: string): Airport[] => {
  if (!query || query.length < 2) return [];
  
  const searchTerm = query.toLowerCase();
  
  return AIRPORTS.filter(airport => 
    airport.code.toLowerCase().includes(searchTerm) ||
    airport.name.toLowerCase().includes(searchTerm) ||
    airport.city.toLowerCase().includes(searchTerm) ||
    airport.country.toLowerCase().includes(searchTerm)
  ).slice(0, 10);
};

export const getAirportByCode = (code: string): Airport | undefined => {
  return AIRPORTS.find(airport => airport.code === code);
};
