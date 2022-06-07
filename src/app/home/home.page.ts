import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  plantsUrls = [
    "../plant-garlic/plant-garlic.page.html",
    "../plant-lemon/plant-lemon.page.html",
    "../plant-cherry-tomato/plant-cherry-tomato.page.html",
    "../plant-potato/plant-potato.page.html",
    "../plant-carrot/plant-carrot.page.html",
    "../plant-blackberry/plant-blackberry.page.html"
  ]

  _ionChange(event){
    console.log(event.detail.value);
  }

}
