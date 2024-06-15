import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  deleteProduct(id: number) {
    this.router.navigate(['/product-delete', id])
  }

  editProduct(id: number) {
    this.router.navigate(['/product-edit', id])
  }
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
