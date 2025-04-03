import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MenuAdminComponent } from "./menu-admin/menu-admin.component";
import { MenuJugadorComponent } from "./menu-jugador/menu-jugador.component";
import { AltaInstalacionComponent } from "../instalacion/alta-instalacion/alta-instalacion.component";
import { MenuClubComponent } from "./menu-club/menu-club.component";
import { MenuInicioComponent } from "./menu-inicio/menu-inicio.component";
import { MenuInstalacionComponent } from "./menu-instalacion/menu-instalacion.component";
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgIf,
    MatButtonModule, MatMenuModule, RouterModule, RouterLink,
    MenuAdminComponent, MenuJugadorComponent, AltaInstalacionComponent,
    MenuClubComponent, MenuInicioComponent, MenuInstalacionComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  router = inject(Router);
  tipoUsuario: string | null = localStorage.getItem('userType'); // Obtener tipo de usuario

  constructor() {
    this.redirigirSegunUsuario();
  }

  redirigirSegunUsuario(): void {
    switch (this.tipoUsuario) {
      case 'usuario':
        this.router.navigate(['/menuUsuario']);
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
        console.warn('⚠ Tipo de usuario desconocido:', this.tipoUsuario);
        this.router.navigate(['/login']); // Si no es válido, redirige al login
    }
  }
}
