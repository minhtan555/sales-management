import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuFooterComponent } from 'src/app/shared/footer/components/menu-footer/menu-footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule,MenuFooterComponent,RouterModule],
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent {
  constructor(private router: Router) { }

  goToOtherPage() {
    this.router.navigate(['/warehouse']); // Điều này sẽ chuyển hướng đến /other
  }
}
