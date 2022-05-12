import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.scss']
})
export class Exercicio07Component implements OnInit {
  nome: string = '';
  cpf: string = '';
  diaAniversario: number = 1;
  senha: string = '';
  mostraInfo: boolean = false;
  formularioValido:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  validaFormulario(){
     this.formularioValido = this.cpf !== '' && this.senha !== '' && this.diaAniversario >= 1 && this.diaAniversario <= 31;
  }
}
