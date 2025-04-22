import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'jugador', loadChildren: () => import('./jugador/jugador.module').then(m => m.JugadorModule) },
  { path: 'club', loadChildren: () => import('./club/club.module').then(m => m.ClubModule) },
  { path: 'instalacion', loadChildren: () => import('./instalacion/instalacion.module').then(m => m.InstalacionModule) },
  { path: 'administracion', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: 'inicio', component: InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
