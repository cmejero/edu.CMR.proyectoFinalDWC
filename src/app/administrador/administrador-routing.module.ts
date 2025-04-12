import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes internos de administración
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaClubComponent } from './lista-club/lista-club.component';
import { ListaInstalacionComponent } from './lista-instalacion/lista-instalacion.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetalleClubComponent } from './detalle-club/detalle-club.component';
import { DetalleInstalacionComponent } from './detalle-instalacion/detalle-instalacion.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

const routes: Routes = [
  {
    path: '',  // Ruta principal de la administración
    component: InicioAdminComponent,  // El componente que se carga por defecto cuando entras al módulo
    children: [
      {
        path: 'menuAdmin',  // Ruta para el menú del administrador
        component: MenuAdminComponent
      },
      {
        path: 'listaUsuario',  // Ruta para la lista de usuarios
        component: ListaUsuarioComponent
      },
      {
        path: 'listaClub',  // Ruta para la lista de clubes
        component: ListaClubComponent
      },
      {
        path: 'listaInstalacion',  // Ruta para la lista de instalaciones
        component: ListaInstalacionComponent
      },
      {
        path: 'detalleUsuario/:id',  // Ruta para ver el detalle de un usuario
        component: DetalleUsuarioComponent
      },
      {
        path: 'detalleClub/:id',  // Ruta para ver el detalle de un club
        component: DetalleClubComponent
      },
      {
        path: 'detalleInstalacion/:id',  // Ruta para ver el detalle de una instalación
        component: DetalleInstalacionComponent
      },
      {
        path: 'inicioAdmin',  // Ruta para el inicio del administrador
        component: InicioAdminComponent  // Aquí asegúrate de que este componente esté declarado correctamente
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importa las rutas para este módulo específico
  exports: [RouterModule]  // Exporta RouterModule para que puedas usar estas rutas
})
export class AdministradorRoutingModule { }
