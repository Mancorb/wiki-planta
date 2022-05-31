import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantPotatoPageRoutingModule } from './plant-potato-routing.module';

import { PlantPotatoPage } from './plant-potato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantPotatoPageRoutingModule
  ],
  declarations: [PlantPotatoPage]
})
export class PlantPotatoPageModule {}
