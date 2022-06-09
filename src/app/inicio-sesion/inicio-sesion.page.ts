import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import userData from '../users.json';
import {Storage} from '@ionic/storage';
import { StorageService } from '../services/storage-service.service';

interface User {
  id:Number;
  email:String;
  password:String;
}

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})

export class InicioSesionPage implements OnInit {

  Email = "";
  Pass = "";
  users: User[] = userData;
  Result = "";

  constructor(
    public storage: StorageService,
    public navCtrl: NavController,
  ){}


  ngOnInit() {

  }


  onSubmit() {
    this.storage.get(this.Email).then(result => {
      if (result != null) {
        console.log('success: '+ result);
        if(result==result){
          this.navCtrl.navigateForward(['home']);
        }
      }
      }).catch(e => {
      console.log('error: '+ e);
      // Handle errors here
    });

    /* for (let i = 0; i < this.users.length; i++){
      if(this.Email==this.users[i].email && this.Pass==this.users[i].password){
        console.log("Success");
        this.Result = "";
        this.Email = "";
        this.Pass = "";
        this.navCtrl.navigateForward(['home']);
      }else{
        this.Result = "Correo o contraseña incorrecta"
      }
    } */
  }

}
