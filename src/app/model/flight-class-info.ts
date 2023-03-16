export interface FlightClassInfo {
  [key:string]: ClassInfo;
}

export interface ClassInfo {
  closed: boolean;
  order: number;
  posting: string;
  reservation_booking_designator: string;
  to_required: boolean;
  waitlist_enable: boolean;
}
