import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioJugadorComponent } from './inicio-jugador/inicio-jugador.component';
import { MenuJugadorComponent } from './menu-jugador/menu-jugador.component'; 

// Definimos las rutas del módulo
const routes: Routes = [
  {
    path: '',
    component: InicioJugadorComponent,
    children: [
      {
        path: 'menuJugador',
        component: MenuJugadorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadorRoutingModule { }  // Asegúrate de exportar correctamente el módulo
