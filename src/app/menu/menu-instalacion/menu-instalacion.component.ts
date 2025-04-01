import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-instalacion',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule, RouterLink],
  templateUrl: './menu-instalacion.component.html',
  styleUrl: './menu-instalacion.component.css'
})
export class MenuInstalacionComponent {

}
