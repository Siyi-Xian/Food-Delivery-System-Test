import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantviewmenuComponent } from './restaurantviewmenu.component';

describe('RestaurantviewmenuComponent', () => {
  let component: RestaurantviewmenuComponent;
  let fixture: ComponentFixture<RestaurantviewmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantviewmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantviewmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
