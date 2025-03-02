import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [ProductsService], // جه بقه لو عايز اخلي مجموعه من السيرفسس تظهر للككمبوننت ده بس
})
export class AboutComponent {
  string_1: string = 'Iam=> var';
  number_1: number = 22;
  imgSrc: string = './../../assets/image-1.jpg';
  bool: boolean = true;
  //
  sayHello() {
    console.log('say Hello');
  }
  //
  printInConsole(e: KeyboardEvent) {
    console.log(e);
    const inputField = e.target as HTMLInputElement; // لزما نحطه في متغير عشان نعرف اللغة انه نوعه html فناخد المثود بتاعته
    console.log(inputField.value);
  }
  //
  friends: string[] = ['ali', 'soha', 'ahmed'];
  isActive: boolean = true;
  value: number = 0;

  ar_FromServe: string[] = [];
  constructor(_productsService: ProductsService) {}
}
