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
    this.busqueda = this.busqueda.toLowerCase();
    
    if (this.busqueda=="zarzamora" || this.busqueda=="zarza" || this.busqueda=="mora"){
      this.navCtrl.navigateForward(['plant-blackberry']);

    } else if (this.busqueda=="zanahoria"){
      this.navCtrl.navigateForward(['plant-carrot']);

    } else if (this.busqueda=="jitomate cherry" || this.busqueda=="jitomate" || this.busqueda=="cherry"){
      this.navCtrl.navigateForward(['plant-cherry-tomato']);

    } else if (this.busqueda=="ajo"){
      this.navCtrl.navigateForward(['plant-garlic']);

    } else if (this.busqueda=="limón" || this.busqueda=="limon"){
      this.navCtrl.navigateForward(['plant-lemon']);

    } else if (this.busqueda=="papa" || this.busqueda=="patata"){
      this.navCtrl.navigateForward(['plant-potato']);
    }
  }

}
