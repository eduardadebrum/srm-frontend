import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl : string = "http://localhost:8080/"

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    
    this.baseUrl.concat()
    return this.http.get<any[]>( this.baseUrl.concat("clientes"),  { headers});

  }
}
