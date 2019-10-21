import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantloginComponent } from './resturantlogin.component';

describe('ResturantloginComponent', () => {
  let component: ResturantloginComponent;
  let fixture: ComponentFixture<ResturantloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
