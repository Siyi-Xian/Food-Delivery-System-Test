import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantviewdetailsComponent } from './restaurantviewdetails.component';

describe('RestaurantviewdetailsComponent', () => {
  let component: RestaurantviewdetailsComponent;
  let fixture: ComponentFixture<RestaurantviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
