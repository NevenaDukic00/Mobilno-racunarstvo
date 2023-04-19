import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Output() reservation = new EventEmitter<Movie>();
  @Input() movies: Movie[];

  
  ngOnInit(){
    console.log("Uaso ovde");
    console.log("Movies: " + this.movies);
  }

  bookTickets(m:Movie){
    console.log("U home je: " + JSON.stringify(m));
    this.reservation.emit(m);
  }
  

}
