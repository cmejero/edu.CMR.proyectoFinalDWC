import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule, RouterLink],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {

}
