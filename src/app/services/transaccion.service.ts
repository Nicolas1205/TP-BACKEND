import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http: HttpClient) { }

  public getSimbols(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'X-RapidAPI-Key': 'cee94021e8msh761f05d5edf2155p1e08a2jsne62d0f5c3a69'
      }),
    }
    return this._http.get("https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols", httpOptions);
  }

  public convert(origen: String, destino: String, monto: number): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'X-RapidAPI-Key': 'cee94021e8msh761f05d5edf2155p1e08a2jsne62d0f5c3a69'
      }),
    }
    return this._http.get(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${origen}&to=${destino}&amount=${monto}`, httpOptions);
  }

  addTransaction(transaccion: Transaccion): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body= JSON.stringify(transaccion);

    return this._http.post('http://localhost:3000/transaccion', body, httpOptions)
  };

  getTransactions(): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({

      }),
    }
    return this._http.get('http://localhost:3000/transacciones', httpOptions)
  };

  getTransactionsByParams(origen: String, destino: String): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({

      }),
    }
    return this._http.get(`http://localhost:3000/transaccion/email?source=${origen}&target=${destino}`, httpOptions)
  };

}
