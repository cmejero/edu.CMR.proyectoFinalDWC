import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { DetalleClubComponent } from './detalle-club/detalle-club.component';
import { DetalleInstalacionComponent } from './detalle-instalacion/detalle-instalacion.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ListaClubComponent } from './lista-club/lista-club.component';
import { ListaInstalacionComponent } from './lista-instalacion/lista-instalacion.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MaterialModule } from '../shared/material/material.module';
import { MatCardModule } from '@angular/material/card';
import {  RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdministradorComponent,   
    DetalleClubComponent,
    DetalleInstalacionComponent,
    DetalleUsuarioComponent,
    InicioAdminComponent,
    ListaClubComponent,
    ListaInstalacionComponent,
    ListaUsuarioComponent,
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule, 
    MaterialModule,
    RouterModule,
    
  ],
    exports: [
      MenuAdminComponent
    ]
})
export class AdministradorModule { }
