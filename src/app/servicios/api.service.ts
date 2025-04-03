import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Auth, signOut, user, User } from '@angular/fire/auth';

import { Usuario } from '../shared/modelos/usuario';
import { Club } from '../shared/modelos/club';
import { Instalacion } from '../shared/modelos/instalacion';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:9527/api';

  usuario!: Usuario;
  club!: Club;
  instalacion!: Instalacion;
  user$: Observable<User | null>;

  // Ya no es necesario inyectar Auth aquí manualmente
  constructor(private http: HttpClient, private router: Router, private auth: Auth) {
    this.user$ = user(this.auth);
  }

  // Métodos de autenticación
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }


  logout() {
    // Eliminar el token de localStorage o sessionStorage
    localStorage.removeItem('auth_token');  // Si usas localStorage

    // Realizar una solicitud para invalidar la sesión en el backend
    this.http.delete(`${this.apiUrl}/logout`).subscribe(
      response => {
        console.log('Sesión cerrada');
        // Redirigir al usuario a la página de login, por ejemplo
      },
      error => {
        console.error('Error al cerrar sesión', error);
      }
    );
  }


  // Métodos para la API de usuarios
  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/${id}`);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/mostrarUsuarios`);
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardarUsuario`, usuario);
  }

  updateUsuario(id: string, usuario: Usuario): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/modificarUsuario/${id}`, usuario);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarUsuario/${id}`);
  }

  // Métodos para Club
  getClub(id: string): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/club/${id}`);
  }

  getClubes(): Observable<Club[]> {
    return this.http.get<Club[]>(`${this.apiUrl}/mostrarClubes`);
  }

  createClub(club: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardarClub`, club);
  }

  updateClub(id: string, club: Club): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/modificarClub/${id}`, club);
  }

  deleteClub(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminarClub/${id}`);
  }

  // Métodos para Instalaciones
  getInstalacion(id: string): Observable<Instalacion> {
    return this.http.get<Instalacion>(`${this.apiUrl}/instalacion/${id}`);
  }

  getInstalaciones(): Observable<Instalacion[]> {
    return this.http.get<Instalacion[]>(`${this.apiUrl}/mostrarInstalaciones`);
  }

  createInstalacion(instalacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardarInstalacion`, instalacion);
  }

  updateInstalacion(id: string, instalacion: Instalacion): Observable<any> {
    return this.http.put<void>(`${this.apiUrl}/modificarInstalacion/${id}`, instalacion);
  }

  deleteInstalacion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarInstalacion/${id}`);
  }
}
