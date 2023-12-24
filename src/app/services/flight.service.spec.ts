import { TestBed } from '@angular/core/testing';
import { FlightService } from './flight.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FlightService', () => {
  let service: FlightService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService],
    });
    service = TestBed.inject(FlightService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock flights', () => {
    const mockFlights = [
          {
            "id": 1,
            "airline": "Turkish Airlines",
            "departureCity": "Istanbul",
            "arrivalCity": "Ankara",
            "departureTime": "2023-01-01T12:00:00Z",
            "arrivalTime": "2023-01-01T13:00:00Z",
            "durationMinutes": 60,
            "price": 150.0
          },
          {
            "id": 2,
            "airline": "Pegasus Airlines",
            "departureCity": "Izmir",
            "arrivalCity": "Antalya",
            "departureTime": "2023-01-02T14:00:00Z",
            "arrivalTime": "2023-01-02T15:30:00Z",
            "durationMinutes": 90,
            "price": 120.0
          },
          {
            "id": 3,
            "airline": "AnadoluJet",
            "departureCity": "Adana",
            "arrivalCity": "Trabzon",
            "departureTime": "2023-01-03T10:30:00Z",
            "arrivalTime": "2023-01-03T12:30:00Z",
            "durationMinutes": 120,
            "price": 180.0
          },
          {
            "id": 4,
            "airline": "SunExpress",
            "departureCity": "Dalaman",
            "arrivalCity": "Bodrum",
            "departureTime": "2023-01-04T16:45:00Z",
            "arrivalTime": "2023-01-04T17:30:00Z",
            "durationMinutes": 45,
            "price": 90.0
          },
          {
            "id": 5,
            "airline": "AtlasGlobal",
            "departureCity": "Eskisehir",
            "arrivalCity": "Samsun",
            "departureTime": "2023-01-05T08:15:00Z",
            "arrivalTime": "2023-01-05T09:45:00Z",
            "durationMinutes": 90,
            "price": 160.0
          },
          {
            "id": 6,
            "airline": "Onur Air",
            "departureCity": "Gaziantep",
            "arrivalCity": "Diyarbakir",
            "departureTime": "2023-01-06T11:30:00Z",
            "arrivalTime": "2023-01-06T12:30:00Z",
            "durationMinutes": 60,
            "price": 110.0
          },
          {
            "id": 7,
            "airline": "Borajet",
            "departureCity": "Van",
            "arrivalCity": "Erzurum",
            "departureTime": "2023-01-07T09:00:00Z",
            "arrivalTime": "2023-01-07T10:30:00Z",
            "durationMinutes": 90,
            "price": 140.0
          },
          {
            "id": 8,
            "airline": "Freebird Airlines",
            "departureCity": "Kayseri",
            "arrivalCity": "Nevsehir",
            "departureTime": "2023-01-08T13:45:00Z",
            "arrivalTime": "2023-01-08T14:15:00Z",
            "durationMinutes": 30,
            "price": 80.0
          },
          {
            "id": 9,
            "airline": "Corendon Airlines",
            "departureCity": "Bursa",
            "arrivalCity": "Isparta",
            "departureTime": "2023-01-09T17:00:00Z",
            "arrivalTime": "2023-01-09T18:30:00Z",
            "durationMinutes": 90,
            "price": 170.0
          },
          {
            "id": 10,
            "airline": "Anex Tour",
            "departureCity": "Hatay",
            "arrivalCity": "Mardin",
            "departureTime": "2023-01-10T19:15:00Z",
            "arrivalTime": "2023-01-10T20:00:00Z",
            "durationMinutes": 45,
            "price": 100.0
          }
        ];

        service.getFlights().subscribe((flights) => {
          expect(flights).toEqual(mockFlights);
        });
    
        const req = httpTestingController.expectOne('http://localhost:3000/flights');
        expect(req.request.method).toEqual('GET');
    
        req.flush(mockFlights);
      });
    });