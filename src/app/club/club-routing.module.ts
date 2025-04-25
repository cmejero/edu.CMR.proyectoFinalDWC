import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes específicos del módulo Club
import { InicioClubComponent } from './inicio-club/inicio-club.component';
import { MenuClubComponent } from './menu-club/menu-club.component';

import { loginGuard } from '../guards/login.guard';  // Ajusta la ruta según tu estructura

const routes: Routes = [
  {
    path: '',  // Ruta principal del módulo Club
    component: InicioClubComponent,
    children: [
      {
        path: 'menuClub',
        component: MenuClubComponent
      }, {
        path: 'inicioClub',
        component: InicioClubComponent
      },
      {path: '', redirectTo: 'inicioClub', pathMatch: 'full'},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
