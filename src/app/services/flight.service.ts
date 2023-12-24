// flight.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/flights`);
  }

  getAllAirports(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/airports`);
  }
}
