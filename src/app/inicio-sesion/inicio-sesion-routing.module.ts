import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUsuarioPage } from './inicio-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUsuarioPageRoutingModule {}
