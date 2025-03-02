import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../post';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  productInfo: Product | undefined;
  constructor(
    private productsService: ProductsService,
    private _route: ActivatedRoute,
    private loader: LoaderService
  ) {}
  ngOnInit(): void {
    console.log(this._route.params); // الداتا الي قلتله هترجعلك في ال path in routing
    this.productId = this._route.snapshot.params['id'];
    console.log(this.productId);
    this.getProduct();
  }
  getProduct() {
    this.productsService.getProduct(this.productId).subscribe({
      next: (data) => {
        console.log(data);
        this.productInfo = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
