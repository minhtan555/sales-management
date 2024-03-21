import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {

}
