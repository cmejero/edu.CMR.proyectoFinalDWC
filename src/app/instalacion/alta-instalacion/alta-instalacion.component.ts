import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Instalacion } from '../../shared/modelos/instalacion';

@Component({
  selector: 'app-alta-instalacion',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './alta-instalacion.component.html',
  styleUrls: ['./alta-instalacion.component.css']
})
export class AltaInstalacionComponent {
  private apiService = inject(ApiService);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  password = '';
  passwordRepetida = '';

  instalacion: Instalacion = {
    nombreInstalacion: '',
    direccionInstalacion: '',
    telefonoInstalacion: '',
    emailInstalacion: '',
    tipoCampo1: '',
    tipoCampo2: '',
    tipoCampo3: '',
    servicionInstalacion: '',
    estadoInstalacion: '',
    passwordInstalacion: '',
    imagenInstalacion: '',
    torneoId: ''
  };

  id!: string;

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    if (this.id) {
      this.apiService.getInstalacion(this.id).subscribe({
        next: (res) => {
          this.instalacion = res;
          this.password = res.passwordInstalacion;
          this.passwordRepetida = res.passwordInstalacion;
        },
        error: (err) => {
          console.error('Error al obtener instalación:', err);
          this._snackBar.open('Error al cargar la instalación', 'Cerrar');
        }
      });
    } else {
      console.log('Nueva instalación');
    }
  }

  compararContrasenas(): boolean {
    if (this.password !== this.passwordRepetida) {
      this._snackBar.open('Las contraseñas no coinciden', 'Cerrar');
      return false;
    }
    return true;
  }

  agregarInstalacion() {
    if (this.compararContrasenas()) {
      this.instalacion.passwordInstalacion = this.password;
  
      if (this.instalacion.nombreInstalacion &&
          this.instalacion.emailInstalacion &&
          this.instalacion.passwordInstalacion &&
          this.instalacion.telefonoInstalacion &&
          this.instalacion.tipoCampo1) {
  
        this.apiService.createInstalacion(this.instalacion).subscribe({
          next: (response) => {
            this._snackBar.open('Instalación creada correctamente', 'Ok');
            this.router.navigate(['/altaInstalacion']);
          },
          error: (error) => {
            console.error('Error al crear instalación:', error);
            this._snackBar.open(error, 'Cerrar');  // Aquí se pasa el mensaje de error
          }
        });
      } else {
        this._snackBar.open('Debe rellenar el formulario', 'Cerrar');
      }
    }
  }
  

  modificarInstalacion() {
    if (this.compararContrasenas()) {
      if (this.password) {
        this.instalacion.passwordInstalacion = this.password;
      }

      this.apiService.updateInstalacion(this.id, this.instalacion).subscribe({
        next: (response) => {
          console.log('Instalación actualizada correctamente', response);
          this._snackBar.open('Instalación actualizada correctamente', 'Ok');
          this.router.navigate(['/listaInstalacion']);
        },
        error: (err) => {
          console.error('Error al actualizar instalación:', err);
          this._snackBar.open(err.message || 'Error al actualizar instalación', 'Cerrar');
        }
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
        this.instalacion.imagenInstalacion = base64Image.split(',')[1];
      };
    }
  }
}
