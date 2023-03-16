import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() iconLeft: string = '';
  @Input() iconRight: string = '';
}