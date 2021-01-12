import { Action, createReducer, on } from '@ngrx/store';
import { Pessoa } from 'src/app/classes/pessoa.class';
import { getPessoas } from '../actions/pessoa.action';

const initialState: Pessoa[] = [];

const _pessoaReducer = createReducer(
    initialState,
    on(getPessoas, (state) => state)
);

export const pessoaReducer = (state: Pessoa[], action: Action) => _pessoaReducer(state, action);