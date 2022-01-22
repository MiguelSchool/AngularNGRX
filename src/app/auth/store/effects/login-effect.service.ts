import { Injectable } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PersistenceService} from "../../shared/services/persistence.service";
import {Router} from "@angular/router";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {CurrentUser} from "../../../shared/types/CurrentUser";
import {loginActions, loginFailureAction, loginSuccessActions} from "../actions/LoginActions";

@Injectable()
export class LoginEffectService {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) { }

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loginActions),
    switchMap(({request}) => {
      return this.authService.login(request).pipe(
        map((currentUser:CurrentUser) => {
          this.persistenceService.set('accessToken',currentUser.token);
          console.log(currentUser)
          return loginSuccessActions({currentUser: currentUser})
        }),
        catchError((errorResponse) => {
          return of(
            loginFailureAction({errors: errorResponse.error.errors})
          )
        })
      )
    })
  ));

  redirectAfterSubmit$ = createEffect(
    ()=> this.actions$.pipe(
      ofType(loginSuccessActions),
      tap( () => {
        this.router.navigateByUrl('/home')
      })
    ), { dispatch: false }
  )
}
