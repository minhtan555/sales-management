import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProduct } from 'src/app/features/products/components/product-list/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() product!: IProduct;
}
