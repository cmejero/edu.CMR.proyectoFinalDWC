import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DatosLoginService } from '../servicios/datos-login.service'; // Importa tu servicio
import { map, Observable } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const datosLoginService = inject(DatosLoginService);

  const userType$: Observable<string | null> = datosLoginService.getTipoUsuario(); // Obtenemos el tipo de usuario desde el servicio

  // Suscríbete a `userType$` para obtener el valor actual de tipo de usuario
  return userType$.pipe(
    map(userType => {
      if (state.url === '/landingPage') {
        return true; // Permitir acceso a la landing page sin necesidad de autenticación
      }

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
    })
  );
};
