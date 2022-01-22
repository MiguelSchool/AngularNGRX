import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../shared/types/LoginRequest";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {BackendError} from "../../../shared/types/BackendError";
import {AppState} from "../../shared/types/AppState";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/Selectors";
import {loginActions} from "../../store/actions/LoginActions";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  isSubmitting$: Observable<boolean> | undefined;
  backendErrors$: Observable<BackendError | null> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onLogin(): void {
    if( this.loginForm && this.loginForm.value ) {
      const request: LoginRequest = {
        user: this.loginForm.value
      }
      this.store.dispatch(loginActions({request}));
      this.loginForm.reset();
    }
  }
  private initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }
  private initializeValues() {

    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingSelector));

    this.backendErrors$ = this.store.pipe(
      select(validationErrorsSelector));
  }

}
