import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class FildUploadService {
  public usuario: Usuario;

  constructor(private http: HttpClient) {
  }

  get uid() {
    return this.usuario.uid;
  }

  get token() {
    return localStorage.getItem('token') || '';
  }

  uploadFileUsuario(data: any, id: string | undefined) {
    return this.http.put(`${environment.API_URL}/upload/usuarios/${id}`, data, {
      headers: {'x-token': this.token}
    });
  }

  uploadAli(data: any) {
    return this.http.post(`${environment.API_ALI}`, data);
  }
}
