import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuAdminComponent } from "./menu-admin/menu-admin.component";
import { MenuJugadorComponent } from "./menu-jugador/menu-jugador.component";
import { AltaInstalacionComponent } from "../instalacion/alta-instalacion/alta-instalacion.component";
import { MenuClubComponent } from "./menu-club/menu-club.component";
import { MenuInicioComponent } from "./menu-inicio/menu-inicio.component";
import { MenuInstalacionComponent } from "./menu-instalacion/menu-instalacion.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule, RouterLink, MenuAdminComponent, MenuJugadorComponent, AltaInstalacionComponent, MenuClubComponent, MenuInicioComponent, MenuInstalacionComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
