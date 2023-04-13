import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDataComponent } from './bike-data.component';

describe('BikeDataComponent', () => {
  let component: BikeDataComponent;
  let fixture: ComponentFixture<BikeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
