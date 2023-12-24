// flight-search.component.ts

import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
updateState() {
  this.oneWay = !this.oneWay
}

  @Output() searchEvent = new EventEmitter<any>();

  departureAirport: string = '';
  arrivalAirport: string = '';
  departureDate: Date = new Date();
  returnDate: Date = new Date();
  oneWay: boolean = false;
  flights: any[] = []; // Burada flights özelliğini tanımladık
  airports: any[] = []; // Burada flights özelliğini tanımladık
  filteredFlights : any[] = [];
  constructor(private flightService: FlightService) {
    this.departureDate.setHours(0, 0, 0, 0);
    this.returnDate.setHours(0, 0, 0, 0);
  }
  ngOnInit(): void {
    this.searchAirports();
    this.searchFlights();
  }

  signUpForm = new FormGroup({

    departureAirports: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ])
    ,

    arrivalAirports: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),

    departureDate: new FormControl("", [
      Validators.required,
    ]),

    arrivalDate: new FormControl("", [
      Validators.required,
    ]),
  
  })
    
  onFormSubmit() {
    console.log(this.signUpForm.value);
    this.filteredFlights = []
    var formValues = this.signUpForm.value;

    
    if(formValues.departureAirports && formValues.arrivalAirports){
      for(var flight of this.flights){
        var departureAirportCode = formValues.departureAirports.split(" ")[1]
        var arrivalAirportCode = formValues.arrivalAirports.split(" ")[1]
        if(flight.DepartureAirport == departureAirportCode && flight.arrivalAirport == arrivalAirportCode ){
          this.filteredFlights.push(flight);
          console.log("flght = ",this.filteredFlights)
        }
      }
    }
}

  searchFlights() {
    this.flightService.getFlights().subscribe((flights: any[]) => {
      this.flights = flights;
      this.searchEvent.emit(this.flights);
      console.log(this.flights)
    });
  }

  searchAirports() {
    this.flightService.getAllAirports().subscribe((airports: any[]) => {
      this.airports = airports;
      this.searchEvent.emit(this.airports);
    });
  }



  myControl = new FormControl();
  options = [
    { value: 'option1', viewValue: 'Option 1' },
    { value: 'option2', viewValue: 'Option 2' },
    { value: 'option3', viewValue: 'Option 3' },
  ];

  filteredOptions = this.options;

  applyFilter(filterValue: string) {
    this.filteredOptions = this.options.filter(option =>
      option.viewValue.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
