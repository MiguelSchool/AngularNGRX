import {AuthState} from "../../shared/types/AuthState";
import {Action, createReducer, on} from "@ngrx/store";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "../actions/RegisterActions";
import {loginActions, loginFailureAction, loginSuccessActions} from "../actions/LoginActions";
import {currentUserActions, currentUserFailureActions, currentUserSuccessActions} from "../actions/CurrentUserActions";


const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
  isLoading: false
};

const authReducer = createReducer(
  initialState,
  on(registerAction,(state : AuthState) => ({
    ...state,
    isSubmitting : true,
    validationErrors : null
  })),

  on(registerSuccessAction, (state,action) : AuthState => ({
    ...state,
    isLoggedIn : true,
    currentUser : action.currentUser
  })),

  on(registerFailureAction, (state, action): AuthState =>({
    ...state,
    isSubmitting : false,
    validationErrors : action.errors
  })),

  on(loginActions, (state): AuthState => ({
    ...state,
    isSubmitting: true,
    isLoggedIn: true,
    validationErrors: null
  })),

  on(loginSuccessActions, (state, action):AuthState => ({
    ...state,
    isLoggedIn:true,
    isSubmitting: true,
    currentUser: action.currentUser
  })),

  on(loginFailureAction, (state, action): AuthState => ({
    ...state,
    isLoggedIn: false,
    isSubmitting: false,
    validationErrors: action.errors
  })),

  on(currentUserActions,(state): AuthState => ({
    ...state,
    isLoading: true
  })),

  on(currentUserSuccessActions,(state, action): AuthState => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),

  on(currentUserFailureActions, (state): AuthState => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
    currentUser: null
  }))
);

export function reducers(state:AuthState, action: Action) {
  return authReducer(state,action)
}
