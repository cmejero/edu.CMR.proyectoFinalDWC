import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Club } from '../../shared/modelos/club';

@Component({
  selector: 'app-alta-club',
  templateUrl: './alta-club.component.html',
  styleUrls: ['./alta-club.component.css']
})
export class AltaClubComponent {
  private apiService = inject(ApiService);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  password = '';
  passwordRepetida = '';

  club: Club = {
    nombreClub: '',
    abreviaturaClub: '',
    descripcionClub: '',
    fechaCreacionClub: '',
    fechaFundacionClub: '',
    localidadClub: '',
    paisClub: '',
    logoClub: '',
    emailClub: '',
    passwordClub: '',
    telefonoClub: ''
  };

  id!: string;

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    if (this.id) {
      this.apiService.getClub(this.id).subscribe(res => {
        this.club = res;
        this.password = res.passwordClub;
        this.passwordRepetida = res.passwordClub;
      });
    } else {
      console.log('Nuevo club');
    }
  }

  compararContrasenas(): boolean {
    if (this.password !== this.passwordRepetida) {
      this._snackBar.open('Las contraseñas no coinciden', 'Cerrar');
      return false;
    }
    return true;
  }

  async agregarClub() {
    // Asignar la contraseña y fecha de creación
    this.club.passwordClub = this.password;
    this.club.fechaCreacionClub = new Date().toISOString();

    // Validación de campos obligatorios
    if (!this.club.nombreClub || !this.club.emailClub || !this.club.passwordClub ||
        !this.club.telefonoClub || !this.club.abreviaturaClub ||
        !this.club.localidadClub || !this.club.paisClub) {
      this._snackBar.open('Debe rellenar todo el formulario', 'Cerrar');
      return;
    }

    // Verificar que las contraseñas coinciden
    if (!this.compararContrasenas()) return;

    try {
      // Llamada al servicio para crear el club
      await this.apiService.createClub(this.club); // <-- Aquí va tu try/await

      // Mostrar mensaje de éxito
      this._snackBar.open('Club creado correctamente', 'Ok');
      // Redirigir a la página de alta del club
      this.router.navigate(['/altaClub']);
    } catch (error: any) {
      // Manejar errores y mostrar mensaje
      console.error('Error al crear club:', error);
      this._snackBar.open(error?.message || 'Error al crear club', 'Cerrar');
    }
  }


  modificarClub() {
    if (this.compararContrasenas()) {
      if (this.password) {
        this.club.passwordClub = this.password;
      }

      this.apiService.updateClub(`${this.id}`, this.club).subscribe({
        next: (response) => {
          console.log('Club actualizado correctamente', response);
          this._snackBar.open('Club actualizado correctamente', 'Ok');
          this.router.navigate(['/listaClub']);
        },
        error: (err) => {
          console.error('Error al actualizar club:', err);
          this._snackBar.open('Error al actualizar club', 'Cerrar');
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
        this.club.logoClub = base64Image.split(',')[1];
      };
    }
  }
}
