import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureCityToArrivalCityComponent } from './departure-city-to-arrival-city.component';

describe('DepartureCityToArrivalCityComponent', () => {
  let component: DepartureCityToArrivalCityComponent;
  let fixture: ComponentFixture<DepartureCityToArrivalCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartureCityToArrivalCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartureCityToArrivalCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
