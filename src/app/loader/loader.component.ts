import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  showLoader: boolean = false;

  constructor(private showLoaderService: LoaderService) {
    showLoaderService.isLoading.subscribe((value) => (this.showLoader = value));
  }
}
