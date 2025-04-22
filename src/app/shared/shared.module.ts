import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component'; // Asegúrate de que el componente esté importado
import { FooterComponent } from './footer/footer.component'; // Asegúrate de que el componente esté importado
import { MaterialModule } from './material/material.module';
import { AdministradorModule } from '../administrador/administrador.module';
import { ClubModule } from '../club/club.module';
import { JugadorModule } from '../jugador/jugador.module';
import { InicioModule } from '../inicio/inicio.module';
import { InstalacionModule } from '../instalacion/instalacion.module';


@NgModule({
  declarations: [
    MenuComponent, // Declara el MenuComponent
    FooterComponent,
     // Declara el FooterComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdministradorModule,
    ClubModule,
    JugadorModule,
    InicioModule,
    InstalacionModule

  ],
  exports: [
    MenuComponent, // Exporta el MenuComponent
    FooterComponent, // Exporta el FooterComponent para que otros módulos puedan usarlo
    MaterialModule
  ]
})
export class SharedModule { }
