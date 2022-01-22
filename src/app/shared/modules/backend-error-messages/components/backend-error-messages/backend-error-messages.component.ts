import {Component, Input, OnInit} from '@angular/core';
import {BackendError} from "../../../../types/BackendError";

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.css']
})
export class BackendErrorMessagesComponent implements OnInit {

  @Input('backendErrors') backendErrorsProps: BackendError | undefined;

  errorMessages: string[] | undefined
  constructor() { }

  ngOnInit(): void {
    if(this.backendErrorsProps){
      this.errorMessages = Object.keys(this.backendErrorsProps)
        .map((name:string) => {
          let messages;
          if (this.backendErrorsProps) {
            // @ts-ignore
            messages = this.backendErrorsProps[name].join(' ');
          }
          return `${name} ${messages}`
        });
    }
  }

}
