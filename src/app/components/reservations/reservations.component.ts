import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketsService } from 'src/app/services/tickets.service';
import * as angular from "angular";
import { element } from 'angular';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {

  tickets:Ticket[];
  selected_tickets:Ticket[] = new Array();
  res:any[];
  el:any;
  number_of_seats:number=0;
  price:number=0;
  elements: number[] = new Array();
  justClicked:Boolean = false;
  doubleClicked:Boolean = false;
  messageText:string = "";
  message:boolean = false;

  
  constructor(private ticketService:TicketsService,private authService:AuthService){}

  @Input() movie: Movie;

  ngOnInit(): void {
    this.movie = this.ticketService.getCurrentMovie();
    this.loadData();
  }

  
  public loadData(){
    console.log("Movie je: " + this.movie.title);
    this.ticketService.getTickets(this.movie.id).subscribe((res)=>{
      this.tickets = res.data;
      this.tickets.forEach(element => {
        console.log(element);
        document.getElementById(element.seat_number+"")?.classList.add("occupied");
      });
    });
  }
  clicked(event:Event) {
    if (this.justClicked === true) {
      this.doubleClicked = true;
      this.doubleClick(event);
    } else {
      this.justClicked = true;
      setTimeout(() => {
        console.log("USAO U SETTIMEOUT!");
        this.justClicked = false;
        if (this.doubleClicked === false) {
          this.singleClick(event);
        }
        this.doubleClicked = false;
      }, 400);
    }
  }
  
  singleClick(event:Event) {
   
    if ((event.target as Element).classList.contains('seat') &&
     !(event.target as Element).classList.contains('occupied')) {
      console.log("Jednom smo kliknuli");
      console.log( document.getElementById((event.target as Element).id+"")?.classList);
      document.getElementById((event.target as Element).id+"")?.classList.add("selected");
      this.price = this.price + this.movie.price;
      this.number_of_seats++;
  }
   
  }
  
  doubleClick(event:Event) {
    
    if ((event.target as Element).classList.contains('seat') &&
     !(event.target as Element).classList.contains('occupied') && (event.target as Element).classList.contains('selected')) {
      console.log("Dva puta smo kliknuli: " + (event.target as Element).id);
      console.log( document.getElementById((event.target as Element).id+"")?.classList);
      document.getElementById((event.target as Element).id+"")?.classList.remove("selected");
      this.price = this.price - this.movie.price;
      this.number_of_seats--;
  }
  
}
  
  bookTickets(){
    
  
    for (let index = 1; index < 49; index++) {
      this.elements.push(index);
    }
    this.elements.forEach(element => {
      if(document.getElementById(element+"")?.classList.contains("selected")){
        this.selected_tickets.push({
          id:0,
          movie_id:this.movie.id,
          user_id:this.authService.getUser(),
          seat_number:element,
          price:this.movie.price});
      }
     
    });
    if(this.selected_tickets.length!=0){
      this.selected_tickets.forEach(element => {
        this.ticketService.bookTickets(element).subscribe((res)=>console.log(res))
      });
      this.price = 0;
      this.number_of_seats = 0;
      this.messageText = "You have successfully booked tickets for movie: " + this.movie.title;
      this.message = true;
      this.resetScreen(this.selected_tickets);
    }
  }
  resetScreen(tickets:Ticket[]){
    tickets.forEach(element => {
      document.getElementById(element.seat_number+"")?.classList.remove("selected");
      document.getElementById(element.seat_number+"")?.classList.add("occupied");
    });

  }
  removeMessage(){
    this.messageText = "";
    this.message = false;
  }
 
}
