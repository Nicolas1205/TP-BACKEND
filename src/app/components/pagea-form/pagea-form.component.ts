import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TransaccionService } from '../../services/transaccion.service';

@Component({
  selector: 'app-pagea-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pagea-form.component.html',
  styleUrl: './pagea-form.component.css'
})
export class PageaFormComponent {
  transacciones: Array<any>;
  origen: string='';
  destino: string='';
  constructor(private transaccionService: TransaccionService, private routes: Router){
    this.transacciones= new Array<any>();
  }

  obtenerTransacciones(){
    this.transaccionService.getTransactions().subscribe(
      (data) => {
        console.log(data);
        this.transacciones = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  obtenerTransaccionesPorParametros(){
    this.transaccionService.getTransactionsByParams(this.origen, this.destino).subscribe(
      (data) => {
        console.log(this.origen);
        console.log(this.destino);
        console.log(data);
        this.transacciones = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
