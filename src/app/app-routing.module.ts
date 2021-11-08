import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:"home/:id",
    component: HomeComponent
  },
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"cart/:id",
    component: CartComponent
  },
  {
    path:"product/:id/:id1",
    component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
