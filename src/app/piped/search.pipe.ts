import { Pipe, PipeTransform } from '@angular/core';
// import { Product } from '../post';
import { Product } from '../post';

@Pipe({
  name: 'search', // الاسم الذي سيُستخدم في القالب
  standalone: false,
  pure: false, // يُستخدم فقط للفحص المؤقت
})
export class SearchPipe implements PipeTransform {
  transform(Products: Product[], value: string): Product[] {
    console.log(Products);
    console.log(value);
    return Products.filter(
      (product) =>
        product.title.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
    );
  }
}
