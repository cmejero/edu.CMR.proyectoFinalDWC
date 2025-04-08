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
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { InicioJugadorComponent } from './inicio-jugador/inicio-jugador.component';
import { InicioClubComponent } from './inicio-club/inicio-club.component';
import { MenuInicioComponent } from './menu/menu-inicio/menu-inicio.component';
import { MenuJugadorComponent } from './menu/menu-jugador/menu-jugador.component';
import { MenuAdminComponent } from './menu/menu-admin/menu-admin.component';
import { MenuClubComponent } from './menu/menu-club/menu-club.component';
import { MenuInstalacionComponent } from './menu/menu-instalacion/menu-instalacion.component';
import { InicioInstalacionComponent } from './inicio-instalacion/inicio-instalacion.component';


export const routes: Routes = [
   // Redirige al landing page cuando la ruta es vacía


  // Rutas de detalle y alta para Usuario
  { path: 'detalleUsuario/:id', component: DetalleUsuarioComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' }},
  { path: 'altaUsuario', component: AltaUsuarioComponent },
  { path: 'altaUsuario/:id', component: AltaUsuarioComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' }},
  { path: 'listaUsuario', component: ListaUsuarioComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' }},

  // Rutas de detalle y alta para Club
  { path: 'detalleClub/:id', component: DetalleClubComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' } },
  { path: 'altaClub', component: AltaClubComponent},
  { path: 'altaClub/:id', component: AltaClubComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' } },
  { path: 'listaClub', component: ListaClubComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' } },

  // Rutas de detalle y alta para Instalación
  { path: 'detalleInstalacion/:id', component: DetalleInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' } },
  { path: 'altaInstalacion', component: AltaInstalacionComponent },
  { path: 'altaInstalacion/:id', component: AltaInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' } },
  { path: 'listaInstalacion', component: ListaInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' } },


  // Ruta para login
  { path: 'login', component: LoginComponent },


  { path: 'landingPage', component: LandingPageComponent },
  { path: 'inicioAdmin', component: InicioAdminComponent , canActivate: [loginGuard], data: { requiredType: 'administrador' }},
  { path: 'inicioJugador', component: InicioJugadorComponent, canActivate: [loginGuard], data: { requiredType: 'jugador' } },
  { path: 'inicioClub', component: InicioClubComponent, canActivate: [loginGuard], data: { requiredType: 'club' } },
  { path: 'inicioInstalacion', component: InicioInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'instalacion' } },

  // Rutas para los menus de la cabecera

  { path: 'menuInicio', component: MenuInicioComponent },
  { path: 'menuJugador', component: MenuJugadorComponent, canActivate: [loginGuard], data: { requiredType: 'jugador' } },
  { path: 'menuAdmin', component: MenuAdminComponent, canActivate: [loginGuard], data: { requiredType: 'administrador' }},
  { path: 'menuClub', component: MenuClubComponent, canActivate: [loginGuard], data: { requiredType: 'club' } },
  { path: 'menuInstalacion', component: MenuInstalacionComponent, canActivate: [loginGuard], data: { requiredType: 'instalacion' } },


  { path: '*', redirectTo: '/landingPage', pathMatch: 'full' }

];
