import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupalertComponent } from './signupalert.component';

describe('SignupalertComponent', () => {
  let component: SignupalertComponent;
  let fixture: ComponentFixture<SignupalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
