import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../classes/pessoa.class';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPessoas } from '../redux/actions/pessoa.action';

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

  getPessoas() {
    this.store.dispatch(getPessoas());
    this.pessoas$.subscribe(result => console.log(result));
  }

  editarPessoa(pessoa: Pessoa) {
    this.router.navigateByUrl(`/form-pessoas/${pessoa.id}`);
  }

  deletePessoas(pessoa: Pessoa) { }

}
