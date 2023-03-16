import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-plane',
  templateUrl: './icon-plane.component.svg',
  styleUrls: ['./icon-plane.component.scss']
})
export class IconPlaneComponent {
  @Input() highlighted: boolean = false;
}
