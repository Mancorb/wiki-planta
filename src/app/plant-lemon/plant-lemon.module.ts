import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantLemonPageRoutingModule } from './plant-lemon-routing.module';

import { PlantLemonPage } from './plant-lemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantLemonPageRoutingModule
  ],
  declarations: [PlantLemonPage]
})
export class PlantLemonPageModule {}
