import { Injectable } from '@angular/core';
import {RegisterRequest} from "../types/RegisterRequest";
import {map, Observable} from "rxjs";
import {CurrentUser} from "../../../shared/types/CurrentUser";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthResponse} from "../types/AuthResponse";
import {LoginRequest} from "../types/LoginRequest";



@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }
  register(data: RegisterRequest) : Observable<CurrentUser> {
    const url = environment.apiURL+'/users';
    return this.http.post<AuthResponse>(url,data).pipe(
      map(AuthService.getUser)
    );
  }

  login(data: LoginRequest) : Observable<CurrentUser> {
    const url = environment.apiURL+  '/users/login';
    return this.http.post<AuthResponse>(url,data).pipe(
      map(AuthService.getUser)
    );
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiURL + '/user';
    return this.http.get<AuthResponse>(url).pipe(
      map(AuthService.getUser)
    )
  }


  private static getUser(response: AuthResponse):CurrentUser {
    return response.user;
  }
}
