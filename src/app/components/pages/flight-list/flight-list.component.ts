import { Component } from '@angular/core';
import { Flight } from 'src/app/interfaces/flight';
import { FlightService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})

export class FlightListComponent {
  flights: Flight[] = [];

  getFlights(): void {
    this.flightService.getFlights().subscribe(flights => this.flights = flights);
  }

  ngOnInit(): void {
    this.getFlights();
  }
  
  constructor(private flightService : FlightService) {
  }
}
