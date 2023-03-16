import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureAirportToArrivalAirportComponent } from './departure-airport-to-arrival-airport.component';

describe('DepartureAirportToArrivalAirportComponent', () => {
  let component: DepartureAirportToArrivalAirportComponent;
  let fixture: ComponentFixture<DepartureAirportToArrivalAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartureAirportToArrivalAirportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartureAirportToArrivalAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
