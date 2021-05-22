import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';

@NgModule({
  declarations: [
    AppComponent,
    R2Component,
    R3Component,
    R4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
