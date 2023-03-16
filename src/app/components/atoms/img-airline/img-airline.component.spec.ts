import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAirlineComponent } from './img-airline.component';

describe('ImgAirlineComponent', () => {
  let component: ImgAirlineComponent;
  let fixture: ComponentFixture<ImgAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgAirlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
