import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  product: Product = { id: 0, name: '', price: 0 };

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      const ultimoId = data[data.length - 1]!.id;
      
      this.product.id = +ultimoId + 1;

      console.log(this.product);
      

      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/']);
      });
      
    });
  }
}
