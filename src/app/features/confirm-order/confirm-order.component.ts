import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent {

}
