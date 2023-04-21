import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
  
})
export class MovieComponent {


  @Input() movie: Movie;
  
  constructor(private router:Router,private authSerivce:AuthService){}

  bookTickets(){
    this.router.navigate(['/reservation']);
  }

  isLoggedIn(){
    return this.authSerivce.getUserStatus();
  }


}
