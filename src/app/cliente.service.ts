import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');

    this.baseUrl.concat()
    return this.http.get<Cliente[]>(this.baseUrl.concat("clientes"), { headers });

  }

  saveCliente(cliente: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');

    this.baseUrl.concat()
    return this.http.post<Cliente>(this.baseUrl.concat("saveCliente"), cliente);

  }

  getTaxa(risco: string) {
    switch (risco) {
      case 'A':
        return "0%"
      case 'B':
        return "10%"
      case 'C':
        return "30%"
    }
  }
}
