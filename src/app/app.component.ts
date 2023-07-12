import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private weatherService:WeatherService){}
  cityName:string = ""
  weatherData?:WeatherData

  formSubmitData(data:any){
    this.getWeatherData(this.cityName)
    this.cityName=''
  }

  
  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>{
        this.weatherData = response
        console.log(response);
      }
    })
  }

  
  title = 'weather-app-angular';
}
