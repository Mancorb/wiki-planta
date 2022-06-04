import { Component, OnInit } from '@angular/core';
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

  email: string = "";
  pwd: string = "";
  users: User[] = userData;

  constructor() { }

  ngOnInit() {
    this.onSubmit();
  }

  onSubmit() {
    for (let i = 0; i < this.users.length; i++){
      if(this.email==this.users[i].email && this.pwd==this.users[i].password){
        //Success in login
      }
    }
  }

}
