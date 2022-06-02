import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-plant-garlic',
  templateUrl: './plant-garlic.page.html',
  styleUrls: ['./plant-garlic.page.scss'],
})
export class PlantGarlicPage implements OnInit {
  private res;
  private date;
  private judgement;
  private calories;
  NumPlants;

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
      if (this.res.weather[0].description=="cloudy" && (this.res.main.temp - 273.15) < 16  && this.date>8 && this.date<10) {
        this.judgement = "Si se recomienda plantar";
      }else{
        this.judgement = "No se recomienda plantar, temperatura < 16ºC, durante el otoño"
      }

    });
    
  }

  getCalories(Ncalories: number){
    console.log(this.NumPlants);
    if (this.NumPlants==null){
      this.calories =" 0 ";
    }else{
      this.calories = this.NumPlants*Ncalories;
    }
  }
}
