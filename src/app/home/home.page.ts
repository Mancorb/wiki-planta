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
    let sTerm = document.search_bar.searchbar.value;
    sTerm = sTerm.toLowercase();

    if (sTerm == "ajo"){
      window.location.assign(this.plantsUrls[0]);
    } 
    else if (sTerm == "limón") {
      window.location.assign(this.plantsUrls[1]);
    } 
    else if (sTerm == "jitomate cherry" || sTerm == "jitomate" || sTerm == "cherry") {
      window.location.assign(this.plantsUrls[2]);
    } 
    else if (sTerm == "papa") {
      window.location.assign(this.plantsUrls[3]);
    } 
    else if (sTerm == "zanahoria") {
      window.location.assign(this.plantsUrls[4]);
    } 
    else if (sTerm == "zarzamora") {
      window.location.assign(this.plantsUrls[5]);
    } 
  }

}
