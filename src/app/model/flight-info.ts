
export interface FlightInfo {
  itineraryName?: string;
  flightNumber?: string;
  departureCity?: string;
  departureDate?: Date;
  departureTime?: string;
  arrivalCity?: string;
  arrivalDate?: Date;
  arrivalTime?: string;
  stops?: number;
  flightDuration?: string;
  order?: string;
  flight_type?: string; // LOCAL | INTERNATIONAL
  economy?: boolean;
  business?: boolean;
  fareTotalPrice?: number;
}
