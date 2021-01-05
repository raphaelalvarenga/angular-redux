import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../classes/pessoa.class';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Array<Pessoa> = [];

  constructor(private pessoaService: PessoaService, private router: Router) { }

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

  editarPessoa(pessoa: Pessoa) {
    this.router.navigateByUrl(`/form-pessoas/${pessoa.id}`);
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
