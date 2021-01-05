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

  getPessoasById(id: number) {
    return this.http.get<Pessoa>(`${this.url}/${id}`);
  }

  postPessoa(pessoa: Pessoa) {

    const { nome, idade, nacionalidade } = pessoa;
    
    return this.http.post<Pessoa>(this.url, {nome, idade, nacionalidade})
  }

  putPessoa(pessoa: Pessoa) {
    console.log(pessoa);
    const { nome, idade, nacionalidade } = pessoa;

    return this.http.put<Array<number>>(`${this.url}/${pessoa.id}`, {
      nome, idade, nacionalidade
    });
  }

  deletePessoa(pessoa: Pessoa) {
    return this.http.delete<number>(`${this.url}/${pessoa.id}`);
  }
}
