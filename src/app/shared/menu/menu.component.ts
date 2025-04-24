import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatosLoginService } from '../../servicios/datos-login.service';
import { ApiService } from '../../servicios/api.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  // Ya no es standalone, y no importa los componentes ni módulos aquí
})
export class MenuComponent {
  router = inject(Router);
  datosLogin = inject(DatosLoginService);
/*   tipoUsuario = this.datosLogin.tipoUsuario;
 */
  tipoUsuario: any = '';  // Inicializa como cadena vacía o null según tu preferencia
  apiService = inject(ApiService);

  constructor() {
    /* this.datosLogin.getTipoUsuario().subscribe((estado: any) => {
    console.log('Estado del tipo de usuario:', estado);
    this.tipoUsuario = estado;  // Actualiza el tipo de usuario al recibir el nuevo valor
  }); */
    this.redirigirSegunUsuario();
  }

  redirigirSegunUsuario(): void {
    this.datosLogin.getTipoUsuario().subscribe(tipo => {
      this.tipoUsuario = tipo;  // Actualiza el tipo de usuario al recibir el nuevo valor
      console.log(this.tipoUsuario);
    });
  }
}
