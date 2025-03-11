import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-lista-club',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './lista-club.component.html',
  styleUrl: './lista-club.component.css'
})
export class ListaClubComponent {
  datosService = inject(ApiService);
  club: any[] = [];

  ngOnInit() {
    this.datosService.getClubes().subscribe(res => {
      this.club = res;
      console.log(this.club);
    }, error => {
      console.error("Error obteniendo los clubes", error);
    });
  }

}
