import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebComponent } from './contact/web/web.component';
import { MobileComponent } from './contact/mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './guards/auth.guard';
import { ChiledComponent } from './chiled/chiled.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth/auth.module').then((module) => module.AuthModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // مسار افتراضي
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent,
    title: 'home',
  },

  {
    path: 'productDetails/:id',
    canActivate: [authGuard],
    component: ProductDetailsComponent,
    title: 'productDetails',
  },
  {
    path: 'carts',
    canActivate: [authGuard],
    component: ChiledComponent,
    title: 'productDetails',
    data: {
      prerender: {
        renderMode: 'manual', // التعديل هنا
      },
    },
  },
  { path: 'about', component: AboutComponent, title: 'about' },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'contact',
    children: [
      { path: '', redirectTo: 'web', pathMatch: 'full' }, // مسار افتراضي
      { path: 'web', component: WebComponent, title: 'Web' },
      { path: 'mobile', component: MobileComponent, title: 'Mobile' },
    ],
  },

  { path: '**', component: NotfoundComponent, title: 'NotFound' }, // if no compo inputed show this compo / لوزما يكون اخر كومبوننت عشان الترتيب
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ], // {scrollPositionRestoration: 'enabled'} => to  make an auto scrollTop between compo
  exports: [RouterModule],
})
export class AppRoutingModule {}
