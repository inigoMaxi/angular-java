import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { UserInterface } from '../models/user-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private htttp: HttpClient, private router: Router) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(name: string, password: string) {
    const url_api = "http://localhost:8080/springapp/usuarios";
    return this.htttp
      .post<UserInterface>(
        url_api,
        {
          nombre: name,
          contraseña: password
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  loginuser(nombre: string, contraseña: string): Observable<any> {
    const url_api = "http://localhost:8080/springapp/autenticacion";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { nombre, contraseña },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
  
  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  logoutUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    this.router.navigate(['/user/login']);
  }

  setUserId(id: string) {
    localStorage.setItem("currentUser", id);
  }

  getUserId() {
    return localStorage.getItem("currentUser");
  }

}
