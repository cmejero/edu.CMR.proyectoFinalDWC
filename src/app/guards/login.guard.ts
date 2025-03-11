import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { map } from 'rxjs';
import { ApiService } from '../servicios/api.service';

export const loginGuard: CanActivateFn = (route, state) => {
  //const auth = inject(Auth); // Inyectamos el servicio de autenticación de Firebase
  //const miApiService = inject(ApiService);
  const router = inject(Router);
  console.log(route.data['requiredType']);

  const userType = localStorage.getItem('userType'); // Obtenemos el tipo de usuario del localStorage

  // Verificar si hay un tipo de usuario en el almacenamiento local

  if (userType) {
    // Verificar que el tipo de usuario tenga acceso a esta ruta
    const requiredType = route.data['requiredType']; // Obtener el tipo requerido desde las rutas

    if (userType === requiredType) {
      return true; // Acceso permitido
    } else {
      router.navigate(['/login']); // Redirigir si el tipo no coincide
      return false;
    }
  } else {
    // Si no hay tipo de usuario, redirigir al login
    router.navigate(['/login']);
    return false;
  }
};
