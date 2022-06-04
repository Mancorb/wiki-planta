import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import userData from '../users.json';

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
    public navCtrl: NavController,
  ){}


  ngOnInit() {

  }

  onSubmit() {
    for (let i = 0; i < this.users.length; i++){
      if(this.Email==this.users[i].email && this.Pass==this.users[i].password){
        console.log("Success");
        this.Result = "";
        this.Email = "";
        this.Pass = "";
        this.navCtrl.navigateForward(['home']);
      }else{
        this.Result = "Correo o contraseña incorrecta"
      }
    }
  }

}
