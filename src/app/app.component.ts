import { Component } from '@angular/core';
import { Movie } from './interfaces/movie';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies_angular';
  @Output() reservation = new EventEmitter<Movie>();

  bookTickets(m:Movie){
    console.log("Stigao dovde!" + JSON.stringify(m));
  }
  movies: Movie[] = [
    {
      title: 'Samsung Galaxy S22 Ultra1',
      description:
        'Samsung Galaxy S22 Ultra glavni je model S22 serije. To je prvi telefon serije S koji uključuje Samsungovu S Pen olovku.',
      image: '../../assets/images/Samsung-S22-U3.png',
      price: 985.89,
      genre: "AAA",
      date: new Date(2023,12,12),
      duration: "4h",
      rating :3


    },
    {
      title: 'Samsung Galaxy S22 Ultra2',
      description:
        'Samsung Galaxy S22 Ultra glavni je model S22 serije. To je prvi telefon serije S koji uključuje Samsungovu S Pen olovku.',
      image: '../../assets/images/Samsung-S22-U3.png',
      price: 985.89,
      genre: "AAA",
      date: new Date(2023,12,12),
      duration: "4h",
      rating :3


    },
    {
      title: 'Samsung Galaxy S22 Ultra',
      description:
        'Samsung Galaxy S22 Ultra glavni je model S22 serije. To je prvi telefon serije S koji uključuje Samsungovu S Pen olovku.',
      image: '../../assets/images/Samsung-S22-U3.png',
      price: 985.89,
      genre: "AAA",
      date: new Date(2023,12,12),
      duration: "4h",
      rating :3


    },
    {
      title: 'Samsung Galaxy S22 Ultra',
      description:
        'Samsung Galaxy S22 Ultra glavni je model S22 serije. To je prvi telefon serije S koji uključuje Samsungovu S Pen olovku.',
      image: '../../assets/images/Samsung-S22-U3.png',
      price: 985.89,
      genre: "AAA",
      date: new Date(2023,12,12),
      duration: "4h",
      rating :3


    }
  ];
}
