import { Action } from '@ngrx/store';
import { Pessoa } from 'src/app/classes/pessoa.class';

const initialState: Pessoa[] = [
    new Pessoa("Marilyn Monroe", 17, "American", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 1),
    new Pessoa("Abraham Lincoln", 50, "American", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 2),
    new Pessoa("Nelson Mandela", 45, "South African", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 3),
    new Pessoa("John F. Kennedy", 30, "American", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 4),
    new Pessoa("Martin Luther King", 42, "American", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 5),
    new Pessoa("Queen Elizabeth II", 18, "British", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 6),
    new Pessoa("Winston Churchill", 65, "British", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 7),
    new Pessoa("Donald Trump", 11, "American", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 8),
    new Pessoa("Bill Gates", 25, "American", "2021-01-05T23:40:40.000Z", "2021-01-05T23:40:40.000Z", 9)
];

export const pessoaReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'getPessoas':
            break;

        default: break;
    }

    return state;
}