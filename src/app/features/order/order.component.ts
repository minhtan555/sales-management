import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuFooterComponent } from 'src/app/shared/footer/components/menu-footer/menu-footer.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  standalone: true,
  imports: [CommonModule, MenuFooterComponent,RouterModule],
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

}
