import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';
import { Product } from '../post';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  cancleRequest!: Subscription;
  Products: Product[] = [];
  searchTerm: string = '';
  numCart: number = 0;
  showAdd: boolean = true;
  amount: number = 0;
  amontLocal: number[] = [];
  constructor(private _Products: ProductsService) {
    // console.log(_Products.getProducts);
  }

  // check search
  consolS(back: string) {
    console.log(this.searchTerm);
    console.log(back);
    this.lifeNumCart();
  }

  onSearchChange(value: string) {
    console.log('Search Term:', value);
  }

  getProducts() {
    this._Products.getProducts().subscribe({
      next: (data) => {
        console.log(data);
        if (data?.length) {
          this.Products = data;
        }
      },
      error: (error) => console.log(error),
      complete: () => console.log('completed'),
    });
    this.lifeNumCart();
  }
  ngOnInit(): void {
    console.log('Rejester Appeared');
    this.getProducts();
    this.lifeNumCart();
  }
  getProduct(id: string) {
    // for testing
    console.log(id);
  }
  getToCart(productId: number) {
    let exist = this._Products.idNumbers.find((item) => +productId == item);
    if (exist) {
      alert('you already added this product');
    } else {
      this._Products.idNumbers.push(+productId);
    }

    this.numCart = this._Products.idNumbers.length;
    // const click = inject(NavbarComponent);
    // click.cart();
  }
  // translate() {
  //   this.showAdd = true;
  // }
  lifeNumCart() {
    this.numCart = this._Products.idNumbers.length;
  }
  amountFunc(amount: number) {
    this.amontLocal.push(amount);
    // console.log(this.amontLocal, '#######', amount);
    localStorage.setItem('amount', JSON.stringify(this.amontLocal));
    //
    this._Products.amountServ.push(amount);
  }
}
