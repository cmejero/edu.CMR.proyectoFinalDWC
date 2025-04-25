import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes internos del módulo administración
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaClubComponent } from './lista-club/lista-club.component';
import { ListaInstalacionComponent } from './lista-instalacion/lista-instalacion.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetalleClubComponent } from './detalle-club/detalle-club.component';
import { DetalleInstalacionComponent } from './detalle-instalacion/detalle-instalacion.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

// Importa el guard
import { loginGuard } from '../guards/login.guard';
import { AdministradorComponent } from './administrador.component';
import { AltaUsuarioComponent } from '../inicio/alta-usuario/alta-usuario.component';
import { AltaClubComponent } from '../inicio/alta-club/alta-club.component';
import { AltaInstalacionComponent } from '../inicio/alta-instalacion/alta-instalacion.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    /* canActivate: [loginGuard],  // Protege el acceso al módulo
    data: { requiredType: 'administrador' } ,*/  // Solo usuarios de tipo "administrador"
    children: [
      { path: 'inicioAdmin', component: InicioAdminComponent },
      //{ path: 'menuAdmin', component: MenuAdminComponent },
      { path: 'listaUsuario', component: ListaUsuarioComponent },
      { path: 'listaClub', component: ListaClubComponent },
      { path: 'listaInstalacion', component: ListaInstalacionComponent },
      { path: 'detalleUsuario/:id', component: DetalleUsuarioComponent },
      { path: 'detalleClub/:id', component: DetalleClubComponent },
      { path: 'detalleInstalacion/:id', component: DetalleInstalacionComponent },
      { path: 'modificarUsuario/:id', component: AltaUsuarioComponent },
      { path: 'modificarClub/:id', component: AltaClubComponent },
      { path: 'modificarInstalacion/:id', component: AltaInstalacionComponent },

      {path: '', redirectTo: 'inicioAdmin', pathMatch: 'full'}, // Redirige a inicioAdmin por defecto
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
