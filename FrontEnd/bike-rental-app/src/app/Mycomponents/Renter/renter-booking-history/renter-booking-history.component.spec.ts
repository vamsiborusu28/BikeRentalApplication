import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterBookingHistoryComponent } from './renter-booking-history.component';

describe('RenterBookingHistoryComponent', () => {
  let component: RenterBookingHistoryComponent;
  let fixture: ComponentFixture<RenterBookingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterBookingHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
