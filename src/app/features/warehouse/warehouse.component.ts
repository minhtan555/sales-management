import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from '../products/components/product-list/product-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  standalone: true,
  imports: [CommonModule, ProductListComponent,RouterModule],
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  products: any[];
  filter: string = '';
  quantity: number = 0;
  constructor() {
      this.products = [
      {
        id: 1,
        description:
          "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
        name: "Cyclops",
        imageName: "head-big-eye.png",
        category: "Tỏi",
        price: 1220.5,
        quantity: 50,
      },
      {
        id: 17,
        description: "A spring base - great for reaching high places.",
        name: "Spring",
        imageName: "base-spring.png",
        category: "Bases",
        price: 1190.5,
        quantity: 150,
      },
      {
        id: 6,
        description:
          "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
        name: "Arm",
        imageName: "arm-articulated-claw.png",
        category: "Bánh mì",
        price: 275,
        quantity: 100,
      },
      
    ];
  }
  getAllProducts() {
    return this.products;
  }
  getFilteredProducts() {
    return this.filter === '' 
    ? this.products
    : this.products.filter((product: any) => product.category === this.filter);
  }
  getQuantity() {
    for(let i = 0; i < this.products.length; i++) {
      this.quantity += this.products[i].quantity;
    }
    return this.quantity;
  }
}
