import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }

  getCurrentWeather(){
    return this.http.get(`http://api.weatherstack.com/current?access_key=35293570e29542856ffa0ac84401c272&query=New York`);
  }
}
