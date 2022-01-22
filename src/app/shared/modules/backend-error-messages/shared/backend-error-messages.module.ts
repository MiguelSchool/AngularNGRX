import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../components/backend-error-messages/backend-error-messages.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    BackendErrorMessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackendErrorMessagesComponent
  ]
})
export class BackendErrorMessagesModule { }
