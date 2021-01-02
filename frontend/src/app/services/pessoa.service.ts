import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../classes/pessoa.class';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getPessoas() {
    return this.http.get<Array<Pessoa>>(this.url);
  }

  getPessoasById(pessoa: Pessoa) {

  }

  postPessoa(pessoa: Pessoa) {

  }

  putPessoa(pessoa: Pessoa) {

  }

  deletePessoa(pessoa: Pessoa) {
    return this.http.delete<number>(`${this.url}/${pessoa.id}`);
  }
}
