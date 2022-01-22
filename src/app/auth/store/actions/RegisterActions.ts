import {createAction, props} from "@ngrx/store";
import {RegisterActionTypes} from "../../shared/types/actionTypes/RegisterActionTypes";
import {RegisterRequest} from "../../shared/types/RegisterRequest";
import {CurrentUser} from "../../../shared/types/CurrentUser";
import {BackendError} from "../../../shared/types/BackendError";


export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{ request: RegisterRequest }>()
);

export const registerSuccessAction = createAction(
  RegisterActionTypes.REGISTER_SUCCESS,
  props< { currentUser : CurrentUser } >()
);

export const registerFailureAction = createAction(
  RegisterActionTypes.REGISTER_FAILURE,
  props <{ errors: BackendError }>()
);


