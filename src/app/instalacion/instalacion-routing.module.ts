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
    canActivate: [loginGuard],  // Protegemos el acceso al módulo
    data: { requiredType: 'instalacion' },  // Solo usuarios de tipo "instalacion"
    children: [
      {
        path: 'menuInstalacion',
        component: MenuInstalacionComponent,
        canActivate: [loginGuard],  // También protegemos esta ruta
        data: { requiredType: 'instalacion' }  // Tipo de usuario requerido
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalacionRoutingModule { }
