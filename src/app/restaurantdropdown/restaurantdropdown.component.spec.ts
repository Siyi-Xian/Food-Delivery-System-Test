import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantdropdownComponent } from './restaurantdropdown.component';

describe('RestaurantdropdownComponent', () => {
  let component: RestaurantdropdownComponent;
  let fixture: ComponentFixture<RestaurantdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
