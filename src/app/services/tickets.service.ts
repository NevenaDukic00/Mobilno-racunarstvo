import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url:string = "http://localhost:8000/api/";

  constructor(private http: HttpClient,private authService:AuthService) { }

  getTickets():Observable<any>{
    
    return this.http.get(this.url + "tickets");
  }

}
