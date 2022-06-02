import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantBlackberryPage } from './plant-blackberry.page';

const routes: Routes = [
  {
    path: '',
    component: PlantBlackberryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantBlackberryPageRoutingModule {}
