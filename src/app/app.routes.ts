import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'igerilekua',
    loadComponent: () => import('./igerilekua/igerilekua.page').then( m => m.IgerilekuaPage)
  },
  {
    path: 'jatetxea',
    loadComponent: () => import('./jatetxea/jatetxea.page').then( m => m.JatetxeaPage)
  },
  {
    path: 'alojamientos',
    loadComponent: () => import('./alojamientos/alojamientos.page').then( m => m.AlojamientosPage)
  },
  {
    path: 'alo-individual',
    loadComponent: () => import('./alo-individual/alo-individual.page').then( m => m.AloIndividualPage)
  },

  {
    path: 'jarduerak',
    loadComponent: () => import('./jarduera/jarduerak.page').then( m => m.JarduerakPage)
  },
];
