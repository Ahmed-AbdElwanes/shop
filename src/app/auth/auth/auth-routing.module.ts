import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { authGuard } from '../../guards/auth.guard';
import { RegisterComponent } from '../../register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'regester',
    canActivate: [authGuard],
    component: RegisterComponent,
    title: 'Products',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
