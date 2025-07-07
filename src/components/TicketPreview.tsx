
import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FlightData } from '../pages/Index';
import { Download, Plane, Calendar, Clock, MapPin, User, CreditCard } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface TicketPreviewProps {
  flightData: FlightData;
}

const TicketPreview: React.FC<TicketPreviewProps> = ({ flightData }) => {
  const ticketRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`flight-ticket-${flightData.bookingRef}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Button onClick={downloadPDF} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
          <Download className="h-5 w-5 mr-2" />
          Download PDF
        </Button>
      </div>

      <div ref={ticketRef} className="bg-white p-8 mx-auto" style={{ width: '800px' }}>
        {/* Main Ticket */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Plane className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{flightData.airline}</h2>
                  <p className="text-blue-100">Electronic Ticket</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Booking Reference</p>
                <p className="text-2xl font-bold">{flightData.bookingRef}</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Passenger Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Passenger</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-lg">{flightData.passengerName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Class</p>
                  <p className="font-semibold">{flightData.class}</p>
                </div>
              </div>

              {/* Flight Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Plane className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Flight</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Flight Number</p>
                  <p className="font-semibold text-lg">{flightData.flightNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Seat</p>
                  <p className="font-semibold">{flightData.seat}</p>
                </div>
              </div>

              {/* Boarding Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Boarding</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gate</p>
                  <p className="font-semibold text-lg">{flightData.gate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Terminal</p>
                  <p className="font-semibold">{flightData.terminal}</p>
                </div>
              </div>
            </div>

            {/* Route Information */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-1">From</p>
                  <p className="font-bold text-xl text-gray-900">{flightData.from}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Departure</p>
                    <p className="font-semibold">{formatDate(flightData.departureDate)}</p>
                    <p className="font-semibold text-lg">{flightData.departureTime}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 mx-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <Plane className="h-6 w-6 text-blue-600 transform rotate-90" />
                    <div className="w-12 h-px bg-gray-300"></div>
                  </div>
                </div>

                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-1">To</p>
                  <p className="font-bold text-xl text-gray-900">{flightData.to}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Arrival</p>
                    <p className="font-semibold">{formatDate(flightData.departureDate)}</p>
                    <p className="font-semibold text-lg">{flightData.arrivalTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <p>Thank you for choosing {flightData.airline}</p>
              <p>Boarding closes 30 minutes before departure</p>
            </div>
          </div>
        </div>

        {/* Boarding Pass Stub */}
        <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Boarding Pass</p>
              <p className="font-semibold">{flightData.passengerName}</p>
              <p className="text-sm">{flightData.flightNumber} • Seat {flightData.seat}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Gate</p>
              <p className="font-bold text-2xl">{flightData.gate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Departure</p>
              <p className="font-semibold">{flightData.departureTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
