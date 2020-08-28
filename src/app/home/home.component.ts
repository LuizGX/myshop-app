import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsService]
})
export class HomeComponent implements OnInit {
  public products: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().then((products) => {
      this.products = products;
    });
  }

}
