import { TestBed } from '@angular/core/testing';

import { CustomerPremiumScheduleService } from './customer-premium-schedule.service';

describe('CustomerPremiumScheduleService', () => {
  let service: CustomerPremiumScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerPremiumScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
