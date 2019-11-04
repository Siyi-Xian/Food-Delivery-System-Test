import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryloginComponent } from './deliverylogin.component';

describe('DeliveryloginComponent', () => {
  let component: DeliveryloginComponent;
  let fixture: ComponentFixture<DeliveryloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
