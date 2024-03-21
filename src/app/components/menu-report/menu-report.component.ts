import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-report',
  templateUrl: './menu-report.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./menu-report.component.scss']
})
export class MenuReportComponent {

}
