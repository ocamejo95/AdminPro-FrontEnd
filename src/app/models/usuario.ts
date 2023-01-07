import {environment} from "../../environments/environment";

export class Usuario {
  constructor(
    public nombre?: string,
    public email?: string,
    public password?: string,
    public img?: string,
    public google?: string,
    public role?: string,
    public uid?: string,
  ) {
  }

  get imagenURL() {
    if (this.img) {
      return `${environment.API_URL}/upload/usuarios/${this.img}`;
    } else {
      return `${environment.API_URL}/upload/usuarios/no-img`;
    }
  }

}

