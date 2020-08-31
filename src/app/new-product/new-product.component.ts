import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [ProductsService]
})
export class NewProductComponent implements OnInit {

  public productForm: FormGroup;
  public product_id: number;
  constructor(private productService: ProductsService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['product_id'];
    this.productForm = this.formBuilder.group({
      'product_name': ['', Validators.required],
      'product_quantity': ['', Validators.required],
      'product_details': ['', Validators.required],
      'product_price': ['', Validators.required]
    });

    if (this.product_id) {
      this.productService.getProductById(this.product_id).then((productInfo) => {
        this.productForm.patchValue(productInfo);
      });
    }

  }

  public createProduct(): void {
    if (!this.product_id) {
      this.productService.newProduct(this.productForm.value).then((response) => {
        console.log(response);
        this.productForm.reset();
      });
    } else {
      this.productService.editProduct(this.product_id, this.productForm.value).then((response) => {
        console.log(response);
      });
    }
  }

}
