import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule, RouterLink],
  templateUrl: './menu-inicio.component.html',
  styleUrl: './menu-inicio.component.css'
})
export class MenuInicioComponent {

}
