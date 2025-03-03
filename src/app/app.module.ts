import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HttpClientModule, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebComponent } from './contact/web/web.component';
import { MobileComponent } from './contact/mobile/mobile.component';
import { ChiledComponent } from './chiled/chiled.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsService } from './products.service';
import { FormsModule } from '@angular/forms'; // Import هنا
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './piped/search.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoaderComponent } from './loader/loader.component'; // Import هنا
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderService } from './loader.service';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    WebComponent,
    MobileComponent,
    ChiledComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    ProductDetailsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()), // for interceptor
    provideClientHydration(withEventReplay()),
    ProductsService,
    LoaderService,
  ], // for showing servises in compos  in module
  bootstrap: [AppComponent],
})
export class AppModule {}
