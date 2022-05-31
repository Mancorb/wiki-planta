import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantPotatoPage } from './plant-potato.page';

const routes: Routes = [
  {
    path: '',
    component: PlantPotatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantPotatoPageRoutingModule {}
