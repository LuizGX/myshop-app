import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit {
  public id: number;
  public product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['product_id'];
    this.productService.getProductById(this.id).then((product) => {
      this.product = product;
    });


  }

}
