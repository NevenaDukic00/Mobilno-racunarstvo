import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  buttonClick:boolean = true;
  @Input() movie: Movie;
  
  @Output() reservation = new EventEmitter<Movie>();
 
  bookTickets(){
    console.log("Saljemo: " + JSON.stringify(this.movie));
    this.reservation.emit(this.movie);
  }

}
