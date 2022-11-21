import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }


  login(formData: any) {
    return this.http.post(`${environment.API_URL}/auth`, formData).pipe(map((response: any) => {
      localStorage.setItem('token', response.token)
      return true;
    }));
  }

  createUsuario(formData: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/usuarios`, formData);
  }

  updateUsuario(formData: any, uid: string): Observable<any> {
    return this.http.put(`${environment.API_URL}/usuarios/${uid}`, formData);
  }

  deleteUsuario(uid: string): Observable<any> {
    return this.http.delete(`${environment.API_URL}/usuarios/${uid}`);
  }
}
