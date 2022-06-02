import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-plant-carrot',
  templateUrl: './plant-carrot.page.html',
  styleUrls: ['./plant-carrot.page.scss'],
})
export class PlantCarrotPage implements OnInit {

  private res;
  private date;
  private judgement;

  constructor(
    private weatherAPI: WeatherService
  ) { }

  ngOnInit() {
  }


  checkConditions(){
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      this.date= new Date().toISOString();
      this.date=this.date.substr(5,5)
      this.date=parseInt(this.date.substr(0,2));
      console.log(this.res.weather[0].description);
      console.log(this.res.main.temp - 273.15);
      console.log(this.date);
      if ((this.res.main.temp - 273.15) > 12 && this.date>3 && this.date<9) {
        this.judgement = "Si se recomienda plantar";
      }else{
        this.judgement = "No se recomienda plantar"
      }

    });
    
  }
}
