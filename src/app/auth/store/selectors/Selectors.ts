import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../../shared/types/AppState";
import {AuthState} from "../../shared/types/AuthState";


export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth')
export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState:AuthState) => authState.isSubmitting
  );

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState:AuthState) => authState.isLoggedIn
)
export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState:AuthState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentUser
)
