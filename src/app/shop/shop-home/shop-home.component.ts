import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().then((products) => {
      this.products = products;
    })
  }

}
