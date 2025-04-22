import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugadorRoutingModule } from './jugador-routing.module';
import { JugadorComponent } from './jugador.component';
import { MenuJugadorComponent } from './menu-jugador/menu-jugador.component';
import { InicioJugadorComponent } from './inicio-jugador/inicio-jugador.component';


import { MaterialModule } from '../shared/material/material.module';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    JugadorComponent,
    MenuJugadorComponent,
    InicioJugadorComponent

  ],
  imports: [
    CommonModule,
    JugadorRoutingModule,
    MatDividerModule,
    MaterialModule
  ],
  exports: [
    MenuJugadorComponent
  ]
})
export class JugadorModule { }
