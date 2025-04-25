import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes principales del módulo Instalacion
import { InicioInstalacionComponent } from './inicio-instalacion/inicio-instalacion.component';
import { MenuInstalacionComponent } from './menu-instalacion/menu-instalacion.component';

// Importa el guard
import { loginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: InicioInstalacionComponent,
    children: [
      {
        path: 'menuInstalacion',
        component: MenuInstalacionComponent      
      },
      {
        path: 'inicioInstalacion',
        component: InicioInstalacionComponent      
      },
      {path: '', redirectTo: 'inicioInstalacion', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalacionRoutingModule { }
