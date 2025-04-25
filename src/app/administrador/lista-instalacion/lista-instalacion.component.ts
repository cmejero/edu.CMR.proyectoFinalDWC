import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-lista-instalacion',
  templateUrl: './lista-instalacion.component.html',
  styleUrls: ['./lista-instalacion.component.css']
})
export class ListaInstalacionComponent {
  datosService = inject(ApiService);
  instalacion: any[] = [];
  instalacionesFiltradas: any[] = [];
  terminoBusqueda: string = '';
  tamanoPagina: number = 5;
  paginaActual: number = 0;

  // Crear MatTableDataSource
  dataSource = new MatTableDataSource<any>();
  columnasMostradas: string[] = ['imagen', 'idInstalacion', 'nombreInstalacion', 'emailInstalacion', 'telefonoInstalacion', 'opciones']; // Definir las columnas a mostrar

  ngOnInit() {
    this.datosService.getInstalaciones().subscribe(res => {
      this.instalacion = res;
      this.instalacionesFiltradas = res; // Inicializar las instalaciones filtradas con todas las instalaciones
      this.dataSource.data = res;  // Asignar los datos a MatTableDataSource
    }, error => {
      console.error("Error obteniendo las instalaciones", error);
    });
  }

  filtroBusqueda() {
    this.paginaActual = 0; // Reinicia a la primera página al filtrar
    this.instalacionesFiltradas = this.instalacion.filter(instalacion =>     
      instalacion.idInstalacion.toString().includes(this.terminoBusqueda.toLowerCase()) ||
      instalacion.emailInstalacion.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) 
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
    this.dataSource.data = this.instalacionesFiltradas.slice(indiceInicio, indiceInicio + this.tamanoPagina);
  }
}
