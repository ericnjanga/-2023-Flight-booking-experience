import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFlightInfoComponent } from './additional-flight-info.component';

describe('AdditionalFlightInfoComponent', () => {
  let component: AdditionalFlightInfoComponent;
  let fixture: ComponentFixture<AdditionalFlightInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalFlightInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalFlightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
