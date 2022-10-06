import {Component, OnInit} from '@angular/core';
import {RouteInfo} from "./sidebar.metadata";
import {ROUTES} from "./menu-items";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public menuItems: RouteInfo[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItems => menuItems);
  }

}
