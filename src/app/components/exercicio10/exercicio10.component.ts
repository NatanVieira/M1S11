import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.scss']
})
export class Exercicio10Component implements OnInit {
  listaItens: string[] = [];
  atividade: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  adicionarAtividade () {
    this.listaItens.push(this.atividade);
    this.atividade = '';
  }
}
