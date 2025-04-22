import { Component, inject } from '@angular/core';
/* import { MatButtonModule } from '@angular/material/button';
import { MatMenu } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'; */
import { Router } from '@angular/router';
import { DatosLoginService } from '../../servicios/datos-login.service';


@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
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
