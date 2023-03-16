import { Component } from '@angular/core';
import { Flight } from 'src/app/interfaces/flight';
import { FlightService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
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
