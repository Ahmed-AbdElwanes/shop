import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnChanges {
  title = 'firstappnost';

  hidNav: boolean = true;
  nav: string = 'hidden';
  numCart: number = 0;
  showNav() {
    if (this.hidNav) {
      this.nav = 'block';
      this.hidNav = false;
    } else {
      this.nav = 'hidden';
      this.hidNav = true;
    }
  }
  constructor(private servic: ProductsService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // this.numCart = this.servic.idNumbers.length;
  }
  cart() {
    this.numCart = this.servic.idNumbers.length;
    console.log(this.numCart);
  }
  loginNav() {
    if (sessionStorage.getItem('autherised') == 'true') {
      console.log('nav visiple');
      return true;
    } else {
      console.log('nav hidden');
      return false;
    }
  }
}
