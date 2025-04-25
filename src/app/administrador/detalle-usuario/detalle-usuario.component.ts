import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})

export class DetalleUsuarioComponent implements OnInit  {

  private apiService = inject(ApiService);
  private router = inject(Router);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);

  usuario: any;  // Aquí almacenarás los detalles del usuario
  idUsuario!: string;

  ngOnInit() {
    this.idUsuario = this.ruta.snapshot.params['id'];  // Obtén el id del usuario desde la URL
    // Obtén los detalles del usuario desde la API
    this.apiService.getUsuario(this.idUsuario).subscribe(res => {
      this.usuario = res;
    }, error => {
      console.error("Error obteniendo el usuario", error);
    });
  }

  eliminarUsuario() {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.apiService.deleteUsuario(this.idUsuario).subscribe({
        next: (response) => {
          console.log('Usuario eliminado correctamente');
          this._snackBar.open('Usuario eliminado correctamente', 'Ok');
          this.router.navigate(['/administrador/listaUsuario']);  // Redirige a la lista de usuarios
        },
        error: (err) => {
          console.error('Error al eliminar el usuario:', err);
          this._snackBar.open('Error al eliminar el usuario', 'Cerrar');
        }
      });
    }
  }
}

