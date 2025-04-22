import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Solo RouterModule para las rutas

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';  // Módulo compartido si es necesario
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Si usas formularios
import { AppRoutingModule } from './app-routing.module';  // Rutas con Lazy Loading
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './servicios/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClubModule } from './club/club.module';
import { InicioModule } from './inicio/inicio.module';
import { InstalacionModule } from './instalacion/instalacion.module';
import { JugadorModule } from './jugador/jugador.module';




@NgModule({
  declarations: [
    AppComponent,  // Componente raíz
  ],
  imports: [
    BrowserModule,                   // Necesario para el navegador
    AppRoutingModule,                 // Rutas con Lazy Loading
    FormsModule,                      // Si usas formularios
    ReactiveFormsModule,              // Formularios reactivos si los usas
    SharedModule,
    BrowserAnimationsModule,        
    JugadorModule,
    InstalacionModule,
    ClubModule,
    InicioModule,
    RouterModule                  // Importa el MaterialModule para Angular Material
  ],
  providers: [provideHttpClient(), ApiService],
  bootstrap: [AppComponent]           // Componente raíz
})
export class AppModule {}
