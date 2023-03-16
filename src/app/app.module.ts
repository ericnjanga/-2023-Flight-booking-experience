import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SearchComponent } from './components/pages/search/search.component';
import LocaleCm from '@angular/common/locales/fr-CM'
import { registerLocaleData } from '@angular/common';


// Addons ...
// import SimpleSvgPlaceholder from '@cloudfour/simple-svg-placeholder';

// Pages ...
import { HomeComponent } from './components/pages/home/home.component';
import { FlightDetailsComponent } from './components/pages/flight-details/flight-details.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { SiteMapNavigatorComponent } from './components/atoms/site-map-navigator/site-map-navigator.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SuccessComponent } from './components/pages/success/success.component';
import { FlightListComponent } from './components/pages/flight-list/flight-list.component';
import { PassengerFormComponent } from './components/pages/passenger-form/passenger-form.component';
import { AdditionalFlightInfoComponent } from './components/pages/additional-flight-info/additional-flight-info.component';
import { TripReviewComponent } from './components/pages/trip-review/trip-review.component';
import { BookingConfirmationComponent } from './components/pages/booking-confirmation/booking-confirmation.component';

// Atoms ...
import { DevMenuComponent } from './components/atoms/dev-menu/dev-menu.component';
import { FlightCardComponent } from './components/atoms/flight-card/flight-card.component';
import { ResultCardComponent } from './components/atoms/result-card/result-card.component';
import { ImgCloudsComponent } from './components/atoms/img-clouds/img-clouds.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PriceComponent } from './components/atoms/price/price.component';
import { ImgAirlineComponent } from './components/atoms/img-airline/img-airline.component';
import { LevelNavigationComponent } from './components/atoms/level-navigation/level-navigation.component';
import { FlightDurationComponent } from './components/atoms/flight-duration/flight-duration.component';
import { FlightReviewCardComponent } from './components/molecules/flight-review-card/flight-review-card.component';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { TimeComponent } from './components/atoms/time/time.component';
import { DepartureCityToArrivalCityComponent } from './components/atoms/departure-city-to-arrival-city/departure-city-to-arrival-city.component';
import { AppBarComponent } from './components/molecules/app-bar/app-bar.component';
import { IconPlaneComponent } from './components/atoms/icon-plane/icon-plane.component';
import { PrinceAndAirlineComponent } from './components/molecules/prince-and-airline/prince-and-airline.component';
import { DepartureAirportToArrivalAirportComponent } from './components/molecules/departure-airport-to-arrival-airport/departure-airport-to-arrival-airport.component';
import { FlightDateComponent } from './components/atoms/flight-date/flight-date.component';
import { ButtonComponent } from './components/atoms/button/button.component';

registerLocaleData(LocaleCm);

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultCardComponent,
    FlightDetailsComponent,
    AdditionalFlightInfoComponent,
    PassengerFormComponent,
    TripReviewComponent,
    BookingConfirmationComponent,
    HomeComponent,
    DevMenuComponent,
    PrivacyPolicyComponent,
    SiteMapNavigatorComponent,
    PageNotFoundComponent,
    AboutComponent,
    FlightCardComponent,
    SuccessComponent,
    FlightListComponent,
    ImgCloudsComponent,
    ContactComponent,
    PriceComponent,
    ImgAirlineComponent,
    LevelNavigationComponent,
    FlightDurationComponent,
    FlightReviewCardComponent,
    AlertComponent,
    TimeComponent,
    DepartureCityToArrivalCityComponent,
    AppBarComponent,
    IconPlaneComponent,
    PrinceAndAirlineComponent,
    DepartureAirportToArrivalAirportComponent,
    FlightDateComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'FCFA ' },
    { provide: LOCALE_ID, useValue: 'fr-CM' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
