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
  
  searchPlant(){

    let plantsUrls = [
      "../plant-garlic/plant-garlic.page.html",
      "../plant-lemon/plant-lemon.page.html",
      "../plant-cherry-tomato/plant-cherry-tomato.page.html",
      "../plant-potato/plant-potato.page.html",
      "../plant-carrot/plant-carrot.page.html",
      "../plant-blackberry/plant-blackberry.page.html"
    ]

    let sTerm = String((<HTMLInputElement>document.getElementById('searchbar')).value);

      if (sTerm == "ajo"){
        location.href = plantsUrls[0];
      } 
      else if (sTerm == "limón") {
        location.href = plantsUrls[1];
      } 
      else if (sTerm == "jitomate cherry" || sTerm == "jitomate" || sTerm == "cherry") {
        location.href = plantsUrls[2];
      } 
      else if (sTerm == "papa") {
        location.href = plantsUrls[3];
      } 
      else if (sTerm == "zanahoria") {
        location.href = plantsUrls[4];
      } 
      else if (sTerm == "zarzamora") {
        location.href = plantsUrls[5];
      }
    


  }

}
