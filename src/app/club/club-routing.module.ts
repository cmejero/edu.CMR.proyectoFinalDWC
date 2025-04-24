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
    canActivate: [loginGuard],  // Protege el acceso con el guard
    data: { requiredType: 'club' },  // Solo tipo CLUB puede entrar
    children: [
      {
        path: 'menuClub',
        component: MenuClubComponent
      },
      // Aquí puedes agregar más rutas hijas protegidas
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
