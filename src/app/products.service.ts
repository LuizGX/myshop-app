import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable()
export class ProductsService {

    private url = 'http://localhost:3000/api/products/';

    constructor(private http: HttpClient) { }

    public getAllProducts(): Promise<Product[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((resposta: any) => resposta);
    }

    public getProductById(id): Promise<Product> {
        return this.http.get(this.url + id)
            .toPromise()
            .then((resposta: any) => resposta);
    }
}