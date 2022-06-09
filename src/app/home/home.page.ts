import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  busqueda = "";

  constructor(
    public navCtrl: NavController,
  ){}

  _ionChange(event){
    console.log(event.detail.value);
  }
  
  filtrarBusqueda(){
    this.busqueda = this.busqueda.toLowerCase( )
    if (this.busqueda=="zarzamora"){
      this.navCtrl.navigateForward(['plant-blackberry']);
    }
  }

}
