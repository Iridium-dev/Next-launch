import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLaunchComponent } from './one-launch.component';

describe('OneLaunchComponent', () => {
  let component: OneLaunchComponent;
  let fixture: ComponentFixture<OneLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
