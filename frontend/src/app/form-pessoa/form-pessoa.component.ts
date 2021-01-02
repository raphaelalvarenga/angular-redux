import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Pessoa } from '../classes/pessoa.class';
import { PessoaService } from '../services/pessoa.service';

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

  constructor(private fb: FormBuilder, private pessoaService: PessoaService) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.personForm.status === 'VALID') {
      this.pessoa = new Pessoa(this.personForm.value.nome, this.personForm.value.idade, this.personForm.value.nacionalidade);
      this.pessoaService.postPessoa(this.pessoa).subscribe(
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
