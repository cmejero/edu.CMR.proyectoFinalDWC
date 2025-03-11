import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-lista-instalacion',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './lista-instalacion.component.html',
  styleUrl: './lista-instalacion.component.css'
})
export class ListaInstalacionComponent {

  datosService = inject(ApiService);
  instalacion: any[] = [];

  ngOnInit() {
    this.datosService.getInstalaciones().subscribe(res => {
      this.instalacion = res;
      console.log(this.instalacion);
    }, error => {
      console.error("Error obteniendo los clubes", error);
    });
  }
}
