import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPremiumSchedule } from './customer-premium-schedule';

describe('CustomerPremiumSchedule', () => {
  let component: CustomerPremiumSchedule;
  let fixture: ComponentFixture<CustomerPremiumSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPremiumSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPremiumSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
