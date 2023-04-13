import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterDashboardContentComponent } from './renter-dashboard-content.component';

describe('RenterDashboardContentComponent', () => {
  let component: RenterDashboardContentComponent;
  let fixture: ComponentFixture<RenterDashboardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterDashboardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterDashboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
