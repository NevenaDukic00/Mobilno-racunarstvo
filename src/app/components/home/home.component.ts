import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movies:Movie[];
  @Input() rm_movie:Movie;
  constructor(private movieService:MovieService){}

  ngOnInit(): void {
    this.loadData();
  }

  
  public loadData(){
    this.movieService.getMovies().subscribe((res)=>{console.log(res);this.movies = res.data;console.log(this.movies);});
    
  }
  removeMovie(m:Movie){
    console.log(m);
    this.movies.forEach((element,index)=>{
      if(element.id==m.id) this.movies.splice(index,1);
   });
   
  }

}
