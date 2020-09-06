import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';

import { NewProductComponent } from './dashboard/new-product/new-product.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ShopNavbarComponent } from './shop-navbar/shop-navbar.component';
import { ShopProductDetailsComponent } from './shop/shop-product-details/shop-product-details.component';
import { DashbProductDetailsComponent } from './dashboard/dashb-product-details/dashb-product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewProductComponent,
    LoginComponent,
    DashboardComponent,
    ShopComponent,
    ShopNavbarComponent,
    ShopProductDetailsComponent,
    DashbProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
