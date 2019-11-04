import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryregComponent } from './deliveryreg.component';

describe('DeliveryregComponent', () => {
  let component: DeliveryregComponent;
  let fixture: ComponentFixture<DeliveryregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
