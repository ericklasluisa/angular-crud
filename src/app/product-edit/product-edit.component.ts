import { Component, Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  providers: [ProductService],
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  product: Product = { id: '', name: '', price: 0 };

  constructor(
    private productService: ProductService,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(id).subscribe((data: Product) => {
      this.product = data;
    });
    console.log(this.product);
    
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
