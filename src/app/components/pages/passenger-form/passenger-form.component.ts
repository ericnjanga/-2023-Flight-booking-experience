import { Component } from '@angular/core';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent {

  maxAdultDate: Date = new Date(new Date().getFullYear() - 12, new Date().getMonth(), new Date().getDate());
  maxChildDate: Date = new Date(new Date().getFullYear() - 2, new Date().getMonth(), new Date().getDate());
}
