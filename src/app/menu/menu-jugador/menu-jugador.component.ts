import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-jugador',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule, RouterLink],
  templateUrl: './menu-jugador.component.html',
  styleUrl: './menu-jugador.component.css'
})
export class MenuJugadorComponent {

}
