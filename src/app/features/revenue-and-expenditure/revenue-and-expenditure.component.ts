import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuFooterComponent } from 'src/app/shared/footer/components/menu-footer/menu-footer.component';

@Component({
  selector: 'app-revenue-and-expenditure',
  templateUrl: './revenue-and-expenditure.component.html',
  standalone: true,
  imports: [CommonModule, MenuFooterComponent,RouterModule],
  styleUrls: ['./revenue-and-expenditure.component.scss']
})
export class RevenueAndExpenditureComponent {

}
