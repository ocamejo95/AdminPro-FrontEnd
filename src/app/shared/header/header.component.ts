import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Usuario} from "../../models/usuario";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.usuario;
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.removeToken();
  }
}
