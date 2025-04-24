import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';  // Asegúrate de importar correctamente

const routes: Routes = [
  {
    path: 'jugador',
    loadChildren: () => import('./jugador/jugador.module').then(m => m.JugadorModule),
    canActivate: [loginGuard],
    data: { requiredType: 'jugador' }
  },
  {
    path: 'club',
    loadChildren: () => import('./club/club.module').then(m => m.ClubModule),
    canActivate: [loginGuard],
    data: { requiredType: 'club' }
  },
  {
    path: 'instalacion',
    loadChildren: () => import('./instalacion/instalacion.module').then(m => m.InstalacionModule),
    canActivate: [loginGuard],
    data: { requiredType: 'instalacion' }
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule),
    canActivate: [loginGuard],
    data: { requiredType: 'administrador' }
  },
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
