import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent {

  datosService = inject(ApiService);
    usuario: any[] = [];

    ngOnInit() {
      this.datosService.getUsuarios().subscribe(res => {  // Usa getUsuarios()
        this.usuario = res;  // Almacena la lista completa
        console.log(this.usuario);
      }, error => {
        console.error("Error obteniendo los usuarios", error);
      });
    }
}
