import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SearchComponent } from './components/pages/search/search.component';
import { FlightDetailsComponent } from './components/pages/flight-details/flight-details.component';
import { TripReviewComponent } from './components/pages/trip-review/trip-review.component';
import { PassengerFormComponent } from './components/pages/passenger-form/passenger-form.component';
import { SuccessComponent } from './components/pages/success/success.component';
import { FlightListComponent } from './components/pages/flight-list/flight-list.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent },
  { path: 'flight-list', component: FlightListComponent },
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'travelers-form', component: PassengerFormComponent },
  { path: 'trip-review', component: TripReviewComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
