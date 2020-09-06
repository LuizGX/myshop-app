import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.css'],
  providers: [ProductsService]
})
export class ShopProductDetailsComponent implements OnInit {
  public product_id: number;
  public product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['product_id'];
    this.productService.getProductById(this.product_id).then((product) => {
      this.product = product;
    });
  }
}
