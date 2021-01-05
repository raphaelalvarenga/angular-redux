import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { FormPessoaComponent} from './form-pessoa/form-pessoa.component';

const routes: Routes = [
  { path: '', component: PessoasComponent },
  { path: 'form-pessoas/:id', component: FormPessoaComponent },
  { path: 'form-pessoas', component: FormPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
