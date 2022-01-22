import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import {authRouter} from "./AuthRoutes";
import {AuthService} from "./shared/services/auth.service";
import {RegisterEffectService} from "./store/effects/register-effect.service";

import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers/Reducer";
import {EffectsModule} from "@ngrx/effects";
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/shared/backend-error-messages.module";
import {PersistenceService} from "./shared/services/persistence.service";
import { LoginComponent } from './components/login/login.component';
import {LoginEffectService} from "./store/effects/login-effect.service";
import {CurrentUserEffectService} from "./store/effects/current-user-effect.service";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        authRouter,
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([
          RegisterEffectService,
          LoginEffectService,
          CurrentUserEffectService
        ]),
        BackendErrorMessagesModule
    ],
  providers:
    [
      AuthService,
      PersistenceService
    ]
})
export class AuthModule { }

