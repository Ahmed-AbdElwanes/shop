import {
  Component,
  OnInit,
  Input,
  input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../loader.service';
import { Product } from '../post';
import { NavbarComponent } from '../navbar/navbar.component';
import { stringify } from 'node:querystring';

// import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../products.service';
// import { ActivatedRoute } from '@angular/router';
// import { Product } from '../post';
// import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-chiled',
  standalone: false,
  templateUrl: './chiled.component.html',
  styleUrl: './chiled.component.css',
})
export class ChiledComponent {
  // vars
  productId: string = '';
  productInfo: Product | undefined;
  carts: Product[] = [];
  Products: Product[] = [];
  countCarts: number = 0;
  idNumbers2: number[] = [];
  productRepeat: any[] = [];
  productRepeat2: any[] = [];
  countOroduct: number = 0;

  //
  constructor(
    private productsService: ProductsService,
    private _route: ActivatedRoute,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    console.log(this.productId);
    this.getcarts();
    console.log(this.productsService.idNumbers);
    this.idNumbers2 = this.productsService.idNumbers;
  }

  getcarts() {
    this.productsService.getcarts().subscribe({
      next: (data) => {
        console.log(data[1]);
        for (let i = 0; i < this.idNumbers2.length; i++) {
          this.carts.push(data[this.idNumbers2[this.countCarts] - 1]);
          ++this.countCarts;
        }
        this.getAmount();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getAmount() {
    const amountData = localStorage.getItem('amount');
    this.productRepeat2 = this.productsService.amountServ;
    if (amountData) {
      try {
        let arrayData = JSON.parse(amountData);
        console.log(arrayData);
        this.productRepeat = arrayData;
        return arrayData; // إرجاع الأري إذا كنت بحاجة لذلك
      } catch (error) {
        console.error('خطأ في تحليل البيانات:', error);
      }
    } else {
      console.log("لا توجد بيانات تحت المفتاح 'amount'.");
    }
  }
  much(much: number) {
    const much1 = this.countOroduct;
    this.countOroduct++;
    // return this.productRepeat[much1];
    return this.productRepeat2[much1];
    // return 0;
  }
  // remove item
  deleteCartItem(itemId: number) {
    // تصفية العناصر لإزالة العنصر المحدد
    this.carts = this.carts.filter((item) => item.id !== itemId);
    this.productsService.idNumbers = this.productsService.idNumbers.filter(
      (item) => item !== itemId
    );
    // (اختياري) تحديث localStorage إذا كنت تستخدمه
    localStorage.setItem('carts', JSON.stringify(this.carts));
  }
}
