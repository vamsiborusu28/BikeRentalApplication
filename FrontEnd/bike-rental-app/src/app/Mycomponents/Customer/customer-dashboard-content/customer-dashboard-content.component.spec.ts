import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashboardContentComponent } from './customer-dashboard-content.component';

describe('CustomerDashboardContentComponent', () => {
  let component: CustomerDashboardContentComponent;
  let fixture: ComponentFixture<CustomerDashboardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDashboardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
