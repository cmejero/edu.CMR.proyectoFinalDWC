import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { ApiService } from '../../servicios/api.service'; 
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {

  datosService = inject(ApiService);
  usuario: any[] = [];
  usuariosFiltrados: any[] = [];
  terminoBusquedaUsuario: string = '';
  tamanoPaginaUsuario: number = 5;
  paginaActualUsuario: number = 0;

  dataSourceUsuarios = new MatTableDataSource<any>();
  columnasMostradas: string[] = ['imagen', 'idUsuario', 'nombreCompletoUsuario', 'emailUsuario', 'telefonoUsuario', 'opciones'];

  ngOnInit() {
    this.datosService.getUsuarios().subscribe(res => {
      this.usuario = res;
      this.usuariosFiltrados = res;
      this.dataSourceUsuarios.data = res;
    }, error => {
      console.error("Error obteniendo los usuarios", error);
    });
  }

  filtroBusquedaUsuario() {
    this.paginaActualUsuario = 0;
    const termino = this.terminoBusquedaUsuario.toLowerCase();
    this.usuariosFiltrados = this.usuario.filter(usuario =>
      usuario.nombreCompletoUsuario?.toLowerCase().includes(termino) ||
      usuario.emailUsuario?.toLowerCase().includes(termino) ||
      usuario.telefonoUsuario?.toLowerCase().includes(termino)
    );
    this.aplicarPaginacionUsuario();
  }

  cambioPaginaUsuario(event: any) {
    this.paginaActualUsuario = event.pageIndex;
    this.tamanoPaginaUsuario = event.pageSize;
    this.aplicarPaginacionUsuario();
  }

  aplicarPaginacionUsuario() {
    const inicio = this.paginaActualUsuario * this.tamanoPaginaUsuario;
    const fin = inicio + this.tamanoPaginaUsuario;
    this.dataSourceUsuarios.data = this.usuariosFiltrados.slice(inicio, fin);
  }
}
