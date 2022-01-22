import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/RegisterActions";
import {Observable} from "rxjs";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/Selectors";
import {AppState} from "../../shared/types/AppState";
import {RegisterRequest} from "../../shared/types/RegisterRequest";
import {BackendError} from "../../../shared/types/BackendError";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup | undefined;
  isSubmitting$: Observable<boolean> | undefined;
  backendErrors$: Observable<BackendError | null> | undefined

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm() : void {
    this.form = this.formBuilder.group({
      username : new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  onRegister() {
    if(this.form && this.form.value ) {
      const request: RegisterRequest = {
        user: this.form.value,
      }
      this.store.dispatch(registerAction({request}));
      this.form.reset();
    }
  }

  private initializeValues() : void {

    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingSelector)
    );

    this.backendErrors$ = this.store.pipe(
      select(validationErrorsSelector)
    );
  }
}
