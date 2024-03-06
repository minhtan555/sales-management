import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWarehouseComponent } from './report-warehouse.component';

describe('ReportWarehouseComponent', () => {
  let component: ReportWarehouseComponent;
  let fixture: ComponentFixture<ReportWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
