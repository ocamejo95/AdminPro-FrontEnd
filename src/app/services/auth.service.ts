import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map, Observable, of} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario: Usuario;

  constructor(private http: HttpClient) {
  }

  login(formData: any) {
    return this.http.post(`${environment.API_URL}/auth`, formData);
  }

  get token() {
    return localStorage.getItem('token') || '';
  }

  get uid() {
    return this.usuario.uid;
  }

  removeToken() {
    return localStorage.removeItem('token');
  }

  validarToken(): Observable<boolean> {

    return this.http.get(`${environment.API_URL}/auth/renew`, {
      headers: {'x-token': this.token}
    }).pipe(
      map((resp: any) => {
        const {email, img = '', nombre, role, google, uid} = resp.usuario;
        this.usuario = new Usuario(nombre, email, '', img, google, role, uid);
        localStorage.setItem('token', resp.token);
        return true;
      }),

      catchError(error => of(false))
    );
  }

  updateUsuario(formData: any): Observable<any> {
    return this.http.put(`${environment.API_URL}/usuarios/${this.uid}`, formData, {
      headers: {'x-token': this.token}
    });
  }

}
