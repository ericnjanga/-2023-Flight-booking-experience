import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinceAndAirlineComponent } from './prince-and-airline.component';

describe('PrinceAndAirlineComponent', () => {
  let component: PrinceAndAirlineComponent;
  let fixture: ComponentFixture<PrinceAndAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinceAndAirlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinceAndAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
