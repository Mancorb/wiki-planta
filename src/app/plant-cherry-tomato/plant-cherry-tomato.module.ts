import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantCherryTomatoPageRoutingModule } from './plant-cherry-tomato-routing.module';

import { PlantCherryTomatoPage } from './plant-cherry-tomato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantCherryTomatoPageRoutingModule
  ],
  declarations: [PlantCherryTomatoPage]
})
export class PlantCherryTomatoPageModule {}
