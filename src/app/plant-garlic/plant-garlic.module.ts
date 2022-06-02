import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantGarlicPageRoutingModule } from './plant-garlic-routing.module';

import { PlantGarlicPage } from './plant-garlic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantGarlicPageRoutingModule
  ],
  declarations: [PlantGarlicPage]
})
export class PlantGarlicPageModule {}
