import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantcurrentordersComponent } from './restaurantcurrentorders.component';

describe('RestaurantcurrentordersComponent', () => {
  let component: RestaurantcurrentordersComponent;
  let fixture: ComponentFixture<RestaurantcurrentordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantcurrentordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantcurrentordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
