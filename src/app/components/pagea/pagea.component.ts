import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransaccionService } from '../../services/transaccion.service';
import { Route, Router, RouterModule } from '@angular/router';
import { Transaccion } from '../../models/transaccion';

@Component({
  selector: 'app-pagea',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pagea.component.html',
  styleUrl: './pagea.component.css'
})
export class PageaComponent {
  transaccion: Transaccion;
  aparecer: boolean=false;

  constructor(private transaccionService: TransaccionService, private route: Router){
    this.transaccion=new Transaccion();
  }

 obtenerSimbolos(){
  this.transaccionService.getSimbols().subscribe(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  )
 }

 convertir(){
  this.transaccionService.convert(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.cantidadOrigen).subscribe(
    (data) => {
      console.log(data);
      this.transaccion.tasaConversion=data.info.rate;
      this.transaccion.cantidadDestino=data.result;
      console.log(this.transaccion);
    },
    (error) => {
      console.log(error);
    }
  )
 }

 guardarConversion(){
  this.transaccionService.addTransaction(this.transaccion).subscribe(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  )
 }
}
