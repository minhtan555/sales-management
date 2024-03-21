import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-report-warehouse',
  templateUrl: './report-warehouse.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./report-warehouse.component.scss']
})
export class ReportWarehouseComponent {

}
