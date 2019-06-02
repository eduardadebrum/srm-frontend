import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

const routes: Routes = [ { path: 'cliente-lista', component: ClienteListaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
