import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pageb',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pageb.component.html',
  styleUrl: './pageb.component.css'
})
export class PagebComponent {
  tickets: Array<any> = [];
  nombreCategoria: string = "";
  constructor(private ticketService: TicketService, private routes: Router){};

  obtenerTickets(){
    this.ticketService.getTickets().subscribe(
      data => {
        console.log(data);
        this.tickets = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  eliminarTicket(id: string){
    this.ticketService.deleteTicket(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  obtenerTicketCategoria(categoria: string) {
    this.ticketService.getTicketsByCat(categoria).subscribe(
      data => {
        console.log(data);
        this.tickets = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerTicketsNombreCategoria(categoria: string) {
    this.ticketService.getTicketsByCategoria(categoria).subscribe(
      data => {
        console.log(data);
        this.tickets = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  modificar(_id : string){
    this.routes.navigate(['/pagebForm', _id]);
  }

  agregar(){
    this.routes.navigate(['/pagebForm', 0]);
  }
}
