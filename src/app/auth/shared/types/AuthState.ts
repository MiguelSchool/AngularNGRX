import {CurrentUser} from "../../../shared/types/CurrentUser";
import {BackendError} from "../../../shared/types/BackendError";

export interface AuthState {
  isSubmitting: boolean;
  currentUser :  CurrentUser | null;
  isLoggedIn : boolean | null;
  validationErrors : BackendError | null;
  isLoading: boolean | null;
}
