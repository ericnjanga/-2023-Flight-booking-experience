import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelNavigationComponent } from './level-navigation.component';

describe('LevelNavigationComponent', () => {
  let component: LevelNavigationComponent;
  let fixture: ComponentFixture<LevelNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
