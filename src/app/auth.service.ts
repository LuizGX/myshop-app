import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000/api/login/';

  constructor(private http: HttpClient) { }

  public login(credentials) {
    return this.http.post(this.url, credentials)
      .toPromise()
      .then((token) => token);
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

}
