import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes específicos del módulo Club
import { InicioClubComponent } from './inicio-club/inicio-club.component';
import { MenuClubComponent } from './menu-club/menu-club.component';

const routes: Routes = [
  {
    path: '',  // Ruta principal del módulo Club
    component: InicioClubComponent,  // El componente que se carga por defecto cuando entras al módulo Club
    children: [
      {
        path: 'menuClub',  // Ruta para el menú del Club
        component: MenuClubComponent
      },
      // Aquí puedes agregar más rutas hijas si tienes otros componentes para esta sección
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importa las rutas para este módulo específico
  exports: [RouterModule]  // Exporta RouterModule para que puedas usar estas rutas
})
export class ClubRoutingModule { }
