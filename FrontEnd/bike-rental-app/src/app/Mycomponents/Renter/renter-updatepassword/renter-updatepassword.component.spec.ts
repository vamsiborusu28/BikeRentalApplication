import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterUpdatepasswordComponent } from './renter-updatepassword.component';

describe('RenterUpdatepasswordComponent', () => {
  let component: RenterUpdatepasswordComponent;
  let fixture: ComponentFixture<RenterUpdatepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterUpdatepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterUpdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
