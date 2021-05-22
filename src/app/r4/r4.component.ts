import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-r4',
  templateUrl: './r4.component.html',
  styleUrls: ['./r4.component.css']
})
export class R4Component implements OnInit {

  currentWeather;

  constructor(private apiRest:ApiRestService) { }

  ngOnInit(): void {
    this.apiRest.getCurrentWeather().subscribe((data)=>{
      this.currentWeather = data;
    })
  }

}
