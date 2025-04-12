import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes que quieras usar en las rutas
import { MenuComponent } from './menu/menu.component'; // Si necesitas un componente en la ruta
import { FooterComponent } from './footer/footer.component'; // O el FooterComponent

const routes: Routes = [
  // Aquí puedes agregar rutas específicas si es necesario para el SharedModule
  { path: '', component: MenuComponent },  // Redirige a MenuComponent por defecto
  // Otras rutas pueden ir aquí, por ejemplo:
  // { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configura las rutas para este módulo
  exports: [RouterModule]  // Asegúrate de exportar RouterModule para usar las rutas
})
export class SharedRoutingModule {}
