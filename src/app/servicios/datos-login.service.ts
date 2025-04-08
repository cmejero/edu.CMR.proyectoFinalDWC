
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosLoginService {

  private tokenSubject = new BehaviorSubject<string | null>(null);
  private tipoUsuarioSubject = new BehaviorSubject<string | null>(null);
  private datosUsuarioSubject = new BehaviorSubject<any>(null);

  setToken(token: string): void {
    this.tokenSubject.next(token);
  }

  setTipoUsuario(tipo: string): void {
    this.tipoUsuarioSubject.next(tipo);
  }

  setDatosUsuario(datos: any): void {
    this.datosUsuarioSubject.next(datos);
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  getTipoUsuario(): Observable<string | null> {
    return this.tipoUsuarioSubject.asObservable();
  }

  getDatosUsuario(): Observable<any> {
    return this.datosUsuarioSubject.asObservable();
  }

  // Si lo querés también como valor directo sin suscripción
  get token(): string | null {
    return this.tokenSubject.value;
  }

  get tipoUsuario(): string | null {
    return this.tipoUsuarioSubject.value;
  }

  get datosUsuario(): any {
    return this.datosUsuarioSubject.value;
  }

  cerrarSesion(): void {
    this.tokenSubject.next(null);
    this.tipoUsuarioSubject.next(null);
    this.datosUsuarioSubject.next(null);
    console.log('Sesión cerrada correctamente.');
  }

}
