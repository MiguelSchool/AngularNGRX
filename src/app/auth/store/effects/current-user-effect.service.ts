import {Injectable} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {currentUserActions, currentUserFailureActions, currentUserSuccessActions} from "../actions/CurrentUserActions";
import {catchError, map, of, switchMap} from "rxjs";
import {CurrentUser} from "../../../shared/types/CurrentUser";
import {PersistenceService} from "../../shared/services/persistence.service";

@Injectable()
export class CurrentUserEffectService {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  currentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currentUserActions),

      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUser) => {
            return currentUserSuccessActions({currentUser: currentUser})
          }),

          catchError((errorResponse) =>
            of(currentUserFailureActions()))
        )
      })
    ));


}
