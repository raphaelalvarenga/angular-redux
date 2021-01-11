import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PessoasComponent } from './pessoas/pessoas.component';
import { FormPessoaComponent } from './form-pessoa/form-pessoa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { pessoaReducer } from './redux/reducers/pessoa.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    FormPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ pessoaReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
