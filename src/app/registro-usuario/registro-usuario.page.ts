import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage-service.service';



@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  email="";
  password="";

  constructor(
    private storage: StorageService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  Register(){
    if(this.email!="" && this.password!=""){
      this.storage.set(this.email, this.password);
      console.log("Account registered with ",this.email," , ",this.password);
      this.navCtrl.navigateForward(['inicio-sesion']);
    }
  }
}
