import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProfitComponent } from './sales-profit.component';

describe('SalesProfitComponent', () => {
  let component: SalesProfitComponent;
  let fixture: ComponentFixture<SalesProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesProfitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
