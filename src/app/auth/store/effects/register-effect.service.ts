import { Injectable } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/RegisterActions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {CurrentUser} from "../../../shared/types/CurrentUser";
import {Actions, ofType} from "@ngrx/effects";
import {createEffect} from "@ngrx/effects";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistenceService} from "../../shared/services/persistence.service";
import {Router} from "@angular/router";


@Injectable()
export class RegisterEffectService {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser:CurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return registerSuccessAction({currentUser})
          }),
          catchError((errorResponse : HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
  ));

  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        //console.log('1');
        this.router.navigateByUrl('/home')
      })
    ),
    { dispatch: false }
  )
}



