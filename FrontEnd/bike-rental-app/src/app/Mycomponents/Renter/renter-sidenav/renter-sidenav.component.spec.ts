import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterSidenavComponent } from './renter-sidenav.component';

describe('RenterSidenavComponent', () => {
  let component: RenterSidenavComponent;
  let fixture: ComponentFixture<RenterSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
