import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r3',
  templateUrl: './r3.component.html',
  styleUrls: ['./r3.component.css']
})
export class R3Component implements OnInit {
  mostrar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ver(){
    this.mostrar = true
  }
  ocultar(){
    this.mostrar = false;
  }
}
