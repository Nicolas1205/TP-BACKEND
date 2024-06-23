import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page1-form.component.html',
  styleUrl: './page1-form.component.css'
})
export class Page1FormComponent {
  producto: Producto;

  constructor(private productoService: ProductoService, private router: Router){
    this.producto = new Producto();
  };

  agregarProducto(){
    this.productoService.addProducto(this.producto).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['page1']);
      },
      (error) => {
        console.log(error);
      }
    )
  };

}
