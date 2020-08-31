import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductsService } from '../products.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ProductsService]
})
export class NavbarComponent implements OnInit {
  public products: Product[];
  public searchForm: FormGroup;
  constructor(private productsService: ProductsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      'product_name': ['', Validators.required]
    });
  }

  async searchProductByName() {
    if (this.searchForm.valid) {
      await this.productsService.getProductsByName(this.searchForm.value.product_name).then((products) => {
        this.products = products;
      });
      console.log(this.products);
    }
  }

}
