// servicios.module.ts
import { NgModule } from '@angular/core';
import { ApiService } from './api.service'; // Asegúrate de importar tu servicio

@NgModule({
  providers: [ApiService]  // Proveemos el ApiService
})
export class ServiciosModule { }
