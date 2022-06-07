function searchPlant(){
    
  let plantsUrls = [
    "../plant-garlic/plant-garlic.page.html",
    "../plant-lemon/plant-lemon.page.html",
    "../plant-cherry-tomato/plant-cherry-tomato.page.html",
    "../plant-potato/plant-potato.page.html",
    "../plant-carrot/plant-carrot.page.html",
    "../plant-blackberry/plant-blackberry.page.html"
  ]
  
  let sTerm = document.search_bar.searchbar.value;
      sTerm = sTerm.toLowercase();

      if (sTerm == "ajo"){
        location.href = this.plantsUrls[0];
      } 
      else if (sTerm == "limón") {
        location.href = this.plantsUrls[1];
      } 
      else if (sTerm == "jitomate cherry" || sTerm == "jitomate" || sTerm == "cherry") {
        location.href = this.plantsUrls[2];
      } 
      else if (sTerm == "papa") {
        location.href = this.plantsUrls[3];
      } 
      else if (sTerm == "zanahoria") {
        location.href = this.plantsUrls[4];
      } 
      else if (sTerm == "zarzamora") {
        location.href = this.plantsUrls[5];
      }
  /**
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
      */
  }
