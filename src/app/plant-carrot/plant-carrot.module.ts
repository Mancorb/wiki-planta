import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantCarrotPageRoutingModule } from './plant-carrot-routing.module';

import { PlantCarrotPage } from './plant-carrot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantCarrotPageRoutingModule
  ],
  declarations: [PlantCarrotPage]
})
export class PlantCarrotPageModule {}
