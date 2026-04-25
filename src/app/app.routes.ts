import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./inicio/inicio').then(c => c.Inicio) },
    { path: 'partida', loadComponent: () => import('./partida/partida').then(c => c.Partida) }
];
