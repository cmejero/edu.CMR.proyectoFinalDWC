import { Routes } from '@angular/router';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario/detalle-usuario.component';
import { AltaUsuarioComponent } from './usuario/alta-usuario/alta-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { DetalleClubComponent } from './club/detalle-club/detalle-club.component';
import { AltaClubComponent } from './club/alta-club/alta-club.component';
import { ListaClubComponent } from './club/lista-club/lista-club.component';
import { DetalleInstalacionComponent } from './instalacion/detalle-instalacion/detalle-instalacion.component';
import { AltaInstalacionComponent } from './instalacion/alta-instalacion/alta-instalacion.component';
import { ListaInstalacionComponent } from './instalacion/lista-instalacion/lista-instalacion.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { ClubSesionComponent } from './club-sesion/club-sesion.component';
import { InstalacionSesionComponent } from './instalacion-sesion/instalacion-sesion.component';
import { UsuarioSesionComponent } from './usuario-sesion/usuario-sesion.component';

export const routes: Routes = [
  // Rutas de detalle y alta para Usuario
  { path: 'detalleUsuario/:id', component: DetalleUsuarioComponent },
  { path: 'altaUsuario', component: AltaUsuarioComponent },
  { path: 'altaUsuario/:id', component: AltaUsuarioComponent },
  { path: 'listaUsuario', component: ListaUsuarioComponent },

  // Rutas de detalle y alta para Club
  { path: 'detalleClub/:id', component: DetalleClubComponent, canActivate: [loginGuard], data: { requiredType: 'club' } },
  { path: 'altaClub', component: AltaClubComponent, canActivate: [loginGuard], data: { requiredType: 'club' } },
  { path: 'altaClub/:id', component: AltaClubComponent, canActivate: [loginGuard], data: { requiredType: 'club' } },
  { path: 'listaClub', component: ListaClubComponent, canActivate: [loginGuard], data: { requiredType: 'club' } },

  // Rutas de detalle y alta para Instalación
  { path: 'detalleInstalacion/:id', component: DetalleInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'instalacion' } },
  { path: 'altaInstalacion', component: AltaInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'instalacion' } },
  { path: 'altaInstalacion/:id', component: AltaInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'instalacion' } },
  { path: 'listaInstalacion', component: ListaInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'instalacion' } },

  // Ruta de administración (según sea necesario)
  { path: 'admin', loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule), canActivate: [loginGuard], data: { requiredType: 'administrador' } },

  // Ruta para login
  { path: 'login', component: LoginComponent },

  // Rutas para los diferentes dashboards basados en tipo de usuario
  { path: 'dashboard/administrador', component: ListaUsuarioComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' } },
  { path: 'dashboard/club', component: ClubSesionComponent, canActivate: [loginGuard], data: { requiredType: 'club' } },
  { path: 'dashboard/usuario', component: UsuarioSesionComponent, canActivate: [loginGuard], data: { requiredType: 'usuario' } },
  { path: 'dashboard/instalacion', component: InstalacionSesionComponent, canActivate: [loginGuard], data: { requiredType: 'instalacion' } },

  // Redirige a login por defecto si no hay una ruta válida
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
