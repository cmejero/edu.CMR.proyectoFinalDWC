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
    torneoId: '',
  };

  repasswordInstalacion: string = '';  // Nueva variable para comparar contraseñas
  id!: string;

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    if (this.id) {
      this.apiService.getInstalacion(this.id).subscribe(res => {
        this.instalacion = res;
        this.repasswordInstalacion = this.instalacion.passwordInstalacion || '';
      });
    } else {
      console.log('Nueva instalación');
    }
  }

  modificarInstalacion() {
    this.apiService.updateInstalacion(`${this.id}`, this.instalacion).subscribe({
      next: (response) => {
        console.log('Instalación actualizada correctamente', response);
        this._snackBar.open('Instalación actualizada correctamente', 'Ok');
        this.router.navigate(['/listaInstalacion']);
      },
      error: (err) => {
        console.error('Error al actualizar instalación:', err);
        this._snackBar.open('Error al actualizar instalación', 'Cerrar');
      }
    });
  }

  agregarInstalacion() {
    // Verificar si las contraseñas coinciden antes de enviar los datos
    if (this.instalacion.passwordInstalacion !== this.repasswordInstalacion) {
      this._snackBar.open('⚠️ Las contraseñas no coinciden', 'Cerrar');
      return;
    }

    if (this.instalacion.nombreInstalacion && this.instalacion.emailInstalacion &&
        this.instalacion.passwordInstalacion && this.instalacion.telefonoInstalacion && this.instalacion.tipoCampo1) {
      this.apiService.createInstalacion(this.instalacion).subscribe({
        next: (response) => {
          this._snackBar.open('Instalación creada correctamente', 'Ok');
          this.router.navigate(['/listaInstalaciones']);
        },
        error: (error) => {
          console.error('Error al crear instalación:', error);
          this._snackBar.open('No se pudo crear la instalación', 'Cerrar');
        }
      });
    } else {
      this._snackBar.open('Debe rellenar el formulario', 'Cerrar');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.instalacion.imagenInstalacion = file;
  }
}
