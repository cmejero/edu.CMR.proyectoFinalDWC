import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../shared/modelos/usuario';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrl: './alta-usuario.component.css'
})
export class AltaUsuarioComponent {

  private apiService = inject(ApiService);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  password = '';
  passwordRepetida = '';

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
    this.id = this.ruta.snapshot.params['id'];
    if (this.id) {
      this.apiService.getUsuario(this.id).subscribe(res => {
        this.usuario = res;
        this.password = res.passwordUsuario;
        this.passwordRepetida = res.passwordUsuario;
      });
    } else {
      console.log('Nuevo usuario');
    }
  }

  compararContrasenas(): boolean {
    if (this.password !== this.passwordRepetida) {
      this._snackBar.open('Las contraseñas no coinciden', 'Cerrar');
      return false;
    }
    return true;
  }

  async agregarUsuario() {
    if (!this.compararContrasenas()) return;
  
    this.usuario.passwordUsuario = this.password;
  
    if (!this.usuario.nombreCompletoUsuario ||
        !this.usuario.fechaNacimientoUsuario ||
        !this.usuario.emailUsuario ||
        !this.usuario.telefonoUsuario ||
        !this.usuario.passwordUsuario) {
      this._snackBar.open('Debe rellenar el formulario', 'Cerrar');
      return;
    }
  
    try {
      await this.apiService.createUsuario(this.usuario);
      this._snackBar.open('Usuario creado correctamente', 'Ok');
      this.router.navigate(['/altaUsuario']);
    } catch (error: any) {
      console.error('Error al crear usuario:', error);
      // Aquí estamos mostrando el mensaje de error que se devuelve desde el backend
      this._snackBar.open(error?.message || 'Error al crear usuario', 'Cerrar');
    }
  }
  
  
  



  modificarUsuario() {
    if (this.compararContrasenas()) {
      if (this.password) {
        this.usuario.passwordUsuario = this.password;
      }

      this.apiService.updateUsuario(`${this.id}`, this.usuario).subscribe(response => {
        console.log('Cliente actualizado correctamente', response);
        this._snackBar.open('Cliente actualizado correctamente', 'Ok');
        this.router.navigate(['/listaUsuario']);
      });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        this.usuario.imagenUsuario = base64Image.split(',')[1];
      };
    }
  }
}
