import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    title: 'Dashboaard',
    icon: 'mdi mdi-gauge',
    path: 'mdi mdi-gauge',
    submenu: [
      {title: 'Main', path: '/', icon: '', submenu: []},
      {title: 'Progressbar', path: 'progress', icon: '', submenu: []},
      {title: 'Graficas', path: 'grafica1', icon: '', submenu: []},
      {title: 'Promesas', path: 'promesas', icon: '', submenu: []},
      {title: 'RXJS', path: 'rxjs', icon: '', submenu: []}
    ]
  }
];
