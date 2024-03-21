import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalenderComponent } from 'src/app/shared/calender/calender.component';

@Component({
  selector: 'app-sales-profit',
  templateUrl: './sales-profit.component.html',
  standalone: true,
  imports: [CommonModule, CalenderComponent,RouterModule],
  styleUrls: ['./sales-profit.component.scss']
})
export class SalesProfitComponent {

}
