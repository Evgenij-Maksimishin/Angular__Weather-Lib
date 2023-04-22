import { NgModule } from '@angular/core';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    WeatherCardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    WeatherCardComponent
  ]
})
export class WeatherLibModule { }
