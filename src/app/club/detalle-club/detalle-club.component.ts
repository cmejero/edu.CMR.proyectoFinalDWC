import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../shared/material/material.module';
import { Club } from '../../shared/modelos/club';

@Component({
  selector: 'app-detalle-club',
  standalone: true,
  imports: [MatCardModule, MaterialModule, RouterModule],
  templateUrl: './detalle-club.component.html',
  styleUrl: './detalle-club.component.css'
})
export class DetalleClubComponent {

   private apiService = inject(ApiService);
    private router = inject(Router);
    private ruta = inject(ActivatedRoute);
    private _snackBar = inject(MatSnackBar);

  idClub: string = '';
  club!: Club;


  ngOnInit() {
    this.idClub = this.ruta.snapshot.params["id"];
    console.log('El id es -> ', this.idClub);
    if (this.idClub) {
      this.apiService.getClub(this.idClub).subscribe(res => {
        this.club = res;
        console.log(this.club);
      }, error => {
        console.error("Error obteniendo el usuario", error);
      });
    }
  }

  eliminarClub() {
    if (confirm('¿Estás seguro de que deseas eliminar este club?')) {
      this.apiService.deleteClub(this.idClub).subscribe({
        next: (response) => {
          console.log('Club eliminado correctamente');
          this._snackBar.open('Club eliminado correctamente', 'Ok');
          this.router.navigate(['/listaClub']);
        },
        error: (err) => {
          console.error('Error al eliminar el club:', err);
          this._snackBar.open('Error al eliminar el club', 'Cerrar');
        }
      });
    }
  }
}
