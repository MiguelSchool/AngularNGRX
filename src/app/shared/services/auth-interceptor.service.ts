import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersistenceService} from "../../auth/shared/services/persistence.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private persistenceService: PersistenceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.persistenceService.get('accessToken');
    request.clone({
      setHeaders: {
        Authorization: token
      }
    });
    return next.handle(request);
  }
}
