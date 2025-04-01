import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-club',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule, RouterLink],
  templateUrl: './menu-club.component.html',
  styleUrl: './menu-club.component.css'
})
export class MenuClubComponent {

}
