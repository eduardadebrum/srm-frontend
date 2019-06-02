import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Array<any>

  constructor(public clientService: ClienteService) { }

  ngOnInit() {
    this.clientService.findAll()
    .subscribe(clientsResult => this.clientes = clientsResult);
  }
}
