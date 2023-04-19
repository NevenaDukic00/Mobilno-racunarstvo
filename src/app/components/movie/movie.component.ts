import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  buttonClick:boolean = true;
  @Input() movie: Movie;
  
  @Output() reservation = new EventEmitter<Movie>();
 
  constructor(){
    sessionStorage.setItem("page", "movie");
  }
  bookTickets(){
    console.log("Saljemo: " + JSON.stringify(this.movie));
    this.reservation.emit(this.movie);
  }

}
