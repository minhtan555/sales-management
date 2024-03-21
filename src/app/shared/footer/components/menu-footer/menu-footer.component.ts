import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./menu-footer.component.scss']
})
export class MenuFooterComponent {

}
