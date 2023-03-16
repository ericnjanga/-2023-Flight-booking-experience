import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-duration',
  templateUrl: './flight-duration.component.svg',
  styleUrls: ['./flight-duration.component.scss']
})
export class FlightDurationComponent {
  @Input() isHighlighted: boolean = false;

}
