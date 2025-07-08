
import React, { useState } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Airport, AIRPORTS } from '../services/airportDatabase';

interface AirportSearchProps {
  value: Airport | null;
  onChange: (airport: Airport | null) => void;
  placeholder: string;
}

const AirportSearch: React.FC<AirportSearchProps> = ({ value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? `${value.city} (${value.code}) - ${value.name}`
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search airports..." />
          <CommandEmpty>No airport found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {AIRPORTS.map((airport) => (
                <CommandItem
                  key={airport.code}
                  value={`${airport.city} ${airport.code} ${airport.name}`}
                  onSelect={() => {
                    onChange(airport);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value?.code === airport.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div>
                    <div className="font-medium">{airport.city} ({airport.code})</div>
                    <div className="text-sm text-gray-500">{airport.name}</div>
                    <div className="text-xs text-gray-400">{airport.country}</div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default AirportSearch;
