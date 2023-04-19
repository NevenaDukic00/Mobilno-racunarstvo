import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent {

  constructor(private movieService:MovieService){}

  // ngOnInit():void{
  //   this.movieService.login().subscribe((res)=>localStorage.setItem('token',res.access_token));
  // }

}
