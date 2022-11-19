import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Login } from './login.model';
import { Register } from './register/register.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }),
  };
  constructor(private http: HttpClient) { }
  //Login
  postLogin(data: Login) {
    console.warn(data)
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
    return this.http.post<any>("", body, this.HTTP_OPTIONS)
  }
  //Register
  postrRgister(data: Register) {
    console.warn(data)
    const body = new HttpParams()
      .set('username', data.username)
      .set('email', data.username)
      .set('phone', data.username)
      .set('password', data.password)
    return this.http.post<any>("", body, this.HTTP_OPTIONS)
  }
}
