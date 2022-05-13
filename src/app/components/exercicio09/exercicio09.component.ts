import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-exercicio09',
  templateUrl: './exercicio09.component.html',
  styleUrls: ['./exercicio09.component.scss']
})
export class Exercicio09Component implements OnInit {
  clientePetShop: ICliente = {
    nome: '',
    cpf: '',
    nomeCao: '',
    codigoCao: '',
    email: ''
  }
  
  displayModal: string = 'none';
  mostraInfoCliente: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  abreModal(){
    this.displayModal = 'block';
  }
  
  fechaModal(){
    this.displayModal = 'none';
  }
}
