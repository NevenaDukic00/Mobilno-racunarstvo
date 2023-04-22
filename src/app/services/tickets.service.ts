import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../interfaces/movie';
import { Ticket } from '../interfaces/ticket';
import { TicketNetwork } from '../interfaces/ticket-network';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url:string = "http://localhost:8000/api/";
  currentMovie:Movie;
  res:Observable<any>;
  constructor(private http: HttpClient,private authService:AuthService) { }

  getTickets(id:number):Observable<any>{
    return this.http.get(this.url + "tickets/"+id);
  }
  setCurrentMovie(movie:Movie){
    this.currentMovie = movie;
  }
  getCurrentMovie(){
    return this.currentMovie;
  }
  bookTickets(ticket:TicketNetwork){
    return this.http.post(this.url + "tickets",ticket);
     
  }
  getMyMovies():Observable<any>{
    return this.http.get(this.url + "tickets/");
  }
}
