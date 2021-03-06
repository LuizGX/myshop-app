import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsService]
})
export class HomeComponent implements OnInit {
  public products: Product[];
  public productToRemove: Product;
  public indexToRemove: number;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().then((products) => {
      this.products = products;
    });
  }

  setRemove(product, arrayIndex) {
    this.productToRemove = product;
    this.indexToRemove = arrayIndex;
  }

  removeProduct() {
    this.productsService.deleteProduct(this.productToRemove.product_id);
    this.products.splice(this.indexToRemove, 1);
  }

}
