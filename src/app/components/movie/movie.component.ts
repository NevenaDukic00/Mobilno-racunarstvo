import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { AuthService } from 'src/app/services/auth.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
  
})
export class MovieComponent {


  @Input() movie: Movie;
  @Output() bookTicket = new EventEmitter<Movie>();
  constructor(private router:Router,private authSerivce:AuthService,private ticketService:TicketsService){}

  bookTickets(){
    console.log("Current movie je: " + this.movie);
    this.ticketService.setCurrentMovie(this.movie);
    this.router.navigate(['/reservation']);
  }

  isLoggedIn(){
    return this.authSerivce.getUserStatus();
  }


}
