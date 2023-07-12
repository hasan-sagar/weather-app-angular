import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    const url:string = environment.baseurl
    return this.http.get<WeatherData>(url,{
      params:new HttpParams().set('q',cityName)
      .set('units','metric').set('mode','json')
      .set('appid',environment.appid)
    })
  }

}
