import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-departure-airport-to-arrival-airport',
  templateUrl: './departure-airport-to-arrival-airport.component.html',
  styleUrls: ['./departure-airport-to-arrival-airport.component.scss']
})
export class DepartureAirportToArrivalAirportComponent {
  @Input() isHighlighted: boolean = false;
}
