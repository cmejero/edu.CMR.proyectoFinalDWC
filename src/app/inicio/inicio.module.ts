import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';  // Ruta de tus rutas del módulo de Inicio
import { MaterialModule } from '../shared/material/material.module'; // Importa el MaterialModule optimizado
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AltaClubComponent } from './alta-club/alta-club.component';
import { AltaInstalacionComponent } from './alta-instalacion/alta-instalacion.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';

@NgModule({
  declarations: [
    InicioComponent,
    MenuInicioComponent,
    LoginComponent,
    LandingPageComponent,
    AltaClubComponent,
    AltaInstalacionComponent,
    AltaUsuarioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,  // Utiliza el MaterialModule optimizado
         // Si usas formularios, importa FormsModule aquí
  ],
    exports: [
      MenuInicioComponent
    ]
})
export class InicioModule { }
