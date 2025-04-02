import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-menu-instalacion',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule, RouterLink, MatIconModule,MatDividerModule],
  templateUrl: './menu-instalacion.component.html',
  styleUrl: './menu-instalacion.component.css'
})
export class MenuInstalacionComponent {

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
    this.router.navigate(['/login']); // Redirigir al login
  }
}
