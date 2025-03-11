import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../shared/material/material.module';
import { Instalacion } from '../../shared/modelos/instalacion';

@Component({
  selector: 'app-detalle-instalacion',
  standalone: true,
  imports: [MatCardModule, MaterialModule, RouterModule],
  templateUrl: './detalle-instalacion.component.html',
  styleUrls: ['./detalle-instalacion.component.css']
})
export class DetalleInstalacionComponent {

  private apiService = inject(ApiService);
  private router = inject(Router);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);

  idInstalacion: string = '';
  instalacion!: Instalacion;

  ngOnInit() {
    this.idInstalacion = this.ruta.snapshot.params["id"];
    console.log('El id de la instalación es -> ', this.idInstalacion);
    if (this.idInstalacion) {
      this.apiService.getInstalacion(this.idInstalacion).subscribe(res => {
        this.instalacion = res;
        console.log(this.instalacion);
      }, error => {
        console.error('Error obteniendo la instalación', error);
        this._snackBar.open('Error obteniendo la instalación', 'Cerrar');
      });
    }
  }

  eliminarInstalacion() {
    if (confirm('¿Estás seguro de que deseas eliminar esta instalación?')) {
      this.apiService.deleteInstalacion(this.idInstalacion).subscribe({
        next: (response) => {
          console.log('Instalación eliminada correctamente');
          this._snackBar.open('Instalación eliminada correctamente', 'Ok');
          this.router.navigate(['/listaInstalaciones']);
        },
        error: (err) => {
          console.error('Error al eliminar la instalación:', err);
          this._snackBar.open('Error al eliminar la instalación', 'Cerrar');
        }
      });
    }
  }
}
