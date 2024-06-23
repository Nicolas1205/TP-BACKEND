import { CommonModule } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { EspectadorService } from '../../services/espectador.service';

@Component({
  selector: 'app-pageb-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pageb-form.component.html',
  styleUrl: './pageb-form.component.css'
})
export class PagebFormComponent {
  ticket: Ticket;
  espectadores: Array<any>;
  categorias: Array<any>;
  accion: string = '';
  id: string='';
  formData: any = {
    precioTicket: 0,
    categoriaEspectador: '',
    fechaCompra: '',
    espectadorId: ''
  };
  constructor(private ticketService: TicketService, private routes: Router, private activateRoute: ActivatedRoute, private espectadorService: EspectadorService){
    this.ticket = new Ticket();
    this.espectadores = new Array<any>();
    this.categorias = new Array<any>();
  };

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if(params[ 'id' ] == 0){
        this.accion = 'new';
        this.listarEspectadores();
        this.listarCategorias();

      }else{
        this.accion = 'update';
        this.listarEspectadores();
        this.listarCategorias();
        this.cargarTicket(params['id'])
      }
    })
  }

  cargarTicket(id: string):void {
    this.ticketService.getTicketById(id).subscribe(
      data => {
        Object.assign(this.ticket, data)
        //this.ticket = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  listarEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      data => {
        this.espectadores = data;
        console.log(this.espectadores);
      },
      error => {
        console.log(error);
      }
    );
  }

  listarCategorias() {
    this.ticketService.getCategorias().subscribe(
      data => {
        this.categorias = data;
        console.log(this.categorias);
      },
      error => {
        console.log(error);
      }
    )
  }

  crearTicket(){
    this.ticketService.addTicket(this.ticket).subscribe(
      data => {
        console.log(data);
        this.formData = {
          precioTicket: 0,
          categoriaEspectador: '',
          fechaCompra: '',
          espectadorId: ''
        };
        this.routes.navigate(['pageb']);
      },
      error => {
        console.log(error);
      }
    );
  }


  modificarTicket(){
    this.ticketService.editTicket(this.ticket).subscribe(
      data => {
        console.log(data);
        this.routes.navigate(['pageb']);
      },
      error => {
        console.log(error);
      }
    );
  }


}
