import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prince-and-airline',
  templateUrl: './prince-and-airline.component.html',
  styleUrls: ['./prince-and-airline.component.scss']
})
export class PrinceAndAirlineComponent {
  @Input() price: number = 0;
}
