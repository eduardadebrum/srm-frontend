import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ClienteService } from './cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule, } from "@angular/forms";

import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    ClienteNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [ClienteService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
