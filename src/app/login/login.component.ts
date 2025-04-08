
import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { ApiService } from '../servicios/api.service';
import { DatosLoginService } from '../servicios/datos-login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatError,
    MatFormField,
    FormsModule,
    MatLabel,
    NgIf,
    MatInput,
    MatButton,

  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  apiService = inject(ApiService);
  datosLogin = inject(DatosLoginService);

  router = inject(Router);


  emailUser: string = '';
  passwordUser: string = '';
  loginValido: boolean = true;
  year: number = new Date().getFullYear();
  errorMessage: string = '';
  passwordVisible: boolean = false;

  // Función para mostrar u ocultar la contraseña
  mostrarContrasena(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
  }

  // Función para hacer login
  login(): void {
    console.log('Iniciando sesión con correo:', this.emailUser);  // Agrega un log para verificar si se llama al login

    if (!this.emailUser || !this.passwordUser) {
      this.loginValido = false;
      this.errorMessage = 'Por favor ingresa tu correo y contraseña';
      return;
    }

    this.apiService.login(this.emailUser, this.passwordUser).subscribe(
      (response) => {
        console.log('✅ Respuesta del servidor:', response);  // Log para ver la respuesta del servidor

        const tipoUsuario = typeof response.tipoUsuario === 'string' ? response.tipoUsuario : '';

 // Guardar en el SesionService
 this.datosLogin.setToken(response.token);
 this.datosLogin.setTipoUsuario(tipoUsuario);
 this.datosLogin.setDatosUsuario(response.datosUsuario);
        // Guardamos el tipo de usuario en localStorage
        localStorage.setItem('userType', tipoUsuario);

        // Redirigir según el tipo de usuario
        switch (tipoUsuario) {
          case 'jugador':
            this.router.navigate(['/inicioJugador']);
            break;
          case 'club':
            this.router.navigate(['/inicioClub']);
            break;
          case 'instalacion':
            this.router.navigate(['/inicioInstalacion']);
            break;
            case 'administrador':
            this.router.navigate(['/inicioAdmin']);
            break;
          default:
            console.warn('⚠ Tipo de usuario desconocido:', tipoUsuario);
            this.router.navigate(['/login']); // Si no es un tipo de usuario válido
        }
      },
      (error) => {
        console.error('❌ Error en login:', error);  // Log para ver el error
        this.loginValido = false;
        this.errorMessage = 'Error en la comunicación con el servidor';
      }
    );
  }


  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
