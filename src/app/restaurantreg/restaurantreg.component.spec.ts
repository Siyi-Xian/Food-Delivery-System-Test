import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantregComponent } from './restaurantreg.component';

describe('RestaurantregComponent', () => {
  let component: RestaurantregComponent;
  let fixture: ComponentFixture<RestaurantregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
