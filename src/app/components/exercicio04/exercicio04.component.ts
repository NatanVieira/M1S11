import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.scss']
})
export class Exercicio04Component implements OnInit {
	arrayFotos: any = [
 	 {
	    url: "../assets/img/cachorro1.jpg",
	    description:"Cachorro 1"
	  },
	  {
	    url: "../assets/img/cachorro2.jpg",
	    description:"Cachorro 2"
	  },
	  {
	    url: "../assets/img/cachorro3.jpg",
	    description:"Cachorro 3"
	  },
	  {
	    url: "../assets/img/cachorro4.jpg",
	    description:"Cachorro 4"
	  },
	  {
	    url: "../assets/img/cachorro5.jpg",
	    description:"Cachorro 5"
	  }
	]
  constructor() { }

  ngOnInit(): void {
  }

}
