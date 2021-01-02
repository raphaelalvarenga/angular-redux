import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../classes/pessoa.class';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Array<Pessoa> = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getPessoas().subscribe(
      result => {
        this.pessoas = result;
      },

      error => {
        console.log(error);
      }
    )
  }

  deletePessoas(pessoa: Pessoa) {
    this.pessoaService.deletePessoa(pessoa).subscribe(
      result => {
        this.pessoas = this.pessoas.filter(pessoaItem => pessoaItem !== pessoa);
      },

      error => {
        console.log(error);
      }
    )
  }

}
