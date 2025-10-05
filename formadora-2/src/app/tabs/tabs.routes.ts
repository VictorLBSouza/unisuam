import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        // Página de Apresentação
        path: 'home',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        // Página de Perfil
        path: 'perfil',
        loadComponent: () =>
          import('../pages/perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        // Página de Gatos
        path: 'gatos',
        loadComponent: () =>
          import('../pages/gatos/gatos.page').then((m) => m.GatosPage),
      },
      {
        // Redirecionamento padrão
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    // Redirecionamento global
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];