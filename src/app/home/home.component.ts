import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Post } from '../post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  ar_FromServe: string[] = [];
  posts: Post[] = [];
  request!: Subscription;

  constructor(private _ProductsService: ProductsService) {
    console.log('Hello From Constructor'); //  اول حاجه بتتنفذ قبل حتي فنكشن التغيير
    // this.ar_FromServe = _ProductsService.items;
  }

  // get data from Api
  getPosts_10() {
    this.request = this._ProductsService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data.slice(0, 10);
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  ngOnInit(): void {
    console.log('Home Appeared');
    this.getPosts_10();
  }
  ngOnDestroy(): void {
    console.log('Home Destroyed');
    this.request.unsubscribe();
  }
}
