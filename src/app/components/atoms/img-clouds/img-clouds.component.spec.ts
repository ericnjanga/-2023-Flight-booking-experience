import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCloudsComponent } from './img-clouds.component';

describe('ImgCloudsComponent', () => {
  let component: ImgCloudsComponent;
  let fixture: ComponentFixture<ImgCloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCloudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
