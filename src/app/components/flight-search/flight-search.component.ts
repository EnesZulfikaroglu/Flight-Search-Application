// flight-search.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  departureAirport: string = '';
  arrivalAirport: string = '';
  departureDate: Date = new Date();
  returnDate: Date = new Date();
  oneWay: boolean = false;
  flights: any[] = []; // Burada flights özelliğini tanımladık

  constructor(private flightService: FlightService) {
    this.departureDate.setHours(0, 0, 0, 0);
    this.returnDate.setHours(0, 0, 0, 0);
  }

  searchFlights() {
    this.flightService.getFlights().subscribe((flights: any[]) => {
      this.flights = flights;
      this.searchEvent.emit(this.flights);
    });
  }
}
