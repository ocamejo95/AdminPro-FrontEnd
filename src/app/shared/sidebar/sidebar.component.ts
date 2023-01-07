import {Component, OnInit} from '@angular/core';
import {RouteInfo} from "./sidebar.metadata";
import {ROUTES} from "./menu-items";
import {AuthService} from "../../services/auth.service";
import {Usuario} from "../../models/usuario";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public usuario: Usuario;
  public menuItems: RouteInfo[] = [];

  constructor(private authService: AuthService) {
    this.usuario = this.authService.usuario;
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItems => menuItems);
  }

}
