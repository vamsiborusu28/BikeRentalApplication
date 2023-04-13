import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUpdatepasswordComponent } from './customer-updatepassword.component';

describe('CustomerUpdatepasswordComponent', () => {
  let component: CustomerUpdatepasswordComponent;
  let fixture: ComponentFixture<CustomerUpdatepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerUpdatepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUpdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
