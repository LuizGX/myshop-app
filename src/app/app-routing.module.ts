import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NewProductComponent } from './dashboard/new-product/new-product.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produto/:product_id', component: ProductComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'produto/:product_id', component: ProductComponent },
      { path: 'produtos', component: HomeComponent, },
      { path: 'novo', component: NewProductComponent },
      { path: 'editar/:product_id', component: NewProductComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
