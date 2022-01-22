
import {createAction, props} from "@ngrx/store";
import {LoginActionTypes} from "../../shared/types/actionTypes/LoginActionTypes";
import {LoginRequest} from "../../shared/types/LoginRequest";
import {CurrentUser} from "../../../shared/types/CurrentUser";
import {BackendError} from "../../../shared/types/BackendError";

export const loginActions = createAction(
  LoginActionTypes.LOGIN,
  props<{ request: LoginRequest }>()
);

export const loginSuccessActions = createAction(
  LoginActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUser}>()
);

export const loginFailureAction = createAction(
  LoginActionTypes.LOGIN_FAILURES,
  props<{ errors: BackendError }>()
)
