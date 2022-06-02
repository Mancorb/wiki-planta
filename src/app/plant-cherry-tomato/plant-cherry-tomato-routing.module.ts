import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantCherryTomatoPage } from './plant-cherry-tomato.page';

const routes: Routes = [
  {
    path: '',
    component: PlantCherryTomatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantCherryTomatoPageRoutingModule {}
