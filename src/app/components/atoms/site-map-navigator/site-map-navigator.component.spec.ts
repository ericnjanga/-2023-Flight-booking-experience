import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMapNavigatorComponent } from './site-map-navigator.component';

describe('SiteMapNavigatorComponent', () => {
  let component: SiteMapNavigatorComponent;
  let fixture: ComponentFixture<SiteMapNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMapNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMapNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
