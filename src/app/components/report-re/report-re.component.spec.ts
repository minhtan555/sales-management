import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReComponent } from './report-re.component';

describe('ReportReComponent', () => {
  let component: ReportReComponent;
  let fixture: ComponentFixture<ReportReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
