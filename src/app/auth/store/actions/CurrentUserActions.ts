import {createAction, props} from "@ngrx/store";
import {CurrentUserActionTypes} from "../../shared/types/actionTypes/CurrentUserActionTypes";
import {LoginRequest} from "../../shared/types/LoginRequest";
import {CurrentUser} from "../../../shared/types/CurrentUser";

export const currentUserActions = createAction(
  CurrentUserActionTypes.GET_CURRENT_USER,
  props<{request: LoginRequest}>()
);

export const currentUserSuccessActions = createAction(
  CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUser }> ()
);

export const currentUserFailureActions =  createAction(
  CurrentUserActionTypes.GET_CURRENT_USER_FAILURE
);
