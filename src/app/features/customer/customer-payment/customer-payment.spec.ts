import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPayment } from './customer-payment';

describe('CustomerPayment', () => {
  let component: CustomerPayment;
  let fixture: ComponentFixture<CustomerPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
