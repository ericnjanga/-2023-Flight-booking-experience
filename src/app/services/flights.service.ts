import { Injectable } from '@angular/core';
import { Flight } from '../interfaces/flight';
import { FLIGHTS } from '../mocks/mock-flights';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  getFlights(): Observable<Flight[]> {
    const flights = of(FLIGHTS);
    return flights;
  }

  constructor() { }
}
