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

    public newProduct(product): Promise<any> {
        return this.http.post(this.url, product, { responseType: 'text' }).toPromise().then((res) => res);
    }

    public editProduct(id, product): Promise<any> {
        return this.http.put(this.url + id, product, { responseType: 'text' }).toPromise().then((res) => res);
    }

    public deleteProduct(id) {
        console.log(this.url + id);

        return this.http.delete(this.url + id, { responseType: 'text' })
            .toPromise()
            .then((resposta: any) => resposta);
    }
}