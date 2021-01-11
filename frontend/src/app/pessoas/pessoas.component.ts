import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../classes/pessoa.class';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  pessoaReducer: Pessoa[]
}

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pessoas$ = this.store.select('pessoaReducer');
  }

  getPessoas() { }

  editarPessoa(pessoa: Pessoa) {
    this.router.navigateByUrl(`/form-pessoas/${pessoa.id}`);
  }

  deletePessoas(pessoa: Pessoa) { }

}
