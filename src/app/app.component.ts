import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = '';
  pageSubtitle = '';
  title = 'tcholli';
  appBar = {
    leftIcon : '',
    rightIcon: '',
  };

  constructor(private router: Router, private route: ActivatedRoute) {
    /**
     * get the active route name in Angular by subscribing to the 
     * ActivatedRoute service and using the url property to access the active route.
     */
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.route.root.firstChild && this.route.root.firstChild.snapshot && this.route.root.firstChild.snapshot.routeConfig && this.route.root.firstChild.snapshot.routeConfig.path) {
          this.pageTitle = this.route.root.firstChild.snapshot.routeConfig.path;

          /**
           * Hardcoding page title and subtitle
           * (API placeholder)
           */
          switch (this.pageTitle) {
            case 'home':
              this.pageTitle = '';
              this.pageSubtitle = '';
              this.appBar.leftIcon = 'home';
              this.appBar.rightIcon = 'info';
            break;

            case 'search':
              this.pageTitle = 'Search';
              this.pageSubtitle = '';
              this.appBar.leftIcon = 'close';
              this.appBar.rightIcon = '';
            break;

            case 'flight-details':
              this.pageTitle = 'Douala to Yaoundé';
              this.pageSubtitle = 'August 27, 2023 / 3 travelers';
              this.appBar.leftIcon = 'keyboard_backspace';
              this.appBar.rightIcon = '';
            break;

            case 'about':
            case 'privacy-policy':
              this.appBar.leftIcon = 'keyboard_backspace';
              this.appBar.rightIcon = '';
            break;

            case 'trip-review':
              this.pageTitle = 'Douala to Yaoundé';
              this.pageSubtitle = 'Trip review';
              this.appBar.leftIcon = 'keyboard_backspace';
              this.appBar.rightIcon = '';
            break;

            case 'trip-review':
              this.pageTitle = 'Douala to Yaoundé';
              this.pageSubtitle = 'Travelers Information';
              this.appBar.leftIcon = 'close';
              this.appBar.rightIcon = '';
            break;
            
            default:
              this.pageSubtitle = '';
              this.appBar.leftIcon = 'home';
              this.appBar.rightIcon = '';
          }
          // if (this.pageTitle === 'flight-details') {
          //   this.pageTitle = 'Douala to Yaoundé';
          //   this.pageSubtitle = 'August 27, 2023 / 3 travelers';
          // } 
          // else if (this.pageTitle === 'trip-review') {
          //   this.pageTitle = 'Douala to Yaoundé';
          //   this.pageSubtitle = 'Trip review';
          // } 
          // else if (this.pageTitle === 'travelers-form') {
          //   this.pageTitle = 'Douala to Yaoundé';
          //   this.pageSubtitle = 'Travelers Information';
          // } else {
          //   this.pageSubtitle = '';
          // }
        }
      });

  }
}