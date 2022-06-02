import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantGarlicPage } from './plant-garlic.page';

const routes: Routes = [
  {
    path: '',
    component: PlantGarlicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantGarlicPageRoutingModule {}
