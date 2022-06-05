import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  getWeatherData(): Observable<any> {
    let lat = 20;
    let lon = -100;
    let apiId = '9b844bdd7f0dfadeac7298d3dbeb4607';
    let queryString = 'https://api.openweathermap.org/data/2.5/weather?lat=20&lon=-100&appid=9b844bdd7f0dfadeac7298d3dbeb4607';
    
    return this.http.get(queryString);
  
  }
}
