import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioJugadorComponent } from './inicio-jugador/inicio-jugador.component';
import { MenuJugadorComponent } from './menu-jugador/menu-jugador.component';

// Importamos el guard
import { loginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: InicioJugadorComponent,
    canActivate: [loginGuard],
    data: { requiredType: 'jugador' },
    children: [
      {
        path: 'menuJugador',
        component: MenuJugadorComponent,
        canActivate: [loginGuard],
        data: { requiredType: 'JUGADOR' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadorRoutingModule { }
