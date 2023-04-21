import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketsService } from 'src/app/services/tickets.service';
import * as angular from "angular";
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {

  tickets:Ticket[];
  res:any[];
  el:any;
  seat = "seat";

  constructor(private ticketService:TicketsService){}

  ngOnInit(): void {
    this.loadData();
  }

  
  public loadData(){
    this.ticketService.getTickets().subscribe((res)=>{
      this.tickets = res.data;
      this.tickets.forEach(element => {
        console.log(element);
        angular.element(document.getElementById(element.id+""));
        // document.getElementById(element.id+"")?.add("occupied");
        
      });
    });
  }

}
