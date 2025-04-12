import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstalacionRoutingModule } from './instalacion-routing.module';
import { InstalacionComponent } from './instalacion.component';
import { InicioInstalacionComponent } from './inicio-instalacion/inicio-instalacion.component';
import { MenuInstalacionComponent } from './menu-instalacion/menu-instalacion.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    InstalacionComponent,
    InicioInstalacionComponent,
    MenuInstalacionComponent
  ],
  imports: [
    CommonModule,
    InstalacionRoutingModule,
    MaterialModule
  ],
    exports: [
      MenuInstalacionComponent
    ]
})
export class InstalacionModule { }
