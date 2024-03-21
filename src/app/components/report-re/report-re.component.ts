import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuFooterComponent } from 'src/app/shared/footer/components/menu-footer/menu-footer.component';
import { MenuReportComponent } from '../menu-report/menu-report.component';
import { CalenderComponent } from 'src/app/shared/calender/calender.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-report-re',
  templateUrl: './report-re.component.html',
  standalone: true,
  imports: [CommonModule, MenuReportComponent,CalenderComponent,RouterModule],
  styleUrls: ['./report-re.component.scss']
})
export class ReportReComponent {

}
