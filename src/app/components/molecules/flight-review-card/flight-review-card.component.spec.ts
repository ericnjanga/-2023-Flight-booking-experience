import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReviewCardComponent } from './flight-review-card.component';

describe('FlightReviewCardComponent', () => {
  let component: FlightReviewCardComponent;
  let fixture: ComponentFixture<FlightReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightReviewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
