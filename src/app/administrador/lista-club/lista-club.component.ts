import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-lista-club',
  templateUrl: './lista-club.component.html',
  styleUrls: ['./lista-club.component.css']
})
export class ListaClubComponent {
  datosService = inject(ApiService);
  club: any[] = [];
  clubesFiltrados: any[] = [];
  terminoBusqueda: string = '';
  tamanoPagina: number = 5;
  paginaActual: number = 0;

  dataSource = new MatTableDataSource<any>();  // Crear MatTableDataSource
  columnasMostradas: string[] = ['imagen', 'idClub', 'nombreClub', 'emailClub', 'telefonoClub', 'opciones']; // Definir las columnas a mostrar

  ngOnInit() {
    this.datosService.getClubes().subscribe(res => {
      this.club = res;
      this.clubesFiltrados = res; // Inicializar los clubes filtrados con todos los clubes
      this.dataSource.data = res;  // Asignar los datos a MatTableDataSource
    }, error => {
      console.error("Error obteniendo los clubes", error);
    });
  }

  filtroBusqueda() {
    this.paginaActual = 0; // Reinicia a la primera página al filtrar
    this.clubesFiltrados = this.club.filter(club =>
      club.emailClub.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      club.idClub.toString().includes(this.terminoBusqueda.toLowerCase()) 
    );
    this.aplicarPaginacion();
  }


  // Paginación
  cambioPagina(event: any) {
    this.paginaActual = event.pageIndex;
    this.tamanoPagina = event.pageSize;
    this.aplicarPaginacion();
  }

  aplicarPaginacion() {
    // Ajustar la paginación según los datos filtrados
    const indiceInicio = this.paginaActual * this.tamanoPagina;
    this.dataSource.data = this.clubesFiltrados.slice(indiceInicio, indiceInicio + this.tamanoPagina);
  }
}
