import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLaunchInBiggerComponent } from './one-launch-in-bigger.component';

describe('OneLaunchInBiggerComponent', () => {
  let component: OneLaunchInBiggerComponent;
  let fixture: ComponentFixture<OneLaunchInBiggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLaunchInBiggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLaunchInBiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
