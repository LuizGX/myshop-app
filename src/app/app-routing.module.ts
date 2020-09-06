import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NewProductComponent } from './dashboard/new-product/new-product.component';
import { ShopComponent } from './shop/shop.component';
import { ShopProductDetailsComponent } from './shop/shop-product-details/shop-product-details.component';
import { DashbProductDetailsComponent } from './dashboard/dashb-product-details/dashb-product-details.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';


const routes: Routes = [
  {
    path: '', component: ShopComponent,
    children: [
      { path: '', component: ShopHomeComponent },
      { path: 'produto/:product_id', component: ShopProductDetailsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'produto/:product_id', component: DashbProductDetailsComponent },
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
