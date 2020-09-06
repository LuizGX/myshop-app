import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbProductDetailsComponent } from './dashb-product-details.component';

describe('DashbProductDetailsComponent', () => {
  let component: DashbProductDetailsComponent;
  let fixture: ComponentFixture<DashbProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
