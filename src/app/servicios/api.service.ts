import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Auth, signOut, user, User } from '@angular/fire/auth';

import { Usuario } from '../shared/modelos/usuario';
import { Club } from '../shared/modelos/club';
import { Instalacion } from '../shared/modelos/instalacion';
import { DatosLoginService } from './datos-login.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  private apiUrl = 'http://localhost:9527/api';

  usuario!: Usuario;
  club!: Club;
  instalacion!: Instalacion;
  user$: Observable<User | null>;
  datosLogin = inject(DatosLoginService);

  // Ya no es necesario inyectar Auth aquí manualmente
  constructor(private http: HttpClient, private router: Router, private auth: Auth) {
    this.user$ = user(this.auth);
  }

  // Métodos de autenticación
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }


  logout(): void {
    // Eliminar el token de localStorage
    localStorage.removeItem('auth_token');  // O sessionStorage si lo usas

    // Realizar una solicitud para invalidar la sesión en el backend
    this.http.delete(`${this.apiUrl}/logout`).subscribe(
      response => {
        console.log('Sesión cerrada');

        // Limpiar el estado reactivo de sesión
        this.datosLogin.cerrarSesion();

        // Redirigir al usuario a la página de login
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al cerrar sesión', error);
      }
    );
  }


  // Métodos para la API de usuarios
   // Obtener un usuario por ID
   getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/mostrarUsuarios`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo usuario
  createUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardarUsuario`, usuario).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un usuario
  updateUsuario(id: string, usuario: Usuario): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/modificarUsuario/${id}`, usuario).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un usuario
  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarUsuario/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Métodos para Club
   // Obtener un club por ID
   getClub(id: string): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/club/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener todos los clubes
  getClubes(): Observable<Club[]> {
    return this.http.get<Club[]>(`${this.apiUrl}/mostrarClubes`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo club
  createClub(club: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardarClub`, club).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un club
  updateClub(id: string, club: Club): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/modificarClub/${id}`, club).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un club
  deleteClub(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminarClub/${id}`).pipe(
      catchError(this.handleError)
    );
  }


  // Métodos para Instalaciones

  // Obtener todas las instalaciones
getInstalaciones(): Observable<Instalacion[]> {
  return this.http.get<Instalacion[]>(`${this.apiUrl}/mostrarInstalaciones`).pipe(
    catchError(this.handleError) // Manejo de errores
  );
}

   // Obtener una instalación por ID
   getInstalacion(id: string): Observable<Instalacion> {
    return this.http.get<Instalacion>(`${this.apiUrl}/instalacion/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear una nueva instalación
createInstalacion(instalacion: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/guardarInstalacion`, instalacion).pipe(
    catchError(this.handleError) // Manejo de errores
  );
}


  // Actualizar una instalación
  updateInstalacion(id: string, instalacion: Instalacion): Observable<any> {
    return this.http.put(`${this.apiUrl}/modificarInstalacion/${id}`, instalacion).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar una instalacion
  deleteInstalacion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarInstalacion/${id}`).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }
  // Manejar errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error al procesar la solicitud.';

    // Si el error es un 400 (email ya en uso)
    if (error.status === 400) {
      errorMessage = 'El email ya está en uso. Por favor, utiliza otro.';
    } else if (error.status === 500) {
      errorMessage = 'Error interno del servidor. Por favor, intenta más tarde.';
    }

    // Devolver un observable con el mensaje de error
    return throwError(errorMessage);
  }
}
