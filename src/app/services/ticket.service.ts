import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

  getTicketById(id: string): Observable<any> {
    let httpOption = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this._http.get(`http://localhost:3000/ticket/${id}`, httpOption);
  }

  getTickets(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get('http://localhost:3000/tickets', httpOptions);
  }
  deleteTicket(id: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.delete(`http://localhost:3000/ticket/${id}`, httpOptions);
  }
  getTicketsByCat(cat: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get(`http://localhost:3000/ticket/categoria/${cat}`, httpOptions);
  }

  getTicketsByCategoria(categoriaNombre: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get(`http://localhost:3000/ticket/tipo-categoria/${categoriaNombre}`, httpOptions);
  }

  getCategorias(): Observable<any> {
     const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get("http://localhost:3000/ticket/categorias", httpOptions);
  }

  addTicket(ticket: Ticket): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),

    }
    let body = JSON.stringify(ticket);
    return this._http.post('http://localhost:3000/ticket/', body, httpOptions);
  }

  editTicket(ticket: Ticket): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),

    }
    let body = JSON.stringify(ticket);
    return this._http.put(`http://localhost:3000/ticket/`, body, httpOptions);
  }


}
