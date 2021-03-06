import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ProductsService]
})
export class NavbarComponent implements OnInit {
  public products: Product[];
  public searchForm: FormGroup;
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

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

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
    console.log('sair');
  }

}
