import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-dashb-product-details',
  templateUrl: './dashb-product-details.component.html',
  styleUrls: ['./dashb-product-details.component.css'],
  providers: [ProductsService]
})
export class DashbProductDetailsComponent implements OnInit {
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
