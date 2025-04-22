import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatosLoginService } from '../../servicios/datos-login.service';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  // Ya no es standalone, y no importa los componentes ni módulos aquí
})
export class MenuComponent {
  router = inject(Router);
  datosLogin = inject(DatosLoginService);
  tipoUsuario = this.datosLogin.tipoUsuario;
  apiService = inject(ApiService);

  constructor() {
    this.redirigirSegunUsuario();
  }

  redirigirSegunUsuario(): void {
    this.datosLogin.getTipoUsuario().subscribe(tipo => {
      switch (tipo) {  // Usamos directamente 'tipo' que es el valor recibido
        case 'jugador':
          this.router.navigate(['/menuJugador']);
          break;
        case 'club':
          this.router.navigate(['/menuClub']);
          break;
        case 'instalacion':
          this.router.navigate(['/menuInstalacion']);
          break;
        case 'administrador':
          this.router.navigate(['/menuAdmin']);
          break;
        default:
          console.warn('⚠ Tipo de usuario desconocido:', tipo);
          this.router.navigate(['/login']);  // Si no es válido, redirige al login
      }
    });
  }
}
