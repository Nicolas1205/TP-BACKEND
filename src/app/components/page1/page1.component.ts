import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  productos: Array<any>;

  constructor(private productoService: ProductoService){
    this.obtenerProductosDestacados();
    this.productos = new Array<any>();
  };

  obtenerProductosDestacados(){
    this.productoService.getProductosDestacados().subscribe(
      (data) => {
        console.log(data);
        this.productos=data;
      },
      (error) => {
        console.log(error);
      }
    )
  };

}
