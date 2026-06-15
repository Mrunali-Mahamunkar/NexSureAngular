import { TestBed } from '@angular/core/testing';

import { PremiumScheduleService } from './premium-schedule.service';

describe('PremiumScheduleService', () => {
  let service: PremiumScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiumScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
