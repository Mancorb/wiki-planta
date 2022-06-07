function searchPlant(){
  
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