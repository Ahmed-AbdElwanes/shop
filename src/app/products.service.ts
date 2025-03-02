import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // appear glopal in components
})
// @Injectable() // appear local in module components to showing in ther como
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}
  getPosts(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  getProducts(): Observable<any> {
    return this._httpClient.get('https://fakestoreapi.com/products');
  }
  getProduct(id: string): Observable<any> {
    return this._httpClient.get(`https://fakestoreapi.com/products/${id}`); // in this api you chose the single product by put id after the slash
  }
  getcarts(): Observable<any> {
    return this._httpClient.get(`https://fakestoreapi.com/products`); // in this api you chose the single product by put id after the slash
  }
  idNumbers: number[] = [];
  amountServ: any[] = [];
}
