import { Component } from '@angular/core';
import { Movie } from './interfaces/movie';
import { Output,EventEmitter } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies_angular';
  

  constructor(public authService: AuthService) { }
 
  logout() {
    this.authService.logOut();
  }
 
}
