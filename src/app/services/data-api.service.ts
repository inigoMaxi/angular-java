import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllProjects (){
    const url_api = 'http://localhost:8080/springapp/proyectos';
    return this.http.get(url_api);
  }

  getMyProjects (id: string){
    const url_api = 'http://localhost:8080/springapp/usuarios/'+id;
    return this.http.get(url_api);
  }
}
