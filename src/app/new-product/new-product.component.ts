import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [ProductsService]
})
export class NewProductComponent implements OnInit {

  public newProductForm: FormGroup = new FormGroup({
    'product_name': new FormControl(null),
    'product_quantity': new FormControl(null),
    'product_details': new FormControl(null),
    'product_price': new FormControl(null)
  });

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  public createProduct(): void {
    this.productService.newProduct(this.newProductForm.value).then((response) => {
      console.log(response);
    })
  }

}
