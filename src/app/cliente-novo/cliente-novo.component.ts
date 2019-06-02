import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClienteService } from '../cliente.service';
import { Router } from "@angular/router";
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {

  addForm: FormGroup
  riscos = []

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService,
    private router: Router) {
    this.riscos = ['A', 'B', 'C']
  }

  ngOnInit() {
    this.createFormGroup(new Cliente());
  }


  createFormGroup(cliente: Cliente) {

    this.addForm = this.formBuilder.group({
      idCliente: [cliente.idCliente],
      nome: [cliente.nome, Validators.required],
      limiteCredito: [cliente.limiteCredito, Validators.required],
      risco: [cliente.risco, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);

    if (this.addForm.invalid) {
      console.log("invalido formulário");
      return;
    }

    this.clienteService.saveCliente(this.addForm.value)
      .subscribe(data => {
        console.log(data);
      });
    // this.createFormGroup(new Cliente());
    // this.router.navigate(['list-user']);
  }

  getTaxa() {
    return this.clienteService.getTaxa(this.addForm.get('risco').value);
  }
}
