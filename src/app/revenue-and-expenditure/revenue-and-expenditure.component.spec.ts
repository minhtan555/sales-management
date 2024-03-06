import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAndExpenditureComponent } from './revenue-and-expenditure.component';

describe('RevenueAndExpenditureComponent', () => {
  let component: RevenueAndExpenditureComponent;
  let fixture: ComponentFixture<RevenueAndExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueAndExpenditureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueAndExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
