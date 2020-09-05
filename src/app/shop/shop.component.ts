import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ProductsService]
})
export class ShopComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().then((products) => {
      this.products = products;
    })
  }

}
