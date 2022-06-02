import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})

export class InicioSesionPage implements OnInit {

  email: string = "";
  pwd: string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    //Falta Script de Inicio de Sesión!
  }

}
