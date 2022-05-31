import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantCarrotPage } from './plant-carrot.page';

const routes: Routes = [
  {
    path: '',
    component: PlantCarrotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantCarrotPageRoutingModule {}
