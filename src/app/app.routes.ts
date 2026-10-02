import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home'),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./features/not-found/not-found'),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
