import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes principales del módulo Instalacion
import { InicioInstalacionComponent } from './inicio-instalacion/inicio-instalacion.component';
import { MenuInstalacionComponent } from './menu-instalacion/menu-instalacion.component';

// Define las rutas del módulo Instalacion
const routes: Routes = [
  {
    path: '',  // Ruta principal de este módulo
    component: InicioInstalacionComponent,  // El componente que se carga cuando se accede al módulo Instalacion
    children: [  // Si tienes rutas hijas, las defines aquí
      {
        path: 'menuInstalacion',  // Ruta para el menú de instalación
        component: MenuInstalacionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Usamos forChild para rutas específicas del módulo
  exports: [RouterModule]  // Exporta el RouterModule para que las rutas sean accesibles
})
export class InstalacionRoutingModule { }
