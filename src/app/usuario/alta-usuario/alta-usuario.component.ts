import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service'; // Importa tu servicio ApiService
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../shared/modelos/usuario';

@Component({
  selector: 'app-alta-usuario',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './alta-usuario.component.html',
  styleUrl: './alta-usuario.component.css'
})
export class AltaUsuarioComponent {

  private apiService = inject(ApiService);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  usuario: Usuario = {
    nombreCompletoUsuario: '',
    aliasUsuario: '',
    fechaNacimientoUsuario: '',
    emailUsuario: '',
    telefonoUsuario: '',
    passwordUsuario: '',
    rolUsuario: '',
    imagenUsuario: '',
    descripcionUsuario: ''
  };
  id!: string;

  ngOnInit() {
    // Aquí utilizamos ActivatedRoute para acceder a 'snapshot'
    this.id = this.ruta.snapshot.params['id'];  // 'ruta.snapshot' es el lugar correcto
    if (this.id) {
      // Si hay un ID, leer el usuario desde la API
      this.apiService.getUsuario(this.id).subscribe(res => {
        this.usuario = res;
      });
    } else {
      // Si no hay ID, es un nuevo usuario
      console.log('Nuevo usuario');
    }
  }

  modificarUsuario() {

    this.apiService.updateUsuario(`${this.id}`, this.usuario).subscribe(response => {
      console.log('Cliente actualizado correctamente', response);
      this._snackBar.open('Cliente actualizado correctamente', 'Ok');
      this.router.navigate(['/listaUsuario']);
    }  );
    }

  agregarUsuario() {
    if (this.usuario.nombreCompletoUsuario !== '' && this.usuario.fechaNacimientoUsuario !== '' && this.usuario.emailUsuario !== '' && this.usuario.telefonoUsuario !== '' && this.usuario.passwordUsuario !== '') {

      console.log(this.usuario)
      this.apiService.createUsuario(this.usuario).subscribe({
        next: (response) => {
          this._snackBar.open('Usuario creado correctamente', 'Ok');
          this.router.navigate(['/altaUsuario']);
        },
        error: (error) => {
          console.error('Error al crear usuario:', error);
          this._snackBar.open('No se pudo crear el usuario', 'Cerrar');
        }
      });
    } else {
      this._snackBar.open('Debe rellenar el formulario', 'Cerrar');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.usuario.imagenUsuario = file;
  }
}
