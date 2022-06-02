import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantBlackberryPageRoutingModule } from './plant-blackberry-routing.module';

import { PlantBlackberryPage } from './plant-blackberry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantBlackberryPageRoutingModule
  ],
  declarations: [PlantBlackberryPage]
})
export class PlantBlackberryPageModule {}
