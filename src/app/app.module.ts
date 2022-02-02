import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {appRouter} from "../appRoutes";
import {EffectsModule} from "@ngrx/effects";
import {TopbarModule} from "./shared/modules/topbar/topbar.module";
import { HomeComponent } from './components/home/home.component';
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import {PersistenceService} from "./auth/shared/services/persistence.service";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {FeedTogglerModule} from "./shared/modules/feed-toggler/feed-toggler.module";
import {YourFeedModule} from "./your-feed/your-feed.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    appRouter,
    YourFeedModule,
    HttpClientModule,
    FeedTogglerModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({router: routerReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    TopbarModule
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
