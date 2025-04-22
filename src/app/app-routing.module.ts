import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar el modulo de inicio de manera diferida (lazy loading)
const routes: Routes = [
  { path: 'jugador', loadChildren: () => import('./jugador/jugador.module').then(m => m.JugadorModule) },
  { path: 'club', loadChildren: () => import('./club/club.module').then(m => m.ClubModule) },
  { path: 'instalacion', loadChildren: () => import('./instalacion/instalacion.module').then(m => m.InstalacionModule) },
  { path: 'administrador', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: '', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }, // Esta es la ruta predeterminada con lazy loading
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
