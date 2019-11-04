import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantstatsComponent } from './restaurantstats.component';

describe('RestaurantstatsComponent', () => {
  let component: RestaurantstatsComponent;
  let fixture: ComponentFixture<RestaurantstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
