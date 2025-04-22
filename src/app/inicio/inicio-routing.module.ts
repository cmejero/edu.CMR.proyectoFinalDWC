import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes principales del módulo Inicio
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { AltaClubComponent } from './alta-club/alta-club.component';
import { AltaInstalacionComponent } from './alta-instalacion/alta-instalacion.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { LoginComponent } from './login/login.component';

// Define las rutas del módulo Inicio
const routes: Routes = [
  {
    path: '',  // Ruta raíz
    component: LandingPageComponent,  // El componente que se carga cuando se accede al módulo Inicio
  },
  {
    path: 'login',  // Ruta independiente para Login
    component: LoginComponent
  },
  {
    path: 'menuInicio',  // Ruta para el menú de inicio
    component: MenuInicioComponent
  },
  {
    path: 'altaClub',  // Ruta para el componente de alta de club
    component: AltaClubComponent
  },
  {
    path: 'altaInstalacion',  // Ruta para el componente de alta de instalación
    component: AltaInstalacionComponent
  },
  {
    path: 'altaUsuario',  // Ruta para el componente de alta de usuario
    component: AltaUsuarioComponent
  }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Usamos forChild para rutas específicas del módulo
  exports: [RouterModule]  // Exporta el RouterModule para que las rutas sean accesibles
})
export class InicioRoutingModule { }
