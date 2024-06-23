import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  getProductosDestacados(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
    }
    return this._http.get('http://localhost:3000/productos/destacado', httpOptions);
  };

  addProducto(producto: Producto): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(producto);
    return this._http.post('http://localhost:3000/producto/', body, httpOptions);
  };
}
