import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PessoaService } from '../../services/pessoa.service';

@Injectable()
export class PessoaEffect {
    getPessoas$ = createEffect(() => this.actions$.pipe(
        ofType('[Pessoas Page] Get Pessoas'),
        mergeMap(() => this.pessoaService.getPessoas()
            .pipe(
                map(pessoas => ({ type: '[Pessoas API] Pessoas Loaded Success', payload: pessoas })),
                catchError(() => of({ type: '[Pessoas API] Pessoas Loaded Error' }))
            )
        )
    ));

    constructor(private actions$: Actions, private pessoaService: PessoaService) {}
}