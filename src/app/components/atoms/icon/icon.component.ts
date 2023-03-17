import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.svg',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() name: string = '';
  
  // Inserted in the UI library
  isMap: boolean = false;
  isDate: boolean = false; 
  isUser: boolean = false; 
  isBriefcase: boolean = false;
  isArrowRight: boolean = false;

  


  ngOnInit() {
    /** Will display help icon if no value is received */
    switch (this.name) {

      case "map":
        this.isMap = true;
        break;

      case "date":
        this.isDate = true;
        break;

      case "user":
        this.isUser = true;
        break;

      case "briefcase":
        this.isBriefcase = true;
        break;   

      case "arrow-right":
        this.isArrowRight = true;
        break;  
        
      default:
        this.isMap = true;
    }
  }
}
