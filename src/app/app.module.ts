import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercicio01Component } from './components/exercicio01/exercicio01.component';
import { Exercicio02Component } from './components/exercicio02/exercicio02.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio01Component,
    Exercicio02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
