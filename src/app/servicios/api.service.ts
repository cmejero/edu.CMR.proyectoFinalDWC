import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  catchError, lastValueFrom, Observable, throwError } from 'rxjs';
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
  createUsuario(usuario: any): Promise<any> {
    return lastValueFrom(this.http.post(`${this.apiUrl}/guardarUsuario`, usuario).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Error inesperado';
        if (error.status === 400) {
          // Si el error es un 400 (Bad Request), extraemos el mensaje del backend
          errorMsg = error.error || 'Error al crear el usuario';
        }
        return throwError(() => new Error(errorMsg));
      })
    ));
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
  createClub(club: any): Promise<any> {
    return lastValueFrom(this.http.post(`${this.apiUrl}/guardarClub`, club).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Error inesperado';
        if (error.status === 400) {
          // Si el error es un 400 (Bad Request), extraemos el mensaje del backend
          errorMsg = error.error || 'Error al crear el club';
        }
        return throwError(() => new Error(errorMsg));
      })
    ));
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

  // Crear una nueva instalacion
  createInstalacion(instalacion: any): Promise<any> {
    return lastValueFrom(this.http.post(`${this.apiUrl}/guardarInstalacion`, instalacion).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Error inesperado';
        if (error.status === 400) {
          // Si el error es un 400 (Bad Request), extraemos el mensaje del backend
          errorMsg = error.error || 'Error al crear la instalación';
        }
        return throwError(() => new Error(errorMsg));
      })
    ));
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
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMsg = 'Ocurrió un error inesperado';
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMsg = `Error del cliente: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMsg = error.error?.message || `Error del servidor: ${error.status}`;
    }
    return throwError(() => new Error(errorMsg)); 
  }

}
