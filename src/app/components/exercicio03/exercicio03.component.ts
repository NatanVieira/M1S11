import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.scss']
})
export class Exercicio03Component implements OnInit {
  arrayList: string[] = ['Transformers','John Wick','Forrest Gump', 'Pulp Fiction','Deadpool'];
  constructor() { }

  ngOnInit(): void {
  }

}
