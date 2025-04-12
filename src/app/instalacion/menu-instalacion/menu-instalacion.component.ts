import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DatosLoginService } from '../../servicios/datos-login.service';

@Component({
  selector: 'app-menu-instalacion',
  templateUrl: './menu-instalacion.component.html',
  styleUrl: './menu-instalacion.component.css'
})
export class MenuInstalacionComponent {
datosLogin = inject(DatosLoginService);
  constructor(private router: Router) {}

  cambiarIdioma() {
    console.log('Cambiando idioma...');
  }

  mostrarAyuda() {
    console.log('Mostrando ayuda...');
  }

  configuracion() {
    console.log('Abriendo configuración...');
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');

    // Llamar al servicio para cerrar sesión
    this.datosLogin.cerrarSesion();

    // Redirigir a la página de inicio y luego al login
    this.router.navigate(['/menuInicio']).then(() => {
      setTimeout(() => {
        this.router.navigate(['/login']);
      }); // Retraso de 1 segundo para asegurar que el estado se actualice
    });
  }
}
