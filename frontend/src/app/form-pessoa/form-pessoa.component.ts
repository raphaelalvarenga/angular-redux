import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Pessoa } from '../classes/pessoa.class';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css']
})
export class FormPessoaComponent implements OnInit {

  personForm = this.fb.group({
    nome: ['', Validators.required],
    idade: ['', Validators.required],
    nacionalidade: ['', Validators.required]
  });

  pessoa: Pessoa;

  alert = {
    visible: false,
    type: '',
    message: ''
  }

  urlArr: string[];

  constructor(private fb: FormBuilder, private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.urlArr = this.router.url.split('/');

    if (this.urlArr.length === 3) {
      const id = parseInt(this.urlArr[2], 10);
      
      this.pessoaService.getPessoasById(id).subscribe(
        result => {
          this.pessoa = result;

          this.personForm.setValue({
            nome: this.pessoa.nome,
            idade: this.pessoa.idade,
            nacionalidade: this.pessoa.nacionalidade
          });
        },

        error => {
          console.log(error);
        }
      )
    }
  }

  submitForm() {
    if (this.personForm.status === 'VALID') {
      let request: Observable<Pessoa | Array<Number>>;

      const nome = this.personForm.value.nome;
      const idade = this.personForm.value.idade;
      const nacionalidade = this.personForm.value.nacionalidade;

      if (this.urlArr.length === 3) {

        const id = parseInt(this.urlArr[2], 10);

        this.pessoa = new Pessoa(nome, idade, nacionalidade, null, null, id);
        request = this.pessoaService.putPessoa(this.pessoa);
      } else {
        this.pessoa = new Pessoa(nome, idade, nacionalidade);
        request = this.pessoaService.postPessoa(this.pessoa)
      }

      request.subscribe(
        result => {
          this.clearForm();
          this.alert = { visible: true, type: 'success', message: 'Cadastro realizado com sucesso!' }
        },

        error => {
          this.alert = { visible: true, type: 'danger', message: 'Ocorreu um erro!' }
        },
      )
    }
  }

  clearForm() {
    this.personForm.reset();
  }

  inputChange() {
    this.alert = { ...this.alert, visible: false }
  }

}
