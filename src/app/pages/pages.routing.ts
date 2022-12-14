import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {Grafica1Component} from "./grafica1/grafica1.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {PromesasComponent} from "./promesas/promesas.component";
import {RxjsComponent} from "./rxjs/rxjs.component";
import {AuthGuard} from "../guards/auth.guard";
import {PerfilUsuarioComponent} from "./perfil-usuario/perfil-usuario.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'}},
      {path: 'grafica1', component: Grafica1Component, data: {title: 'Graficas'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
      {path: 'promesas', component: PromesasComponent, data: {title: 'Promesas'}},
      {path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'}},
      {path: 'perfil-usuario', component: PerfilUsuarioComponent, data: {title: 'Perfil Usuario'}}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}
