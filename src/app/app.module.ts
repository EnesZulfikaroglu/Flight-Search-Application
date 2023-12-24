import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { FlightModule } from './modules/flight/flight.module'; // Değişen satır

@NgModule({
  declarations: [AppComponent],
imports: [BrowserModule, HttpClientModule, /*FlightModule*/], // FlightModule eklenen satır
  bootstrap: [AppComponent],
})
export class AppModule {}
