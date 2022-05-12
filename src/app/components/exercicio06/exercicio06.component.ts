import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  templateUrl: './exercicio06.component.html',
  styleUrls: ['./exercicio06.component.scss']
})
export class Exercicio06Component implements OnInit {
  nome: string = '';
  cpf: string = '';
  diaAniversario: number = 1;
  senha: string = '';
  mostraInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
