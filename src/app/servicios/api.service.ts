import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, lastValueFrom, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { Usuario } from '../shared/modelos/usuario';
import { Club } from '../shared/modelos/club';
import { Instalacion } from '../shared/modelos/instalacion';
import { DatosLoginService } from './datos-login.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:9527/api';

  usuario!: Usuario;
  club!: Club;
  instalacion!: Instalacion;
  datosLogin = inject(DatosLoginService);

  constructor(private http: HttpClient, private router: Router) {}

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
  getClub(id: string): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/club/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getClubes(): Observable<Club[]> {
    return this.http.get<Club[]>(`${this.apiUrl}/mostrarClubes`).pipe(
      catchError(this.handleError)
    );
  }

  createClub(club: any): Promise<any> {
    return lastValueFrom(this.http.post(`${this.apiUrl}/guardarClub`, club).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Error inesperado';
        if (error.status === 400) {
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
  getInstalaciones(): Observable<Instalacion[]> {
    return this.http.get<Instalacion[]>(`${this.apiUrl}/mostrarInstalaciones`).pipe(
      catchError(this.handleError)
    );
  }

  getInstalacion(id: string): Observable<Instalacion> {
    return this.http.get<Instalacion>(`${this.apiUrl}/instalacion/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createInstalacion(instalacion: any): Promise<any> {
    return lastValueFrom(this.http.post(`${this.apiUrl}/guardarInstalacion`, instalacion).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Error inesperado';
        if (error.status === 400) {
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
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMsg = 'Ocurrió un error inesperado';
    if (error.error instanceof ErrorEvent) {
      errorMsg = `Error del cliente: ${error.error.message}`;
    } else {
      errorMsg = error.error?.message || `Error del servidor: ${error.status}`;
    }
    return throwError(() => new Error(errorMsg));
  }
}
