import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-departure-city-to-arrival-city',
  templateUrl: './departure-city-to-arrival-city.component.html',
  styleUrls: ['./departure-city-to-arrival-city.component.scss']
})
export class DepartureCityToArrivalCityComponent {
  @Input() isLarge: boolean = false;
  @Input() isHighlighted: boolean = false;
}
