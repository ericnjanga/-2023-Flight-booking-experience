import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlaneComponent } from './icon-plane.component';

describe('IconPlaneComponent', () => {
  let component: IconPlaneComponent;
  let fixture: ComponentFixture<IconPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPlaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
