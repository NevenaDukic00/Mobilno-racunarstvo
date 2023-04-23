import { Component } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { MovieService } from 'src/app/services/movie.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent {

  myTickets:Ticket[]= new Array();
  allTickets:Ticket[];
  displayedColumns: string[] = ['title', 'seat_number', 'date', 'price'];

  constructor(private ticketService:TicketsService){}

  ngOnInit(): void {
    this.loadData();
  }

  
  public loadData(){
    this.ticketService.getMyMovies().subscribe((res)=>{
      this.allTickets = res.data;
      console.log(res.data);
      this.allTickets.forEach(element => {
        if(element.movie!=null){
          this.myTickets.push(element);
        }
      });


    });
    
  }
 

}
