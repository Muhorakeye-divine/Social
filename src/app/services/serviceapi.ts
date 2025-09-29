import { Injectable,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airline } from '../models/airline';

@Injectable({
  providedIn: 'root'
})
export class Serviceapi {
  private apiUrl ='https://api.api-ninjas.com/v1/airlines';
  private http = inject(HttpClient);

  getAirlines(name:string): Observable<Airline[]>{
    return this.http.get<Airline[]>(`${this.apiUrl}?name=${name}`);
  }
}
