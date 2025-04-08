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
import { DatosLoginService } from '../servicios/datos-login.service';
import { ApiService } from '../servicios/api.service';


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
  datosLogin = inject(DatosLoginService);
  tipoUsuario = this.datosLogin.tipoUsuario;
  apiService = inject(ApiService);

  constructor() {
    this.redirigirSegunUsuario();
  }

  redirigirSegunUsuario(): void {
    this.datosLogin.getTipoUsuario().subscribe(tipo => {
      this.tipoUsuario = tipo;
    switch (this.tipoUsuario) {
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
        console.warn('⚠ Tipo de usuario desconocido:', this.tipoUsuario);
        this.router.navigate(['/login']); // Si no es válido, redirige al login
    }
  });
  }



}

