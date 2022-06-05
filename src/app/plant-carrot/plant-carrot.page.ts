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
  private calories;
  NumPlants;

  private currentDate;
  private harvestDate;
  private ripeningdDays;

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

  getCalories(Ncalories: number){
    console.log(this.NumPlants);
    if (this.NumPlants==null){
      this.calories =" 0 ";
    }else{
      this.calories = this.NumPlants*Ncalories;
    }
  }

  harvestTime(NharvestDays: number){
    const date = new Date();
    const harvest = new Date();
    harvest.setDate(harvest.getDate() + NharvestDays);
    let currentDate = [date.getDate(), date.getMonth()+1, date.getFullYear()];
    let harvestDate = [harvest.getDate(), harvest.getMonth()+1, harvest.getFullYear()];
    
    this.currentDate = "Fecha Actual: " + currentDate[0] + "/" + currentDate[1] + "/" + currentDate[2];
    this.ripeningdDays = "Días de Maduración: " + NharvestDays;
    this.harvestDate = "Fecha Cosecha Aprox: " + harvestDate[0] + "/" + harvestDate[1] + "/" + harvestDate[2];
  }

}