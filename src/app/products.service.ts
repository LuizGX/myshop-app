import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable()
export class ProductsService {

    private url: string = 'http://localhost:3000/api/products/';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6Im5hbWUiLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSJ9LCJpYXQiOjE1OTkwNzA2Mjl9.kkM0XuhMTh8XDCccE99QjT3zA-khLeGhvq-hWDihdIo',
        })
    };

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

    public getProductsByName(name): Promise<Product[]> {
        return this.http.get(this.url + 'search/' + name)
            .toPromise()
            .then((resposta: any) => resposta);
    }

    public newProduct(product): Promise<any> {
        return this.http.post(this.url, product, this.httpOptions).toPromise().then((res) => res);
    }

    public editProduct(id, product): Promise<any> {
        return this.http.put(this.url + id, product, { responseType: 'text' }).toPromise().then((res) => res);
    }

    public deleteProduct(id) {
        return this.http.delete(this.url + id, { responseType: 'text' })
            .toPromise()
            .then((resposta: any) => resposta);
    }
}