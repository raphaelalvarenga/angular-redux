import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../classes/pessoa.class';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Array<Pessoa> = [
    new Pessoa("Raphael", 31, "Brasileiro", new Date(), new Date(), 1),
    new Pessoa("Fabíola", 33, "Brasileira", new Date(), new Date(), 2),
    new Pessoa("Solange", 55, "Brasileira", new Date(), new Date(), 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
