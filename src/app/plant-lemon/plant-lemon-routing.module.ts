import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantLemonPage } from './plant-lemon.page';

const routes: Routes = [
  {
    path: '',
    component: PlantLemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantLemonPageRoutingModule {}
