import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Observable, map, shareReplay, startWith } from 'rxjs';




export interface FlightSearchRequest {
  adultCount?: number;
  childCount?: number;
  infantCount?: number;
  totalPassengerCount?: number;
  seatClass?: string;
  originCity?: string;
  destinationCity?: string;
  departureDate?: Date;
  returnDate?: Date;
  tripType?: string;
}

export interface CityAirport {
  name: string;
  airportCode: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() date1: Date = new Date('2000-01-01');
  @Input() date2: Date = new Date('2000-01-01');
  @Input() date3: Date = new Date('2000-01-01');

  @ViewChild('originCities', { static: true }) originCities!: MatSelect;
  @ViewChild('destinationCities', { static: true })
  destinationCities!: MatSelect;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  flightSearchForm = new FormGroup({
    adultCount: new FormControl(1),
    childCount: new FormControl(0),
    infantCount: new FormControl(0),
    totalPassengerCount: new FormControl(0),
    seatClass: new FormControl('Economy'),
    originCity: new FormControl(null, Validators.required),
    destinationCity: new FormControl(null, Validators.required),
    departureDate: new FormControl(null, Validators.required),
    returnDate: new FormControl(null, Validators.required),
    tripType: new FormControl('return', Validators.required)
  })

  

  today = new Date();
  originCities$: Observable<CityAirport[]> | null = null;
  destinationCities$: Observable<CityAirport[]> | null = null;
  isHandset = false;
  isOneWay = false;
  originFilter = new FormControl('');
  destinationFilter = new FormControl('');

  airportCities: CityAirport[] = [
    { name: 'Bafoussam', airportCode: 'BFX' },
    { name: 'Douala', airportCode: 'DLA' },
    { name: 'Garoua', airportCode: 'GOU' },
    // { name: 'Libreville', airportCode: 'LBV' },
    { name: 'Maroua', airportCode: 'MVR' },
    { name: 'Ngaoundéré', airportCode: 'NGE' },
    { name: 'Yaoundé', airportCode: 'NSI' },
  ];

  bookingType = new FormControl('return');

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    // private flightService: FlightService
  ) {
    this.isHandset$.subscribe((isHandset) => {
      this.isHandset = isHandset;
      console.log('is handset = ', this.isHandset);
    });
  }

  ngOnInit(): void {
    this.flightSearchForm.get('tripType')!.valueChanges.subscribe(value => {
      console.log('value = ', value)
      value === 'oneWay' ? this.flightSearchForm.get('returnDate')?.disable({ emitEvent: true }) : this.flightSearchForm.get('returnDate')?.enable({ emitEvent: true });
    })

    this.originCities$ = this.originFilter.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    this.destinationCities$ = this.destinationFilter.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    this.updateTotalPassengerCount();

    this.restorePreviousSearchValues();
  }

  private _filter(value: string): CityAirport[] {
    const filterValue = value.toLowerCase();

    return this.airportCities.filter(item => item.name.toLowerCase().includes(filterValue));
  }

  handleAdultCountChange(isIncrement: boolean) {
    const adultCount = this.flightSearchForm.get('adultCount')!.value!;
    if (isIncrement) {
      this.flightSearchForm.get('adultCount')!.setValue(adultCount + 1);
    } else {
      if (adultCount > 0) {
        this.flightSearchForm.get('adultCount')?.setValue(adultCount - 1);
      }
    }
    this.updateTotalPassengerCount();
  }

  handleChildCountChange(isIncrement: boolean) {
    const childCount = this.flightSearchForm.get('childCount')!.value!

    if (isIncrement) {
      this.flightSearchForm.get('childCount')!.setValue(childCount + 1);
    } else {
      if (childCount > 0) {
        this.flightSearchForm.get('childCount')?.setValue(childCount - 1);
      }
    }

    this.updateTotalPassengerCount();
  }

  handleInfantCountChange(isIncrement: boolean) {
    const infantCount = this.flightSearchForm.get('infantCount')!.value!

    if (isIncrement) {
      this.flightSearchForm.get('infantCount')!.setValue(infantCount + 1);
    } else {
      if (infantCount > 0) {
        this.flightSearchForm.get('infantCount')?.setValue(infantCount - 1);
      }
    }
    this.updateTotalPassengerCount();
  }

  updateTotalPassengerCount() {
    this.flightSearchForm.get('totalPassengerCount')!.setValue(
      this.flightSearchForm.get('adultCount')!.value! + this.flightSearchForm.get('childCount')!.value! + this.flightSearchForm.get('infantCount')!.value!
    )
  }

  handleCitySelection(event: MatSelectChange, context: string) {
    if (context === 'origin' && event.value === this.destinationCities.value) {
      this.destinationFilter.setValue('');
      this.destinationCities.value = '';
    }

    if (context === 'destination' && event.value === this.originCities.value) {
      this.originFilter.setValue('');
      this.originCities.value = '';
    }
  }

  showSearchResults() {
    sessionStorage.setItem('search-criteria', JSON.stringify(this.flightSearchForm.value));
    // this.flightService.setSearchRequest(this.flightSearchForm.value as FlightSearchRequest);
    this.router.navigateByUrl('flight/results');
  }

  restorePreviousSearchValues() {
    const request = sessionStorage.getItem('search-criteria')
    if (request) {
      console.log(request);
      const parsedRequest = JSON.parse(request)
      this.flightSearchForm.setValue(parsedRequest, { emitEvent: true });
    }
  }
}
