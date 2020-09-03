import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    private url: string = 'http://localhost:3000/api/login/';

    constructor(private http: HttpClient) { }

    public login(credentials) {
        return this.http.post(this.url, credentials)
            .toPromise()
            .then((token) => token);
    }

}