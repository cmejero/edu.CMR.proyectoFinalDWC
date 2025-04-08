import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Club } from '../../shared/modelos/club';

@Component({
  selector: 'app-alta-club',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './alta-club.component.html',
  styleUrls: ['./alta-club.component.css']
})
export class AltaClubComponent {
  private apiService = inject(ApiService);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  password = '';
  passwordRepetida= '';

  club: Club = {
    nombreClub: '',
    abreviaturaClub: '',
    descripcionClub: '',
    fechaCreacionClub: '',
    fechaFundacionClub:'',
    localidadClub: '',
    paisClub: '',
    logoClub: '',
    emailClub: '',
    passwordClub: '',
    telefonoClub: '',
  };
  id!: string;

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    if (this.id) {
      this.apiService.getClub(this.id).subscribe(res => {
        this.club = res;
      });
    } else {
      console.log('Nuevo club');
    }
  }

  modificarClub() {
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

 // Método que compara las contraseñas
 compararContrasenas(): boolean {
  if (this.password !== this.passwordRepetida) {
    this._snackBar.open('Las contraseñas no coinciden', 'Cerrar');
    return false;
  }
  return true;
}

agregarClub() {
  // Primero, asigna el valor de la contraseña al club
  this.club.passwordClub = this.password;

  // Asignar la fecha de creación (actual) al club
  this.club.fechaCreacionClub = new Date().toString(); 

  // Verificar si todos los campos obligatorios están llenos
  if (!this.club.nombreClub || !this.club.emailClub || !this.club.passwordClub || !this.club.telefonoClub || !this.club.abreviaturaClub || !this.club.localidadClub || !this.club.paisClub) {
    this._snackBar.open('Debe rellenar todo el formulario', 'Cerrar');
    return;
  }

  // Luego, comprobar si las contraseñas coinciden
  if (this.compararContrasenas()) {
    // Si las contraseñas coinciden, realizar la creación del club
    this.apiService.createClub(this.club).subscribe({
      next: (response) => {
        this._snackBar.open('Club creado correctamente', 'Ok');
      },
      error: (error) => {
        console.error('Error al crear club:', error);
        this._snackBar.open('No se pudo crear el club', 'Cerrar');
      }
    });
  }
}


onFileSelected(event: any) {
  const file = event.target.files[0];
  this.club.logoClub = file;
}
}
